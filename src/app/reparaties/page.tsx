import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import FadeInSection from '../../components/FadeInSection'
import ScrollToTop from '../../components/ScrollToTop'

export default function ReparatiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />

      {/* Hero Image */}
      <section className="relative h-[40vh] sm:h-[70vh] md:h-[80vh] lg:h-[750px] overflow-hidden bg-gray-900">
        <Image
          src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762021272/handgemaakte-reparatie-06_vg5dxb.jpg"
          alt="Handgemaakte juwelen reparatie service"
          fill
          className="object-contain md:object-cover"
          style={{ objectPosition: 'center top' }}
          priority
        />
      </section>

      {/* Title Section with Dark Background */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 lg:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-light text-[#8fc0e5] mb-8 font-[family-name:var(--font-playfair)] tracking-tight">Reparaties</h1>
          <p className="text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed max-w-4xl mx-auto mb-10 font-light font-[family-name:var(--font-playfair)] tracking-tight" style={{ lineHeight: '1.6' }}>
            Vertrouw ons uw dierbare juwelen of gebroken parelsnoer aan onze reparatieservice en herontdek de schoonheid die ze ooit hadden.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#8fc0e5] text-white px-8 py-4 rounded-md font-medium hover:bg-[#7ab0d8] hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase text-xl"
          >
            Contacteer ons
          </Link>
        </div>
      </section>

      {/* Services Content - Like Homepage Layout */}
      <FadeInSection delay={100}>
        <section className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Text Only (NO TITLE) */}
              <div>
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    Vertrouw ons uw dierbare juwelen of gebroken parelsnoer aan onze reparatieservice en herontdek de schoonheid die ze ooit hadden.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    10a juweelontwerp voert bijna alle reparaties zelf uit. Wij zetten diamanten en edelstenen en knopen uw parelcollier op de ambachtelijke manier.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Het juweel wordt tevens gecontroleerd, grondig gereinigd en gepolijst.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Ook het aanpassen van ringen op de juiste maat of een juweel laten rodineren is mogelijk.
                  </p>
                </div>
              </div>

              {/* Right - Smaller Image */}
              <div className="relative h-80 lg:h-[400px]">
                <Image
                  src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762021272/handgemaakte-juwelen-reparatie-08_oicnmp.jpg"
                  alt="Handgemaakte juwelen reparatie process"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Gallery Section - 8 Images in 4 Columns x 2 Rows */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Gallery Title */}
          <h2 className="text-3xl md:text-4xl font-light text-[#8fc0e5] mb-16 text-center font-[family-name:var(--font-playfair)]">Fotogalerij</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {/* Gallery Image 1 */}
              <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762020577/reparaties-van-handgemaakte-juwelen-riemst-01_abpeyo.jpg"
                  alt="Handgemaakte juwelen reparatie Riemst"
                  width={300}
                  height={300}
                  className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
                />
              </div>

              {/* Gallery Image 2 */}
              <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762020582/reparaties-van-handgemaakte-juwelen-hasselt-02_nbc1ni.jpg"
                  alt="Handgemaakte juwelen reparatie Hasselt"
                  width={300}
                  height={300}
                  className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
                />
              </div>

              {/* Gallery Image 3 */}
              <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762020577/reparaties-van-handgemaakte-juwelen-riemst-03_quf54u.jpg"
                  alt="Handgemaakte juwelen reparatie Riemst"
                  width={300}
                  height={300}
                  className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
                />
              </div>

              {/* Gallery Image 4 */}
              <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762020575/reparaties-van-handgemaakte-juwelen-limburg-03_c7tbms.jpg"
                  alt="Handgemaakte juwelen reparatie Limburg"
                  width={300}
                  height={300}
                  className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
                />
              </div>

              {/* Gallery Image 5 */}
              <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762020580/reparaties-van-handgemaakte-juwelen-genk-05_nppivw.jpg"
                  alt="Handgemaakte juwelen reparatie Genk"
                  width={300}
                  height={300}
                  className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
                />
              </div>

              {/* Gallery Image 6 */}
              <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762020581/reparaties-van-handgemaakte-juwelen-genk-06_hyhtob.jpg"
                  alt="Handgemaakte juwelen reparatie Genk"
                  width={300}
                  height={300}
                  className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
                />
              </div>

              {/* Gallery Image 7 */}
              <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762020577/reparaties-van-handgemaakte-juwelen-belgie-07_ujp8sk.jpg"
                  alt="Handgemaakte juwelen reparatie België"
                  width={300}
                  height={300}
                  className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
                />
              </div>

              {/* Gallery Image 8 */}
              <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762020576/reparaties-van-handgemaakte-juwelen-belgie-09_ix2txv.jpg"
                  alt="Handgemaakte juwelen reparatie België"
                  width={300}
                  height={300}
                  className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

      {/* CTA Section */}
      <FadeInSection delay={300}>
        <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-20 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-light text-[#8fc0e5] mb-8 font-[family-name:var(--font-playfair)] tracking-tight">Heeft u nog vragen?</h2>
              <p className="text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed mb-10 font-light font-[family-name:var(--font-playfair)] tracking-tight" style={{ lineHeight: '1.6' }}>
                We zijn er voor u
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#8fc0e5] text-white px-8 py-4 rounded-md font-medium hover:bg-[#7ab0d8] hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase text-xl"
              >
                Contacteer ons
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