import { useEffect, useState } from 'react'
import { Menu, X, } from 'lucide-react'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialDark = root.classList.contains('dark') || prefersDark
    if (initialDark) root.classList.add('dark')
    const onScroll = () => {
      setCompact(window.scrollY > 12)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  const navLinks = [
    { href: '/about', label: 'About\u00A0Us' },
    { href: '/commercial', label: 'Commercial' },
    { href: '/residential', label: 'Residential' },
    { href: '/coming-soon', label: 'Coming\u00A0Soon' },
    { href: '/gallery', label: 'Gallery' },
  ]

  // Mobile (base) is static: sticky-style top with no scroll animation
  const mobileSize = 'h-14 max-w-full rounded-none px-3'
  // Desktop (md+) animates on scroll between two states
  const desktopSize = compact
    ? 'md:h-12 md:max-w-5xl md:rounded-3xl md:px-7'
    : 'md:h-16 md:max-w-7xl md:rounded-2xl md:px-6'

  return (
    <header className={`fixed top-0 left-0 z-50 w-full sm:px-3 md:left-1/2 md:-translate-x-1/2 md:top-7 md:px-4`}>
      <nav
        className={`mx-auto py-7 flex items-center justify-between border border-neutral-200/70 bg-white/80 shadow-sm backdrop-blur transition-all duration-300 dark:border-neutral-800 dark:bg-neutral-900/70 ${mobileSize} ${desktopSize}`}
      >
        {/* Brand */}
        <a href="/" className="flex items-center gap-2 font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          <img src={logo} alt="brandLogo" className='w-43' />
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm lg:text-lg font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white dark:focus-visible:ring-neutral-700"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          
          <a
            href="/contact"
            className="hidden rounded-md md:rounded-3xl text-sm lg:text-lg px-3 py-2 bg-black text-gray-100 hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 md:inline-block dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus-visible:ring-neutral-700"
          >
            Contact&nbsp;Us
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-neutral-700 shadow-sm transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 md:hidden dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus-visible:ring-neutral-700"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden">
          <div className={`mx-auto mt-2 w-[calc(100%-1rem)] max-w-7xl space-y-1 rounded-xl border border-neutral-200 bg-white/95 p-3 shadow-sm backdrop-blur transition-all duration-300 dark:border-neutral-800 dark:bg-neutral-900/90`}>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-2 text-sm lg:text-lg font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white dark:focus-visible:ring-neutral-700"
              >
                {l.label}
              </a>
            ))}            

            <div className="mt-2 flex items-center gap-2">
              <a
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex-1 rounded-md bg-neutral-900 px-3 py-2 text-center text-sm font-medium text-white shadow-sm transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus-visible:ring-neutral-700"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar