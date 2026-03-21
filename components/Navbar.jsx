'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? 'bg-[var(--color-primary-deep)]/90 backdrop-blur-md shadow-md border-b border-white/10'
            : 'bg-[var(--color-primary-deep)]/80 backdrop-blur-sm border-b border-transparent'
        }
      `}
      >
        <div className='max-w-6xl mx-auto flex justify-between items-center px-6 py-4'>
          {/* Logo */}
          <a href='#sobre' className='flex items-center gap-3 cursor-pointer'>
            <Image
              src='/BalmisMedicaLogo.png'
              width={32}
              height={32}
              alt='Balmis Médica'
            />

            {/* Solo visible en desktop */}
            <span className='font-semibold text-lg text-slate-800 dark:text-white'>
              Balmis Médica
            </span>
          </a>

          {/* Desktop menu */}
          <ul className='hidden md:flex gap-10 text-sm font-semibold items-center'>
            <li>
              <a
                href='#sobre'
                className={`
  transition font-semibold
  ${
    scrolled
      ? 'text-slate-800 dark:text-white hover:text-blue-500'
      : 'text-white hover:text-blue-300'
  }
`}
              >
                Sobre nosotros
              </a>
            </li>
            <li>
              <a
                href='#servicios'
                className={`
  transition font-semibold
  ${
    scrolled
      ? 'text-slate-800 dark:text-white hover:text-blue-500'
      : 'text-white hover:text-blue-300'
  }
`}
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href='#equipo'
                className={`
  transition font-semibold
  ${
    scrolled
      ? 'text-slate-800 dark:text-white hover:text-blue-500'
      : 'text-white hover:text-blue-300'
  }
`}
              >
                Equipo
              </a>
            </li>

            <li>
              <a
                href='#contacto'
                className='px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition'
              >
                Contacto
              </a>
            </li>
          </ul>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(true)}
            className='md:hidden text-2xl text-slate-800 dark:text-white'
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className='fixed inset-0 z-50 bg-black/40 backdrop-blur-sm'
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className='
      absolute top-0 right-0 h-full w-3/4
      bg-gradient-to-b from-[#0a1f2e] via-[#163e57] to-[#1f4f6b]
      p-8 flex flex-col gap-8 shadow-lg
      transform transition-transform duration-300 ease-in-out
      translate-x-0 animate-slideIn
    '
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className='text-white text-2xl self-end'
            >
              ✕
            </button>

            {/* Links */}
            <a
              onClick={() => setOpen(false)}
              href='#sobre'
              className='text-white text-lg font-semibold hover:text-blue-300 transition'
            >
              Sobre nosotros
            </a>

            <a
              onClick={() => setOpen(false)}
              href='#servicios'
              className='text-white text-lg font-semibold hover:text-blue-300 transition'
            >
              Servicios
            </a>

            <a
              onClick={() => setOpen(false)}
              href='#equipo'
              className='text-white text-lg font-semibold hover:text-blue-300 transition'
            >
              Equipo
            </a>

            <a
              onClick={() => setOpen(false)}
              href='#contacto'
              className='mt-6 px-4 py-3 rounded-lg bg-blue-600 text-white text-center hover:bg-blue-700 transition'
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </>
  )
}
