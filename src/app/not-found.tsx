import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import ScrollToTop from '../components/ScrollToTop'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />

      {/* 404 Content */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-9xl md:text-[150px] font-light text-[#8fc0e5] font-[family-name:var(--font-playfair)] tracking-tight">404</h1>
            </div>

            {/* Error Message */}
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 font-[family-name:var(--font-playfair)]">Pagina niet gevonden</h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              De pagina die u zoekt bestaat niet of is verplaatst. Gebruik de navigatie hieronder om terug te keren naar onze website.
            </p>

            {/* Home Button */}
            <div className="mb-16">
              <Link
                href="/"
                className="inline-block bg-[#8fc0e5] text-white px-10 py-4 rounded-md font-semibold hover:bg-[#7ab0d8] hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase tracking-wide"
              >
                Terug naar home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-800 py-12 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Link href="/">
                <Image
                  src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927798/ringen-19_cgksor.png"
                  alt="Tina Piano Juweelontwerp"
                  width={150}
                  height={30}
                  className="h-8 w-auto mb-4"
                />
              </Link>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Informatie</h3>
              <ul className="space-y-2">
                <li><Link href="/over-mij" className="text-[#8fc0e5] hover:underline">Over mij</Link></li>
                <li><Link href="/contact" className="text-[#8fc0e5] hover:underline">Contact</Link></li>
                <li><Link href="/privacybeleid" className="text-[#8fc0e5] hover:underline">Privacybeleid</Link></li>
                <li><Link href="/algemene-voorwaarden" className="text-[#8fc0e5] hover:underline">Algemene Voorwaarden</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Juwelen</h3>
              <ul className="space-y-2">
                <li><Link href="/ringen" className="text-[#8fc0e5] hover:underline">Ringen</Link></li>
                <li><Link href="/oorringen" className="text-[#8fc0e5] hover:underline">Oorringen</Link></li>
                <li><Link href="/mannen" className="text-[#8fc0e5] hover:underline">Mannen</Link></li>
                <li><Link href="/halskettingen" className="text-[#8fc0e5] hover:underline">Halskettingen</Link></li>
                <li><Link href="/armbanden" className="text-[#8fc0e5] hover:underline">Armbanden</Link></li>
                <li><Link href="/broches" className="text-[#8fc0e5] hover:underline">Broches</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact</h3>
              <div className="space-y-2 text-gray-700">
                <p>E-mailadres: <a href="mailto:info@tinapiano.be" className="text-[#8fc0e5] hover:underline">info@tinapiano.be</a></p>
                <p>Telefoonnummer: <a href="tel:+32488893408" className="text-[#8fc0e5] hover:underline">+32 488 89 34 08</a></p>
                <p>Adres: Jehennestraat 21, 3770 Riemst</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <Link href="/cookies" className="text-gray-600 hover:text-[#8fc0e5]">Cookies</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}