'use client'

import { useState } from 'react'
import { DoctorFemale, Nurse, Stethoscope } from 'healthicons-react'

export default function Team() {
  const [active, setActive] = useState(null)

  const team = [
    {
      name: 'Isabel Pena Yáñez',
      role: 'Doctora especialista en medicina preventiva',
      icon: DoctorFemale,
      description:
        'Médico y directora responsable del proyecto. Especialista en medicina Preventiva, con una larga trayectoria en distintos grupos hospitalarios. Referente en acompañamiento de acreditaciones como la JCI.'
    },
    {
      name: 'Ana Castejón',
      role: 'Enfermera',
      icon: Nurse,
      description: `Enfermera, dedicada la mayor parte de su carrera al ámbito de los cuidados críticos pediátricos, centrada en las buenas praxis.
        Desde siempre con ganas de aprender, ha ido evolucionando en su carrera a través de estudios como master en práctica avanzada en cuidados del recién nacido y adolescente sano,
        con intención de trabajar en base a la evidencia científica y al conocimiento empírico; ha trabajado en gestión como coordinadora del área pediátrica, gestionando unidades de hospitalización, UCIs, HDOP y consultas de pediatría. Empezó su trayectoria en esta compañía como un reto, un nuevo camino de aprendizaje, siempre a favor de la seguridad y el cuidado de los pacientes.`
    },
    {
      name: 'Juana Venegas',
      role: 'Especialista sanitaria',
      icon: Stethoscope,
      description:
        'Texto descriptivo del rol a ocupar por la tercera persona del equipo.'
    }
  ]

  return (
    <section
      id='equipo'
      className='py-24 px-6 bg-gradient-to-b
      from-[var(--color-primary-soft)]
      via-[var(--color-primary-mid)]
      to-[var(--color-primary-dark)]'
    >
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-16 text-white'>
          Nuestro Equipo
        </h2>

        <div className='grid md:grid-cols-3 gap-10 items-start'>
          {team.map((member, index) => {
            const isActive = active === index
            const Icon = member.icon

            return (
              <div
                key={index}
                onClick={() => setActive(isActive ? null : index)}
                className='
                  cursor-pointer rounded-xl overflow-hidden
                  shadow-lg hover:shadow-2xl
                  transition-all duration-300
                  hover:-translate-y-2
                  group
                  bg-[#1f2f46]
                '
              >
                {/* ICONO */}
                <div className='flex justify-center pt-6'>
                  <div
                    className='
                    p-4 rounded-full
                    bg-white/10
                    transition-all duration-300
                    group-hover:bg-blue-600
                    group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]
                  '
                  >
                    <Icon
                      className='
                      w-8 h-8 text-blue-300
                      transition-all duration-300
                      group-hover:text-white
                      group-hover:scale-110
                    '
                    />
                  </div>
                </div>

                {/* NOMBRE */}
                <div className='text-center p-4'>
                  <h3 className='text-lg font-semibold text-white'>
                    {member.name}
                  </h3>
                </div>

                {/* ROL */}
                <div className='bg-blue-900 text-center p-3'>
                  <p className='text-blue-200 text-sm font-medium'>
                    {member.role}
                  </p>
                </div>

                {/* DESCRIPCIÓN */}
                {isActive && (
                  <div className='bg-[#1f2f46] p-4 border-t border-white/10'>
                    <p className='text-sm text-slate-300 leading-relaxed'>
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
