import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const { nombre, telefono, email, mensaje } = await req.json()

    // VALIDACIÓN BACKEND
    if (!nombre || !mensaje) {
      return Response.json({ success: false })
    }

    if (!telefono && !email) {
      return Response.json({ success: false })
    }

    if (email && !email.includes('@')) {
      return Response.json({ success: false })
    }

    // CONFIGURAR TRANSPORTER
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    // ENVIAR EMAIL
    await transporter.sendMail({
      from: `"Formulario Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: 'Nuevo mensaje desde Balmis',
      text: `
Nombre: ${nombre}
Teléfono: ${telefono}
Email: ${email}

Mensaje:
${mensaje}
      `
    })

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ success: false })
  }
}
