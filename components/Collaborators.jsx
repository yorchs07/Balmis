'use client'

export default function Collaborators() {
  const collaborators = [
    {
      name: 'Nombre Apellido',
      role: 'Investigación',
      img: '/persona1.jpg'
    },
    {
      name: 'Nombre Apellido',
      role: 'Consultoría',
      img: '/persona2.jpg'
    },
    {
      name: 'Nombre Apellido',
      role: 'Tecnología',
      img: '/persona3.jpg'
    }
  ]

  return (
    <section
      id='colaboradores'
      className='py-24 px-6 bg-gradient-to-b
      from-[var(--color-primary-mid)]
      via-[var(--color-primary-soft)]
      to-[var(--color-primary-light)]'
    >
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-16 text-white'>
          Colaboradores
        </h2>

        <div className='grid md:grid-cols-3 gap-10'>
          {collaborators.map((c, i) => (
            <div
              key={i}
              className='
                bg-[#1f2f46]
                rounded-xl
                p-6
                text-center
                shadow-lg
                hover:shadow-xl
                transition
                hover:-translate-y-2
              '
            >
              <image
                src={c.img}
                alt={c.name}
                className='w-24 h-24 mx-auto rounded-full object-cover mb-4'
              />

              <h3 className='text-white font-semibold'>{c.name}</h3>

              <p className='text-blue-300 text-sm mt-2'>{c.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
