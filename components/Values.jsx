'use client'

export default function Values() {
  const values = [
    {
      title: 'Prevención',
      text: 'Creemos en anticiparnos a los riesgos antes de que ocurran.'
    },
    {
      title: 'Rigor',
      text: 'Trabajamos basados en evidencia científica y experiencia real.'
    },
    {
      title: 'Compromiso',
      text: 'Nos implicamos en cada proyecto como si fuera propio.'
    }
  ]

  return (
    <section
      id='valores'
      className='py-24 px-6 bg-gradient-to-b
      from-[var(--color-primary-light)]
      via-[var(--color-primary-soft)]
      to-[var(--color-primary-mid)]'
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
