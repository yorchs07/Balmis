import nodemailer from 'nodemailer'
import { supabase } from '@/lib/supabase'

export async function POST(req) {
  try {
    const { nombre, telefono, email, mensaje } = await req.json()

    //Validación backend
    if (!nombre || !mensaje) {
      return Response.json({ success: false })
    }

    if (!telefono && !email) {
      return Response.json({ success: false })
    }

    if (email && !email.includes('@')) {
      return Response.json({ success: false })
    }

    //Guardar en Supabase
    await supabase.from('contacts').insert([
      {
        nombre,
        telefono,
        email,
        mensaje,
        fecha: new Date().toISOString()
      }
    ])

    //Configurar transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    //Enviar email
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
