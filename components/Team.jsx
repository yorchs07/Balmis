'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Team() {
  const [active, setActive] = useState(null)

  const team = [
    {
      name: 'Isabel Pena Yáñez',
      role: 'Doctora especialista en medicina preventiva',
      img: '/doctora.png',
      description:
        'Médico y directora responsable del proyecto. Especialista en medicina Preventiva, con una larga trayectoria en distintos grupos hospitalarios. Referente en acompañamiento de acreditaciones como la JCI.'
    },
    {
      name: 'Ana Castejón',
      role: 'Enfermera',
      img: '/enfermero.png',
      description: `Enfermera, dedicada la mayor parte de su carrera al ámbito de los cuidados críticos pediátricos, centrada en las buenas praxis.
        Desde siempre con ganas de aprender, ha ido evolucionando en su carrera a través de estudios como master en práctica avanzada en cuidados del recién nacido y adolescente sano,
        con intención de trabajar en base a la evidencia científica y al conocimiento empírico; ha trabajado en gestión como coordinadora del área pediátrica, gestionando unidades de hospitalización, UCIs, HDOP y consultas de pediatría. Empezó su trayectoria en esta compañía como un reto, un nuevo camino de aprendizaje, siempre a favor de la seguridad y el cuidado de los pacientes.`
    },
    {
      name: 'Juana Venegas',
      role: 'Rol',
      img: '/doctora.png',
      description:
        'Texto descriptivo del rol a ocupar por la tercera persona del equipo.'
    }
  ]

  return (
    <section
      id='equipo'
      className='py-24 px-6  bg-gradient-to-b
  from-[var(--color-primary-dark)]
  via-[var(--color-primary-mid)]
  to-[var(--color-primary-light)]'
    >
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-16 text-slate-800 dark:text-white'>
          Nuestro Equipo
        </h2>

        <div className='grid md:grid-cols-3 gap-10'>
          {team.map((member, index) => {
            const isActive = active === index

            return (
              <div
                key={index}
                onClick={() => setActive(isActive ? null : index)}
                className='cursor-pointer rounded-xl overflow-hidden shadow hover:shadow-xl transition'
              >
                {/* 🔝 BLOQUE SUPERIOR (BLANCO - NOMBRE) */}
                <div className='bg-white dark:bg-slate-800 p-4 text-center'>
                  <Image
                    src={member.img}
                    width={100}
                    height={100}
                    alt={member.name}
                    className='mx-auto rounded-full mb-3 object-cover w-24 h-24'
                  />

                  <h3 className='text-lg font-semibold text-slate-800 dark:text-white'>
                    {member.name}
                  </h3>
                </div>

                {/* 🔵 BLOQUE CENTRAL (AZUL - ROL) */}
                <div className='bg-blue-900 text-center p-4'>
                  <p className='text-blue-200 text-sm font-medium'>
                    {member.role}
                  </p>
                </div>

                {/* ⚪ BLOQUE INFERIOR (EXPANDIBLE) */}
                {isActive && (
                  <div className='bg-white dark:bg-slate-800 p-4'>
                    <p className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed'>
                      {member.description}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
