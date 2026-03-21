import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const { nombre, telefono, email, mensaje } = await req.json()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'TU_EMAIL_AQUI',
        pass: 'TU_PASSWORD_APP'
      }
    })

    await transporter.sendMail({
      from: `"Formulario Web" <TU_EMAIL_AQUI>`,
      to: 'EMAIL_DESTINO_AQUI',
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
    return Response.json({ success: false, error })
  }
}
