'use client'

import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import { Shield, Droplets, Award, Activity } from 'lucide-react'

export default function Services() {
  const [active, setActive] = useState(null)

  const services = [
    {
      title: 'Prevención y Control de Infecciones (PCI)',
      icon: Shield,
      content: `Elaboramos y gestionamos el programa anual de PCI del centro,
adaptado a los estándares JCI y a la normativa nacional. Nuestro
trabajo abarca la vigilancia epidemiológica de la infección
nosocomial, el diseño e implementación de protocolos de aislamiento,
la formación del personal sanitario y el seguimiento de indicadores
clave. Actuamos como servicio externo de referencia para el comité
de infecciones, aportando criterio técnico, análisis de datos y
propuestas de mejora continua. Lo que incluye: programa anual de PCI
· vigilancia de IRAS y MMR · protocolos de aislamiento y
precauciones estándar · formación y auditorías · indicadores y
cuadro de mando.`
    },
    {
      title: 'Control de Legionella e instalaciones de agua sanitaria',
      icon: Droplets,
      content: `Gestionamos el cumplimiento del RD 487/2022 (actualizado con RD
614/2024) en instalaciones hospitalarias: elaboración y revisión del
programa de mantenimiento, muestreos trimestrales en todos los
puntos reglamentarios, interpretación de resultados y coordinación
de medidas correctoras. Asesoramos en los procesos de limpieza y
desinfección de la red, incluyendo hipercloración y protocolos de
actuación ante detección de Legionella.`
    },
    {
      title: 'Acompañamiento en acreditación JCI',
      icon: Award,
      content: `Ayudamos a los centros a prepararse para obtener o renovar la
acreditación JCI (8.ª edición), con especial foco en los capítulos
PCI, SQE y MMU. Realizamos un diagnóstico inicial de gaps,
diseñamos el plan de acción y acompañamos en todo el proceso.`
    },
    {
      title: 'Muestreo ambiental en áreas críticas',
      icon: Activity,
      content: `Realizamos el control ambiental microbiológico y de partículas en
quirófanos, UCI, salas de esterilización y otras áreas de alto
riesgo. Los resultados se entregan con interpretación técnica y
recomendaciones de actuación.`
    }
  ]

  return (
    <section
      id='servicios'
      className=' relative
  py-32 px-6
  bg-gradient-to-b
  from-[var(--color-primary-light)]
  via-[var(--color-primary-mid)]
  to-[var(--color-primary-dark)]
'
    >
      <div className='max-w-6xl mx-auto'>
        <ScrollReveal>
          <h2 className='text-3xl font-bold text-center mb-16 text-slate-800 dark:text-white'>
            Nuestros Servicios
          </h2>
        </ScrollReveal>

        {/* MOBILE */}
        <div className='flex flex-col gap-4 md:hidden'>
          {services.map((service, index) => {
            const isActive = active === index
            const Icon = service.icon

            return (
              <ScrollReveal key={index}>
                <div
                  onClick={() => setActive(isActive ? null : index)}
                  className='bg-[#1f2f46] text-white rounded-xl shadow p-6 cursor-pointer transition hover:shadow-lg hover:-translate-y-1'
                >
                  <div className='flex justify-center mb-4'>
                    <div className='p-3 rounded-full bg-white/10'>
                      <Icon className='text-blue-300 w-6 h-6' />
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <h3 className='text-lg font-semibold text-slate-800 dark:text-white'>
                      {service.title}
                    </h3>

                    <span className='text-blue-500 text-xl'>
                      {isActive ? '−' : '+'}
                    </span>
                  </div>

                  {isActive && (
                    <p className='mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed'>
                      {service.content}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* DESKTOP */}
        <div className='hidden md:flex gap-4'>
          {services.map((service, index) => {
            const isActive = active === index
            const Icon = service.icon

            return (
              <ScrollReveal key={index}>
                <div
                  onClick={() => setActive(isActive ? null : index)}
                  className={`
                  cursor-pointer
                  transition-all duration-500 ease-in-out
                  rounded-xl shadow hover:shadow-xl
                  overflow-hidden
                  ${isActive ? 'flex-[3]' : 'flex-[1]'}
                  bg-[#1f2f46] text-white
                  hover:-translate-y-1
                `}
                >
                  <div className='p-6 h-full flex flex-col items-center justify-center text-center gap-4'>
                    {/* ICONO */}
                    <div className='p-4 rounded-full bg-white/10'>
                      <Icon className='text-blue-300 w-6 h-6' />
                    </div>

                    {/* TITULO */}
                    <h3 className='text-lg font-semibold text-white leading-snug'>
                      {service.title}
                    </h3>

                    {isActive && (
                      <p className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed'>
                        {service.content}
                      </p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
