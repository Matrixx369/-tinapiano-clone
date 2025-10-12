import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-[#8fc0e5] mb-6">Contact</h1>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Heeft u vragen of wilt u een afspraak maken? Neem gerust contact met ons op.
              We helpen u graag verder met uw juwelenwensen.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-light text-[#8fc0e5] mb-6">Contactgegevens</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#8fc0e5] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">📧</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">E-mail</h3>
                        <a href="mailto:info@tinapiano.be" className="text-[#8fc0e5] hover:underline">
                          info@tinapiano.be
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#8fc0e5] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">📞</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Telefoon</h3>
                        <a href="tel:+32488893408" className="text-[#8fc0e5] hover:underline">
                          +32 488 89 34 08
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#8fc0e5] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">📍</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Adres</h3>
                        <p className="text-gray-700">
                          Jehennestraat 21<br />
                          3770 Riemst<br />
                          België
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-[#8fc0e5] mb-4">Openingsuren</h2>
                  <p className="text-gray-700">
                    Op afspraak<br />
                    Contacteer ons voor een persoonlijke afspraak in ons atelier.
                  </p>
                </div>
              </div>

              {/* Contact Form or Additional Info */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-light text-[#8fc0e5] mb-6">Plan een afspraak</h2>
                <p className="text-gray-700 mb-6">
                  Wilt u graag langskomen in ons atelier? Neem contact met ons op via e-mail of telefoon
                  om een afspraak te maken. We nemen de tijd om uw wensen te bespreken en u te adviseren.
                </p>
                <Link
                  href="mailto:info@tinapiano.be"
                  className="inline-block bg-[#8fc0e5] text-white px-8 py-3 rounded-md font-medium hover:bg-[#7ab0d8] transition-colors uppercase"
                >
                  Stuur een e-mail
                </Link>
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
                <li><Link href="/contact" className="text-[#8fc0e5] font-medium">Contact</Link></li>
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
            <Link href="/cookies" className="text-gray-400 hover:text-[#8fc0e5]">Cookies</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}