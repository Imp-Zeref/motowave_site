import { ClipboardList } from 'lucide-react'

export default function DownloadCTA() {
  return (
    <section id="download" className="py-20 relative">
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">

        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-primary">
          Seja o primeiro a testar
        </h2>

        <p className="text-xl text-icon/70 mb-8 max-w-2xl mx-auto">
          Estamos na fase final de preparação e queremos sua ajuda!
          Inscreva-se para ser um testador Beta e tenha acesso antecipado exclusivo ao app.
        </p>

        <div className="flex justify-center items-center mb-8">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-primary px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary/25 transition-transform duration-200 hover:scale-105 w-full sm:w-auto"
          >
            <ClipboardList className="w-6 h-6 text-white" />
            Quero ser um testador
          </a>
        </div>

        <div className="text-sm text-icon/50">
          Vagas limitadas • Em breve para iOS e Android
        </div>
        <div className="flex flex-row space-x-10 justify-center mt-4">

          <div className="relative w-fit">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="select-none h-10 object-contain"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-xs font-bold rounded">
              Em breve
            </span>
          </div>

          <div className="relative w-fit">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="select-none h-10 object-contain"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-xs font-bold rounded">
              Em breve
            </span>
          </div>

        </div>

      </div>
    </section >
  )
}