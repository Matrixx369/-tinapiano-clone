import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import FadeInSection from '../../components/FadeInSection'
import ScrollToTop from '../../components/ScrollToTop'

export default function MannenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />

      {/* Hero Image */}
      <section className="relative h-[600px] lg:h-[750px] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927772/mannen-02_lcpb8n.jpg"
          alt="Mannen collectie"
          fill
          className="object-cover animate-ken-burns"
        />
      </section>

      {/* Title Section with Dark Background */}
      <FadeInSection>
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 lg:py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-light text-[#8fc0e5] mb-8 font-[family-name:var(--font-playfair)] tracking-tight">Mannen</h1>
            <p className="text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed max-w-4xl mx-auto mb-10 font-light font-[family-name:var(--font-playfair)] tracking-tight" style={{ lineHeight: '1.6' }}>
              Bent u op zoek naar juwelen die stijl en verfijning voor mannen uitstralen? Onze collectie biedt unieke en trendy ontwerpen. Klaar om uw gepersonaliseerde juweel te laten maken?
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

      {/* Mannen Gallery */}
      <FadeInSection delay={100}>
        <main className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-16">
              {/* Mannen 1 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927772/mannen-03_qfeqww.jpg"
                      alt="Sleutelhanger Sterlingsilver 925"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Sleutelhanger Sterlingsilver 925</p>
                  </div>
                </div>
              </div>

              {/* Mannen 2 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927777/mannen-04_djjsii.jpg"
                      alt="Sleutelhanger Sterlingsilver 925"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Sleutelhanger Sterlingsilver 925</p>
                  </div>
                </div>
              </div>

              {/* Mannen 3 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927777/mannen-05_a8aqn3.jpg"
                      alt="Sleutelhanger Sterlingsilver 925"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Sleutelhanger Sterlingsilver 925</p>
                  </div>
                </div>
              </div>

              {/* Mannen 4 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927777/mannen-06_ocx7sv.jpg"
                      alt="Sleutelhanger Sterlingsilver 925"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />
                  </div>
                  <div className="p-5 bg-[#8fc0e5]">
                    <p className="text-white text-sm text-center truncate px-2">Sleutelhanger Sterlingsilver 925</p>
                  </div>
                </div>
              </div>

              {/* Mannen 5 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927777/mannen-07_ue5moz.jpg"
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

              {/* Mannen 6 */}
              <div className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <Image
                      src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927777/mannen-08_zluh73.jpg"
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

      {/* Custom Mannen Section */}
      <FadeInSection delay={200}>
        <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-20 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-light text-[#8fc0e5] mb-8 font-[family-name:var(--font-playfair)] tracking-tight">Op zoek naar unieke juwelen voor mannen?</h2>
              <p className="text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed mb-10 font-light font-[family-name:var(--font-playfair)] tracking-tight" style={{ lineHeight: '1.6' }}>
                Laat ons uw droomjuweel ontwerpen en maken. Elk stuk wordt speciaal voor u gemaakt, afgestemd op uw persoonlijke smaak en wensen.
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
                <li><Link href="/mannen" className="text-[#8fc0e5] hover:underline font-medium">Mannen</Link></li>
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