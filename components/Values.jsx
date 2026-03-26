'use client'

export default function Values() {
  const values = [
    {
      title: 'Rigor científico',
      text: 'Cada proceso, cada análisis y cada recomendación que realizamos está respaldada por la mejor evidencia científica disponible y por la normativa vigente. En medicina preventiva, la precisión no es opcional: es nuestra responsabilidad.'
    },
    {
      title: 'Compromiso con la prevención',
      text: 'Creemos firmemente que anticiparse es proteger. Nuestra razón de ser es identificar riesgos antes de que se conviertan en problemas, contribuyendo activamente a la seguridad del paciente y de los profesionales sanitarios.'
    },
    {
      title: 'Independencia y transparencia',
      text: 'Actuamos con plena objetividad, ofreciendo a nuestros clientes una visión honesta e independiente de su situación. Nuestras evaluaciones y recomendaciones están siempre orientadas al bien del centro y de las personas que lo habitan.'
    },
    {
      title: 'Excelencia y mejora continua',
      text: 'Los estándares más exigentes, como los requeridos por la acreditación JCI, son para nosotros un punto de partida, no un límite. Nos exigimos la máxima calidad en cada servicio y evolucionamos constantemente para ofrecer soluciones cada vez más eficaces.'
    },
    {
      title: 'Vocación de servicio',
      text: 'Como Francisco Xavier Balmis, entendemos nuestro labor como una misión. Trabajamos con dedicación, cercanía y responsabilidad, conscientes del impacto real que nuestra actividad tiene en la salud de las personas.'
    },
    {
      title: 'Trabajo en equipo y colaboración',
      text: 'Sabemos que la seguridad sanitaria es una tarea compartida. Trabajamos de la mano de los equipos de cada centro, construyendo relaciones de confianza a largo plazo y actuando siempre como un aliado, no solo como un proveedor.'
    }
  ]

  return (
    <section
      id='valores'
      className='py-24 px-6 bg-gradient-to-b
      from-[var(--color-primary-light)]
      via-[var(--color-primary-mid)]
      to-[var(--color-primary-dark)]'
    >
      <div className='max-w-5xl mx-auto text-center'>
        <h2 className='text-3xl font-bold mb-16 text-white'>
          Nuestros Valores
        </h2>

        <div className='grid md:grid-cols-3 gap-10'>
          {values.map((v, i) => (
            <div key={i} className='bg-[#1f2f46] p-6 rounded-xl shadow'>
              <h3 className='text-blue-300 font-semibold mb-3'>{v.title}</h3>
              <p className='text-slate-300 text-sm'>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
