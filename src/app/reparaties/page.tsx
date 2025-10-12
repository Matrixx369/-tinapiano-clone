import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'

export default function ReparatiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-[#8fc0e5] mb-6">Reparatie</h1>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Vertrouw ons uw dierbare juwelen of gebroken parelsnoer toe aan onze reparatieservice
              en herontdek de schoonheid die ze ooit hadden.
            </p>
          </div>

          {/* Repair Services Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="https://ext.same-assets.com/3019426010/36370026.webp"
                alt="Juwelen reparatie"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-light text-[#8fc0e5] mb-6">Vakkundige Reparaties</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Onze ervaren goudsmid brengt uw kostbare sieraden weer tot leven. Of het nu gaat om
                een gebroken ketting, een losse steen, of het rijgen van parels - wij zorgen ervoor
                dat uw juwelen weer stralen zoals voorheen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Neem vandaag nog contact met ons op om een afspraak te maken en uw juwelen weer te laten stralen.
              </p>
              <Link
                href="/#contact"
                className="inline-block bg-[#8fc0e5] text-white px-8 py-3 rounded-md font-medium hover:bg-[#7ab0d8] transition-colors"
              >
                Maak een afspraak
              </Link>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#8fc0e5] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kettingreparatie</h3>
              <p className="text-gray-600">
                Gebroken schakels, sluiting vervangen of ketting verkorten - wij maken het weer compleet.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#8fc0e5] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Steen Zetting</h3>
              <p className="text-gray-600">
                Losse stenen opnieuw zetten of vervangen van ontbrekende edelstenen in uw sieraden.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#8fc0e5] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Parels Rijgen</h3>
              <p className="text-gray-600">
                Gebroken parelsnoeren vakkundig opnieuw rijgen met hoogwaardige zijde of draad.
              </p>
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-light text-[#8fc0e5] text-center mb-12">Ons Reparatieproces</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#8fc0e5] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">1</div>
                <h3 className="font-semibold text-gray-900 mb-2">Inspectie</h3>
                <p className="text-gray-600 text-sm">Grondige beoordeling van de schade en reparatiemogelijkheden</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#8fc0e5] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">2</div>
                <h3 className="font-semibold text-gray-900 mb-2">Offerte</h3>
                <p className="text-gray-600 text-sm">Transparante prijsopgave en tijdsinschatting voor de reparatie</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#8fc0e5] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">3</div>
                <h3 className="font-semibold text-gray-900 mb-2">Reparatie</h3>
                <p className="text-gray-600 text-sm">Vakkundige restauratie door onze ervaren goudsmid</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#8fc0e5] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">4</div>
                <h3 className="font-semibold text-gray-900 mb-2">Aflevering</h3>
                <p className="text-gray-600 text-sm">Uw gerestaureerde sieraad wordt zorgvuldig afgewerkt</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Link href="/">
                <Image
                  src="https://ext.same-assets.com/3019426010/2711449369.webp"
                  alt="10a Juweelontwerp"
                  width={150}
                  height={30}
                  className="h-8 w-auto mb-4 brightness-0 invert"
                />
              </Link>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#8fc0e5] mb-4">Informatie</h3>
              <ul className="space-y-2">
                <li><Link href="/over-mij" className="text-gray-300 hover:text-[#8fc0e5]">Over mij</Link></li>
                <li><Link href="/#contact" className="text-gray-300 hover:text-[#8fc0e5]">Contact</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-[#8fc0e5]">Privacybeleid</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-[#8fc0e5]">Algemene Voorwaarden</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#8fc0e5] mb-4">Juwelen</h3>
              <ul className="space-y-2">
                <li><Link href="/ringen" className="text-gray-300 hover:text-[#8fc0e5]">Ringen</Link></li>
                <li><Link href="/oorringen" className="text-gray-300 hover:text-[#8fc0e5]">Oorringen</Link></li>
                <li><Link href="/mannen" className="text-gray-300 hover:text-[#8fc0e5]">Mannen</Link></li>
                <li><Link href="/halskettingen" className="text-gray-300 hover:text-[#8fc0e5]">Halskettingen</Link></li>
                <li><Link href="/armbanden" className="text-gray-300 hover:text-[#8fc0e5]">Armbanden</Link></li>
                <li><Link href="/broches" className="text-gray-300 hover:text-[#8fc0e5]">Broches</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#8fc0e5] mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p>E-mailadres: <a href="mailto:info@tinapiano.be" className="text-[#8fc0e5]">info@tinapiano.be</a></p>
                <p>Telefoonnummer: <a href="tel:+32488893408" className="text-[#8fc0e5]">+32 488 89 34 08</a></p>
                <p>Adres: Jehennestraat 21, 3770 Riemst</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <a href="#" className="text-gray-400 hover:text-[#8fc0e5]">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
