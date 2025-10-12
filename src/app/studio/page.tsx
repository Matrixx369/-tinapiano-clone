import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-[#8fc0e5] mb-6">Creatieve Studio</h1>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Stap binnen in de wereld waar ideeën vorm krijgen. In onze studio transformeren we uw dromen
              in tastbare kunstwerken van edelmetaal en edelstenen.
            </p>
          </div>

          {/* Design Process Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="https://ext.same-assets.com/3019426010/4016404978.webp"
                alt="Ontwerp proces in de studio"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-light text-[#8fc0e5] mb-6">Van Idee tot Creatie</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Elk uniek juweel begint met een gesprek. In onze studio luisteren we naar uw verhaal,
                uw wensen en dromen. We schetsen, we experimenteren en we creëren samen het perfecte ontwerp.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Van de eerste schets tot het finale product - elk stap wordt zorgvuldig uitgevoerd
                met oog voor detail en kwaliteit.
              </p>
              <Link
                href="/#contact"
                className="inline-block bg-[#8fc0e5] text-white px-8 py-3 rounded-md font-medium hover:bg-[#7ab0d8] transition-colors"
              >
                Plan een designsessie
              </Link>
            </div>
          </div>

          {/* Design Process Steps */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-light text-[#8fc0e5] text-center mb-12">Ons Creatieproces</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#8fc0e5] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">💭</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Conceptualisatie</h3>
                <p className="text-gray-600">
                  Samen bespreken we uw ideeën, inspiratie en wensen voor het perfect ontwerp.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#8fc0e5] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">✏️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Schetsen</h3>
                <p className="text-gray-600">
                  Uw ideeën worden omgezet in gedetailleerde schetsen en technische tekeningen.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#8fc0e5] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🔨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Vervaardiging</h3>
                <p className="text-gray-600">
                  Met traditionele technieken en moderne tools wordt uw ontwerp tot leven gebracht.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#8fc0e5] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Afwerking</h3>
                <p className="text-gray-600">
                  Elke detail wordt gepolijst tot perfectie voor een onberispelijk eindresultaat.
                </p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-[#8fc0e5] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">💍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Op Maat Ontwerp</h3>
              <p className="text-gray-600 leading-relaxed">
                Unieke sieraden die perfect aansluiten bij uw persoonlijkheid en levensstijl.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-[#8fc0e5] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">♻️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Herontwerp Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Geef nieuwe betekenis aan oude sieraden door ze te transformeren naar hedendaagse stukken.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-[#8fc0e5] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Persoonlijke Begeleiding</h3>
              <p className="text-gray-600 leading-relaxed">
                Van eerste idee tot eindresultaat - wij begeleiden u tijdens het hele creatieproces.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gray-900 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Klaar om uw droomjuweel te creëren?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Laat ons samen werken aan een uniek stuk dat uw verhaal vertelt.
              Contacteer ons voor een vrijblijvend designgesprek.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-[#8fc0e5] text-white px-8 py-3 rounded-md font-medium hover:bg-[#7ab0d8] transition-colors"
            >
              Begin uw creatiereis
            </Link>
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
