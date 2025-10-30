import { Wrench, Menu, X } from 'lucide-react'
import Image from 'next/image'

interface HeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
  scrollToSection: (id: string) => void
}

const navLinks = [
  { id: 'features', label: 'Recursos' },
  { id: 'benefits', label: 'Benefícios' },
  { id: 'download', label: 'Download' },
]

export default function Header({ isMenuOpen, setIsMenuOpen, scrollToSection }: HeaderProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-primary/20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src="/icons/Logo.png" alt="MotoWave logo" className="h-5 w-5" />
            <span className="text-xl font-bold">
              <span className="text-white">Moto</span>
              <span className="text-primary">Wave</span>
            </span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-primary transition font-semibold"
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => scrollToSection('download')}
              className="bg-primary px-6 py-2 rounded-full hover:shadow-lg hover:shadow-primary/30 transition font-semibold text-background"
            >
              Baixar App
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            } bg-background/95 backdrop-blur-sm border-t border-primary/30`}
        >
          <div className="px-2 pt-3 pb-6 space-y-3">

            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full px-3 py-2 text-left font-semibold hover:text-primary transition"
              >
                {link.label}
              </button>
            ))}



            <button
              onClick={() => scrollToSection('download')}
              className="block w-full px-3 py-2 bg-primary rounded-lg text-background font-semibold"
            >
              Baixar App
            </button>
          </div>
          <div className="flex flex-col gap-3">
              <div className="relative w-fit">
                <Image
                  src="/badges/app-store.svg"
                  alt="App Store"
                  width={150}
                  height={45}
                  className="select-none"
                />
                <span className="soon-label"><span className="soon-bg">Soon</span></span>
              </div>
              <div className="relative w-fit">
                <Image
                  src="/badges/google-play.svg"
                  alt="Google Play"
                  width={150}
                  height={45}
                  className="select-none"
                />
                <span className="soon-label"><span className="soon-bg">Soon</span></span>
              </div>
            </div>
        </div>
      </div>
    </nav>
  )
}
