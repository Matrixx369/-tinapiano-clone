import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import FadeInSection from '../../components/FadeInSection'
import ScrollToTop from '../../components/ScrollToTop'

export default function OorringenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />

      {/* Hero Image */}
      <section className="relative h-[600px] lg:h-[750px] overflow-hidden">
        <img
          src="https://res.cloudinary.com/dfdlwn49l/image/upload/handgemaakte-juwelen-belgie/handgemaakte-oorringen-limburg/oorringen-01.png"
          alt="Oorringen collectie"
          className="w-full h-full object-cover animate-ken-burns"
          style={{ objectPosition: 'center 35%' }}
        />
      </section>

      {/* Title Section with Dark Background */}
      <FadeInSection>
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 lg:py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-light text-[#8fc0e5] mb-8 font-[family-name:var(--font-playfair)] tracking-tight">Oorringen</h1>
            <p className="text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed max-w-4xl mx-auto mb-10 font-light font-[family-name:var(--font-playfair)] tracking-tight" style={{ lineHeight: '1.6' }}>
              Bent u op zoek naar handgemaakte oorringen die stijl en verfijning uitstralen? Onze collectie biedt unieke en trendy ontwerpen. Klaar om uw gepersonaliseerde oorringen te laten maken?
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#8fc0e5] text-white px-8 py-4 rounded-md font-medium hover:bg-[#7ab0d8] hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase text-xl"
            >
              Contacteer ons
            </Link>
          </div>
        </section>
      </FadeInSection>

      {/* Earring Gallery - EXACT RINGEN STRUCTURE */}
      <FadeInSection delay={100}>
        <main className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-16">
              {/* Earring 1 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <img
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/handgemaakte-juwelen-belgie/handgemaakte-oorringen-limburg/oorringen-01.png"
                      alt="Handgemaakte oorbellen 1"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Handgemaakte oorbellen</p>
                  </div>
                </div>
              </div>

              {/* Earring 2 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <img
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/handgemaakte-juwelen-belgie/handgemaakte-oorringen-limburg/oorringen-02.jpeg"
                      alt="Handgemaakte oorbellen 2"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Handgemaakte oorbellen</p>
                  </div>
                </div>
              </div>

              {/* Earring 3 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <img
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/handgemaakte-juwelen-belgie/handgemaakte-oorringen-limburg/oorringen-03.jpeg"
                      alt="Handgemaakte oorbellen 3"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Handgemaakte oorbellen</p>
                  </div>
                </div>
              </div>

              {/* Earring 4 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <img
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/handgemaakte-juwelen-belgie/handgemaakte-oorringen-limburg/oorringen-04.jpeg"
                      alt="Handgemaakte oorbellen 4"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Handgemaakte oorbellen</p>
                  </div>
                </div>
              </div>

              {/* Earring 5 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <img
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/handgemaakte-juwelen-belgie/handgemaakte-oorringen-limburg/oorringen-05.jpeg"
                      alt="Handgemaakte oorbellen 5"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Handgemaakte oorbellen</p>
                  </div>
                </div>
              </div>

              {/* Earring 6 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <img
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/handgemaakte-juwelen-belgie/handgemaakte-oorringen-limburg/oorringen-06.jpeg"
                      alt="Handgemaakte oorbellen 6"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Handgemaakte oorbellen</p>
                  </div>
                </div>
              </div>

              {/* Earring 7 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <img
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/handgemaakte-juwelen-belgie/handgemaakte-oorringen-limburg/oorringen-07.jpeg"
                      alt="Handgemaakte oorbellen 7"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Handgemaakte oorbellen</p>
                  </div>
                </div>
              </div>

              {/* Earring 8 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <img
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/handgemaakte-juwelen-belgie/handgemaakte-oorringen-limburg/oorringen-08.jpeg"
                      alt="Handgemaakte oorbellen 8"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Handgemaakte oorbellen</p>
                  </div>
                </div>
              </div>

              {/* Earring 9 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <img
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/handgemaakte-juwelen-belgie/handgemaakte-oorringen-limburg/oorringen-09.jpeg"
                      alt="Handgemaakte oorbellen 9"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Handgemaakte oorbellen</p>
                  </div>
                </div>
              </div>

              {/* Earring 10 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <img
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/handgemaakte-juwelen-belgie/handgemaakte-oorringen-limburg/oorringen-10.jpeg"
                      alt="Handgemaakte oorbellen 10"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Handgemaakte oorbellen</p>
                  </div>
                </div>
              </div>

              {/* Earring 11 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <img
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/handgemaakte-juwelen-belgie/handgemaakte-oorringen-limburg/oorringen-11.jpeg"
                      alt="Handgemaakte oorbellen 11"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Handgemaakte oorbellen</p>
                  </div>
                </div>
              </div>

              {/* Earring 12 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <img
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/handgemaakte-juwelen-belgie/handgemaakte-oorringen-limburg/oorringen-12.jpeg"
                      alt="Handgemaakte oorbellen 12"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Handgemaakte oorbellen</p>
                  </div>
                </div>
              </div>

              {/* Earring 13 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <img
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/handgemaakte-juwelen-belgie/handgemaakte-oorringen-limburg/oorringen-13.jpeg"
                      alt="Handgemaakte oorbellen 13"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Handgemaakte oorbellen</p>
                  </div>
                </div>
              </div>

              {/* Earring 14 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <img
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/handgemaakte-juwelen-belgie/handgemaakte-oorringen-limburg/oorringen-14.jpeg"
                      alt="Handgemaakte oorbellen 14"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Handgemaakte oorbellen</p>
                  </div>
                </div>
              </div>

              {/* Earring 15 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <img
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/handgemaakte-juwelen-belgie/handgemaakte-oorringen-limburg/oorringen-15.jpeg"
                      alt="Handgemaakte oorbellen 15"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Handgemaakte oorbellen</p>
                  </div>
                </div>
              </div>

              {/* Earring 16 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <img
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/handgemaakte-juwelen-belgie/handgemaakte-oorringen-limburg/oorringen-16.jpeg"
                      alt="Handgemaakte oorbellen 16"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Handgemaakte oorbellen</p>
                  </div>
                </div>
              </div>

              {/* Earring 17 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <img
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/handgemaakte-juwelen-belgie/handgemaakte-oorringen-limburg/oorringen-17.jpeg"
                      alt="Handgemaakte oorbellen 17"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Handgemaakte oorbellen</p>
                  </div>
                </div>
              </div>

              {/* Earring 18 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <img
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/handgemaakte-juwelen-belgie/handgemaakte-oorringen-limburg/oorringen-18.jpeg"
                      alt="Handgemaakte oorbellen 18"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Handgemaakte oorbellen</p>
                  </div>
                </div>
              </div>

              {/* Earring 19 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <img
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/handgemaakte-juwelen-belgie/handgemaakte-oorringen-limburg/oorringen-19.png"
                      alt="Handgemaakte oorbellen 19"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Handgemaakte oorbellen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </FadeInSection>

      {/* Custom Earring Section */}
      <FadeInSection delay={200}>
        <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-20 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-light text-[#8fc0e5] mb-8 font-[family-name:var(--font-playfair)] tracking-tight">Op zoek naar unieke oorringen?</h2>
              <p className="text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed mb-10 font-light font-[family-name:var(--font-playfair)] tracking-tight" style={{ lineHeight: '1.6' }}>
                Laat ons uw droomoorbellen ontwerpen en maken. Elk stuk wordt speciaal voor u gemaakt, afgestemd op uw persoonlijke smaak en wensen.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#8fc0e5] text-white px-8 py-4 rounded-md font-medium hover:bg-[#7ab0d8] hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase text-xl"
              >
                Contacteer ons voor een ontwerp
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Footer */}
      <footer className="bg-white text-gray-800 py-12 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Link href="/">
                <Image
                  src="https://ext.same-assets.com/3019426010/2711449369.webp"
                  alt="10a Juweelontwerp"
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
                <li><Link href="/ringen" className="text-[#8fc0e5] hover:underline font-medium">Ringen</Link></li>
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