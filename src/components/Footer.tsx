import Link from 'next/link'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8">
          <div>
            <div className="flex items-center space-x-2">
              <img
                src="/icons/Logo.png"
                alt="MotoWave logo"
                className="h-5 w-5"
              />
              <span className="text-xl font-bold">
                <span className="text-white">Moto</span>
                <span className="text-primary">Wave</span>
              </span>
            </div>
            <a
              href="mailto:motowave.comercial@gmail.com"
              className="text-sm text-gray-300 hover:text-primary transition cursor-pointer"
            >
              motowave.comercial@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://www.instagram.com/_motowave/?hl=pt-br"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-icon/70 hover:text-primary transition-colors"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-2 border-t border-icon/10 pt-2">
          <div className="text-icon/50 text-center sm:text-left text-sm">
            <p>&copy; 2025 MotoWave. Todos os direitos reservados.</p>
            <p>Mantenha sua paixão sempre em movimento.</p>
          </div>

          <div className="flex items-center gap-6 text-sm text-icon/70">
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Termos de Uso
            </Link>
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}