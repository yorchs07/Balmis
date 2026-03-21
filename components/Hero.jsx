export default function Hero() {
  return (
    <section
      id='sobre'
      className='relative py-28 px-6 overflow-hidden 
    bg-gradient-to-b 
from-[var(--color-primary-dark)]
via-[var(--color-primary-mid)]
to-[var(--color-primary-light)]'
    >
      {/* Glow suave */}
      <div
        className='absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] 
      bg-blue-400/20 blur-3xl rounded-full -z-10'
      ></div>

      <div className='max-w-4xl mx-auto text-center'>
        {/* Bloque 1 */}
        <div className='mb-20'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
            Quiénes somos
          </h2>

          <p className='mx-auto text-lg text-slate-200 leading-relaxed'>
            En Balmis Médica creemos que prevenir es cuidar de verdad. Somos un
            equipo de profesionales especializados en medicina preventiva,
            epidemiología hospitalaria y salud ambiental. Contamos con
            experiencia en hospitales y organizaciones sanitarias de primer
            nivel, lo que nos permite entender de cerca los retos reales del
            sector. Nuestra misión es ayudarte a crear entornos más seguros y
            saludables: para pacientes, profesionales y organizaciones. Lo
            conseguimos a través de programas estructurados, asesoramiento
            continuo y un enfoque práctico que conecta el día a día clínico con
            los estándares de calidad más exigentes.
          </p>
        </div>

        {/* Separador */}
        <div className='w-24 h-[2px] bg-blue-400/50 mx-auto mb-20'></div>

        {/* Bloque 2 */}
        <div className='mb-20'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
            ¿Por qué Balmis?
          </h2>

          <p className='mx-auto text-lg text-slate-200 leading-relaxed mb-6'>
            Nuestro nombre está inspirado en Francisco Javier Balmis, el médico
            español que lideró en 1803 la primera gran misión internacional de
            salud pública, llevando la vacuna contra la viruela a distintos
            continentes.
          </p>

          <p className='mx-auto text-lg text-slate-200 leading-relaxed'>
            Su historia nos recuerda algo esencial: la prevención no solo salva
            vidas, también construye el futuro de la salud.
          </p>
        </div>

        {/* Separador */}
        <div className='w-24 h-[2px] bg-blue-400/50 mx-auto mb-20'></div>

        {/* Bloque 3 */}
        <div>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
            Nuestra manera de trabajar
          </h2>

          <p className='mx-auto text-lg text-slate-200 leading-relaxed mb-6'>
            Cada centro es único, y así es como lo tratamos. No creemos en
            soluciones estándar, antes de plantear cualquier acción, nos tomamos
            el tiempo de entender a fondo cada centro: cómo funciona, qué
            servicios ofrece, cuáles son sus necesidades reales y hacia dónde
            quiere avanzar.
          </p>

          <p className='mx-auto text-lg text-slate-200 leading-relaxed'>
            A partir de ese análisis, diseñamos un plan a medida, con objetivos
            claros, tiempos definidos y un seguimiento continuo que garantiza
            resultados.
          </p>
        </div>
      </div>
    </section>
  )
}
