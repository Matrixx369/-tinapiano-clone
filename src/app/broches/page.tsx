import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import FadeInSection from '../../components/FadeInSection'
import ScrollToTop from '../../components/ScrollToTop'

export default function BrochesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />

      {/* Hero Image */}
      <section className="relative h-[40vh] sm:h-[70vh] md:h-[80vh] lg:h-[750px] overflow-hidden bg-gray-900">
        <Image
          src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927760/broches-02_utjhkn.jpg"
          alt="Broches collectie"
          fill
          className="object-contain md:object-cover"
          style={{ objectPosition: '50% 46%' }}
          priority
        />
      </section>

      {/* Title Section with Dark Background */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 lg:py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-light text-[#8fc0e5] mb-8 font-[family-name:var(--font-playfair)] tracking-tight">Broches</h1>
            <p className="text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed max-w-4xl mx-auto mb-10 font-light font-[family-name:var(--font-playfair)] tracking-tight" style={{ lineHeight: '1.6' }}>
              Bent u op zoek naar broches die stijl en verfijning uitstralen? Onze collectie biedt unieke en trendy ontwerpen. Klaar om uw gepersonaliseerde broche te laten maken?
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#8fc0e5] text-white px-8 py-4 rounded-md font-medium hover:bg-[#7ab0d8] hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase text-xl"
            >
              Contacteer ons
            </Link>
          </div>
      </section>

      {/* Broches Gallery */}
      <FadeInSection delay={100}>
        <main className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-16">
              {/* Broche 1 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927760/broches-03_gcb4bd.jpg"
                      alt="Geëmailleerde broche Sterlingsilver 925"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Geëmailleerde broche Sterlingsilver 925</p>
                  </div>
                </div>
              </div>

              {/* Broche 2 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927760/broches-04_thzzcj.jpg"
                      alt="Geëmailleerde broche Sterlingsilver 925"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Geëmailleerde broche Sterlingsilver 925</p>
                  </div>
                </div>
              </div>

              {/* Broche 3 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927760/broches-05_tgbiz5.jpg"
                      alt="Geëmailleerde broche Sterlingsilver 925"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Geëmailleerde broche Sterlingsilver 925</p>
                  </div>
                </div>
              </div>

              {/* Broche 4 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927761/broches-06_zn2gne.jpg"
                      alt="Geëmailleerde broche Sterlingsilver 925"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Geëmailleerde broche Sterlingsilver 925</p>
                  </div>
                </div>
              </div>

              {/* Broche 5 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927761/broches-07_wmnccm.png"
                      alt="Geëmailleerde broche Sterlingsilver 925"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Geëmailleerde broche Sterlingsilver 925</p>
                  </div>
                </div>
              </div>

              {/* Broche 6 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927761/broches-08_hpumcc.jpg"
                      alt="Geëmailleerde broche Sterlingsilver 925"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Geëmailleerde broche Sterlingsilver 925</p>
                  </div>
                </div>
              </div>

              {/* Broche 7 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927762/broches-09_ihj9nl.jpg"
                      alt="Geëmailleerde broche Sterlingsilver 925"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Geëmailleerde broche Sterlingsilver 925</p>
                  </div>
                </div>
              </div>

              {/* Broche 8 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927765/broches-10_dir6c3.jpg"
                      alt="Geëmailleerde broche Sterlingsilver 925"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Geëmailleerde broche Sterlingsilver 925</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </FadeInSection>

      {/* Custom Broche Section */}
      <FadeInSection delay={200}>
        <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-20 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-light text-[#8fc0e5] mb-8 font-[family-name:var(--font-playfair)] tracking-tight">Op zoek naar een unieke broche?</h2>
              <p className="text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed mb-10 font-light font-[family-name:var(--font-playfair)] tracking-tight" style={{ lineHeight: '1.6' }}>
                Laat ons uw droombroche ontwerpen en maken. Elk stuk wordt speciaal voor u gemaakt, afgestemd op uw persoonlijke smaak en wensen.
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
                <li><Link href="/broches" className="text-[#8fc0e5] hover:underline font-medium">Broches</Link></li>
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