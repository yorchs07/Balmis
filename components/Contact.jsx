'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

export default function Contact() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  })

  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  //async
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!form.nombre.trim()) {
      return setError('El nombre es obligatorio')
    }

    if (!form.mensaje.trim()) {
      return setError('El mensaje es obligatorio')
    }

    if (!form.telefono.trim() && !form.email.trim()) {
      return setError('Debes introducir un teléfono o un email')
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      const data = await res.json()

      if (data.success) {
        alert('Mensaje enviado correctamente 🚀')

        setForm({
          nombre: '',
          telefono: '',
          email: '',
          mensaje: ''
        })
      } else {
        setError('Error al enviar el mensaje')
      }
    } catch (err) {
      setError('Error de conexión con el servidor')
    }
  }

  return (
    <section
      id='contacto'
      className='
      py-32 px-6
      bg-gradient-to-b
      from-[var(--color-primary-dark)]
      via-[var(--color-primary-mid)]
      to-[var(--color-primary-light)]
    '
    >
      <div className='max-w-3xl mx-auto'>
        <ScrollReveal>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-white mb-12'>
            Contacto
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div
            className='
            bg-[#1f2f46]
            rounded-2xl
            shadow-xl
            p-8 md:p-10
            backdrop-blur-md
          '
          >
            <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
              <input
                type='text'
                name='nombre'
                value={form.nombre}
                onChange={handleChange}
                placeholder='Nombre y apellidos'
                className='input-style'
              />

              <input
                type='tel'
                name='telefono'
                value={form.telefono}
                onChange={handleChange}
                placeholder='Número de teléfono'
                className='input-style'
              />

              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder='Correo electrónico'
                className='input-style'
              />

              <textarea
                name='mensaje'
                value={form.mensaje}
                onChange={handleChange}
                rows='5'
                placeholder='¿En qué podemos ayudarte?'
                className='input-style resize-none'
              />

              {error && (
                <p className='text-red-400 text-sm text-center'>{error}</p>
              )}

              <button
                type='submit'
                className='
                mt-4
                bg-blue-600 hover:bg-blue-500
                text-white font-semibold
                py-3 rounded-lg
                transition
                shadow-md hover:shadow-lg
              '
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
