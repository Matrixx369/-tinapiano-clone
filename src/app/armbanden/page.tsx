import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'

export default function ArmbandenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-[#8fc0e5] mb-6">Armbanden</h1>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Verfraai uw pols met onze elegante armbanden. Van delicate schakelkettingen tot statement pieces
              met edelstenen - elk stuk is met liefde handgemaakt.
            </p>
          </div>

          {/* Bracelets Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square relative">
                <Image
                  src="https://ext.same-assets.com/3019426010/2462445221.webp"
                  alt="Armband met 3 rijen parels"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Parelarmband</h3>
                <p className="text-gray-600">Elegante armband met drie rijen parels</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square relative bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500">Armband Collectie</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Gouden Schakelarmband</h3>
                <p className="text-gray-600">Klassieke gouden armband met verfijnde schakels</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square relative bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500">Armband Collectie</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Zilveren Bangles</h3>
                <p className="text-gray-600">Set van zilveren bangles met unieke textuur</p>
              </div>
            </div>
          </div>

          {/* Custom Bracelets Section */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-light text-[#8fc0e5] mb-6">Armbanden op maat</h2>
            <p className="text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
              Creëer de perfecte armband die uw stijl weerspiegelt. Wij helpen u bij het ontwerpen
              van een uniek stuk dat past bij uw persoonlijkheid.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#8fc0e5] text-white px-8 py-3 rounded-md font-medium hover:bg-[#7ab0d8] transition-colors uppercase"
            >
              Plan een ontwerpsessie
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
                <li><Link href="/contact" className="text-gray-300 hover:text-[#8fc0e5]">Contact</Link></li>
                <li><Link href="/privacybeleid" className="text-gray-300 hover:text-[#8fc0e5]">Privacybeleid</Link></li>
                <li><Link href="/algemene-voorwaarden" className="text-gray-300 hover:text-[#8fc0e5]">Algemene Voorwaarden</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#8fc0e5] mb-4">Juwelen</h3>
              <ul className="space-y-2">
                <li><Link href="/ringen" className="text-gray-300 hover:text-[#8fc0e5]">Ringen</Link></li>
                <li><Link href="/oorringen" className="text-gray-300 hover:text-[#8fc0e5]">Oorringen</Link></li>
                <li><Link href="/mannen" className="text-gray-300 hover:text-[#8fc0e5]">Mannen</Link></li>
                <li><Link href="/halskettingen" className="text-gray-300 hover:text-[#8fc0e5]">Halskettingen</Link></li>
                <li><Link href="/armbanden" className="text-[#8fc0e5] font-medium">Armbanden</Link></li>
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
            <Link href="/cookies" className="text-gray-400 hover:text-[#8fc0e5]">Cookies</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}