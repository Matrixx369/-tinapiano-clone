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
      <section className="relative h-[40vh] sm:h-[70vh] md:h-[80vh] lg:h-[750px] overflow-hidden bg-gray-900">
        <Image
          src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927778/oorringen-02_fq0gdb.jpg"
          alt="Oorringen collectie"
          fill
          className="object-contain md:object-cover"
          style={{ objectPosition: 'center top' }}
          priority
        />
      </section>

      {/* Title Section with Dark Background */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 lg:py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-light text-[#8fc0e5] mb-8 font-[family-name:var(--font-playfair)] tracking-tight">Oorringen</h1>
            <p className="text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed max-w-4xl mx-auto mb-10 font-light font-[family-name:var(--font-playfair)] tracking-tight" style={{ lineHeight: '1.6' }}>
              Bent u op zoek naar oorringen die stijl en verfijning uitstralen? Onze collectie biedt unieke en trendy ontwerpen. Klaar om uw gepersonaliseerde oorringen te laten maken?
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#8fc0e5] text-white px-8 py-4 rounded-md font-medium hover:bg-[#7ab0d8] hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase text-xl"
            >
              Contacteer ons
            </Link>
          </div>
      </section>

      {/* Earrings Gallery */}
      <FadeInSection delay={100}>
        <main className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-16">
              {/* Oorringen 1 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927778/oorringen-03_cr1a7m.jpg"
                      alt="Geelgoud 18K"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Geelgoud 18K</p>
                  </div>
                </div>
              </div>

              {/* Oorringen 2 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927780/oorringen-04_xqsse4.jpg"
                      alt="Sterlingsilver 925 met aquamarijn"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Sterlingsilver 925 met aquamarijn</p>
                  </div>
                </div>
              </div>

              {/* Oorringen 3 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927780/oorringen-05_e6m6d9.jpg"
                      alt="Witgoud 18K met saffier"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Witgoud 18K met saffier</p>
                  </div>
                </div>
              </div>

              {/* Oorringen 4 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927780/oorringen-06_qslzns.jpg"
                      alt="Sterlingsilver 925"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Sterlingsilver 925</p>
                  </div>
                </div>
              </div>

              {/* Oorringen 5 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927785/oorringen-07_aitmoj.jpg"
                      alt="Geelgoud 18K"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Geelgoud 18K</p>
                  </div>
                </div>
              </div>

              {/* Oorringen 6 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927786/oorringen-08_jinj5h.jpg"
                      alt="Sterlingsilver 925"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Sterlingsilver 925</p>
                  </div>
                </div>
              </div>

              {/* Oorringen 7 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927786/oorringen-09_fndb1h.jpg"
                      alt="Sterlingsilver 925"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Sterlingsilver 925</p>
                  </div>
                </div>
              </div>

              {/* Oorringen 8 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927786/oorringen-10_jx31ct.jpg"
                      alt="Sterlingsilver 925"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Sterlingsilver 925</p>
                  </div>
                </div>
              </div>

              {/* Oorringen 9 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927786/oorringen-11_jkaezi.jpg"
                      alt="Witgoud 18K met natuurparels en Keshi parels"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-1">Witgoud 18K met natuurparels en Keshi parels</p>
                  </div>
                </div>
              </div>

              {/* Oorringen 10 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927786/oorringen-12_pgqxvo.jpg"
                      alt="Sterlingsilver 925 met natuurparels en barokparels"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-1">925 met natuurparels en barokparels</p>
                  </div>
                </div>
              </div>

              {/* Oorringen 11 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927786/oorringen-13_vv4l2a.jpg"
                      alt="Verguld 18K Sterlingsilver 925"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Verguld 18K Sterlingsilver 925</p>
                  </div>
                </div>
              </div>

              {/* Oorringen 12 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927787/oorringen-14_hqfwjt.jpg"
                      alt="Sterlingsilver 925 met tanzanite"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Sterlingsilver 925 met tanzanite</p>
                  </div>
                </div>
              </div>

              {/* Oorringen 13 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927787/oorringen-15_e6mbdo.jpg"
                      alt="Sterlingsilver 925"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Sterlingsilver 925</p>
                  </div>
                </div>
              </div>

              {/* Oorringen 14 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927787/oorringen-16_roz0xm.jpg"
                      alt="Sterlingsilver 925"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Sterlingsilver 925</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </FadeInSection>

      {/* Custom Earrings Section */}
      <FadeInSection delay={200}>
        <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-20 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-light text-[#8fc0e5] mb-8 font-[family-name:var(--font-playfair)] tracking-tight">Op zoek naar unieke oorringen?</h2>
              <p className="text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed mb-10 font-light font-[family-name:var(--font-playfair)] tracking-tight" style={{ lineHeight: '1.6' }}>
                Laat ons uw droomsieraden ontwerpen en maken. Elk stuk wordt speciaal voor u gemaakt, afgestemd op uw persoonlijke smaak en wensen.
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
                  src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927778/oorringen-01_zphhel.png"
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
                <li><Link href="/oorringen" className="text-[#8fc0e5] hover:underline font-medium">Oorringen</Link></li>
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