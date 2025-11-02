import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import FadeInSection from '../../components/FadeInSection'
import ScrollToTop from '../../components/ScrollToTop'

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />

      {/* Hero Image */}
      <section className="relative h-[600px] lg:h-[750px] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094846/handgemaakte-juwelen-studio-maastricht-03_uypccn.jpg"
          alt="Handgemaakte juwelen studio Maastricht"
          fill
          className="object-cover animate-ken-burns"
        />
      </section>

      {/* Title Section with Dark Background */}
      <FadeInSection>
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 lg:py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-light text-[#8fc0e5] mb-8 font-[family-name:var(--font-playfair)] tracking-tight">Creative Studio</h1>
            <p className="text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed max-w-4xl mx-auto mb-10 font-light font-[family-name:var(--font-playfair)] tracking-tight" style={{ lineHeight: '1.6' }}>
              Ontdek het creatieve proces achter onze handgemaakte juwelen
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

      {/* Studio Content - Minimal Section */}
      <FadeInSection delay={100}>
        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-6">
          </div>
        </section>
      </FadeInSection>

      {/* SECTION 1: Goud smelten - Title and Text */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-[#8fc0e5] mb-12 text-center font-[family-name:var(--font-playfair)]">Goud smelten</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-center">
                Uw oude juwelen smelten of de originele juwelen een hedendaagse look geven. 10a Juweelontwerp biedt ook herontwerpservices aan, waarbij we uw oude juwelen of erfstukken transformeren tot een nieuw hedendaags juweel.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-center">
                Van oud goud naar nieuw sieraad: een bijzonder proces waar tijd aandacht en vakmanschap voor nodig is
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1B: Goud smelten Gallery - 4 Columns (6 images) */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Image 1 */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094846/handgemaakte-juwelen-studio-maastricht-03_uypccn.jpg"
                alt="Goud smelten proces"
                width={300}
                height={300}
                className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
              />
            </div>

            {/* Image 2 */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094850/handgemaakte-juwelen-studio-tongeren-04_ysx2vg.jpg"
                alt="Goud smelten Tongeren"
                width={300}
                height={300}
                className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
              />
            </div>

            {/* Image 3 */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094843/handgemaakte-juwelen-studio-bilzen-05_fasvsk.jpg"
                alt="Goud smelten Bilzen"
                width={300}
                height={300}
                className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
              />
            </div>

            {/* Image 4 */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094848/handgemaakte-juwelen-studio-riemst-06_fgwles.jpg"
                alt="Goud smelten Riemst"
                width={300}
                height={300}
                className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
              />
            </div>

            {/* Image 5 */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094843/handgemaakte-juwelen-studio-hasselt-07_widg4o.jpg"
                alt="Goud smelten Hasselt"
                width={300}
                height={300}
                className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
              />
            </div>

            {/* Image 6 */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094846/handgemaakte-juwelen-studio-maastricht-08_me7tld.jpg"
                alt="Goud smelten Maastricht"
                width={300}
                height={300}
                className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Ontwerp & realisatie - Title and Text */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-[#8fc0e5] mb-12 text-center font-[family-name:var(--font-playfair)]">Ontwerp & realisatie</h2>
          
          <div className="max-w-3xl mx-auto mb-16">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-center">
                Uw oude juwelen smelten of de originele juwelen een hedendaagse look geven. 10a Juweelontwerp biedt ook herontwerpservices aan, waarbij we uw oude juwelen of erfstukken transformeren tot een nieuw hedendaags juweel.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-center">
                Van oud goud naar nieuw sieraad: een bijzonder proces waar tijd aandacht en vakmanschap voor nodig is
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2B: Ontwerp & realisatie Gallery - 4 Columns (12 images) */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Image 1 */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094850/handgemaakte-juwelen-studio-tongeren-09_pbt7nw.jpg"
                alt="Ontwerp Tongeren"
                width={300}
                height={300}
                className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
              />
            </div>

            {/* Image 2 */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094843/handgemaakte-juwelen-studio-bilzen-10_uzsy7l.jpg"
                alt="Realisatie Bilzen"
                width={300}
                height={300}
                className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
              />
            </div>

            {/* Image 3 */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094848/handgemaakte-juwelen-studio-riemst-11_f54l3x.jpg"
                alt="Ontwerp Riemst"
                width={300}
                height={300}
                className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
              />
            </div>

            {/* Image 4 */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094844/handgemaakte-juwelen-studio-hasselt-12_vhvsqy.jpg"
                alt="Realisatie Hasselt"
                width={300}
                height={300}
                className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
              />
            </div>

            {/* Image 5 */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094850/handgemaakte-juwelen-studio-tongeren-14_tdwori.jpg"
                alt="Ontwerp Tongeren"
                width={300}
                height={300}
                className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
              />
            </div>

            {/* Image 6 */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094843/handgemaakte-juwelen-studio-bilzen-15_x9fzo2.jpg"
                alt="Realisatie Bilzen"
                width={300}
                height={300}
                className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
              />
            </div>

            {/* Image 7 */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094848/handgemaakte-juwelen-studio-riemst-16_alwrru.jpg"
                alt="Ontwerp Riemst"
                width={300}
                height={300}
                className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
              />
            </div>

            {/* Image 8 */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094846/handgemaakte-juwelen-studio-hasselt-27_ootgvi.jpg"
                alt="Realisatie Hasselt"
                width={300}
                height={300}
                className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
              />
            </div>

            {/* Image 9 */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094850/handgemaakte-juwelen-studio-tongeren-19_wsqpne.jpg"
                alt="Ontwerp Tongeren"
                width={300}
                height={300}
                className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
              />
            </div>

            {/* Image 10 */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094848/handgemaakte-juwelen-studio-maastricht-18_mgoj3d.jpg"
                alt="Realisatie Maastricht"
                width={300}
                height={300}
                className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
              />
            </div>

            {/* Image 11 */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094843/handgemaakte-juwelen-studio-bilzen-20_fktbkh.jpg"
                alt="Ontwerp Bilzen"
                width={300}
                height={300}
                className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
              />
            </div>

            {/* Image 12 */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094845/handgemaakte-juwelen-studio-hasselt-22_qfncxb.jpg"
                alt="Realisatie Hasselt"
                width={300}
                height={300}
                className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Technieken - Title and Text */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-[#8fc0e5] mb-12 text-center font-[family-name:var(--font-playfair)]">Technieken</h2>
          
          <div className="max-w-3xl mx-auto mb-16">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-center">
                Het werken met edelmetalen om juwelen en unieke objecten te creëren, is een ambacht dat al sinds de oudheid bestaat. Om een prachtig sieraad of kunstwerk te vervaardigen, maakt een edelsmid gebruik van verschillende technieken, zoals smelten, gieten, solderen en het zetten van edelstenen.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-center">
                Edelsmeedkunst is zowel een ambacht als een kunstvorm, waarbij de relatie tussen de maker, het object en de drager onlosmakelijk met elkaar verbonden is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3B: Technieken Gallery - 4 Columns (4 images) */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Image 1 */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094851/handgemaakte-juwelen-studio-tongeren-24_e8b406.jpg"
                alt="Technieken Tongeren"
                width={300}
                height={300}
                className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
              />
            </div>

            {/* Image 2 */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094843/handgemaakte-juwelen-studio-bilzen-25_tdot4i.jpg"
                alt="Technieken Bilzen"
                width={300}
                height={300}
                className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
              />
            </div>

            {/* Image 3 */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094849/handgemaakte-juwelen-studio-riemst-26_pqcp7c.jpg"
                alt="Technieken Riemst"
                width={300}
                height={300}
                className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
              />
            </div>

            {/* Image 4 */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094846/handgemaakte-juwelen-studio-hasselt-27_ootgvi.jpg"
                alt="Technieken Hasselt"
                width={300}
                height={300}
                className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Nieuw leven voor oude juwelen - Title and Text */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-[#8fc0e5] mb-12 text-center font-[family-name:var(--font-playfair)]">Nieuw leven voor oude juwelen</h2>
          
          <div className="max-w-3xl mx-auto mb-16">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-center">
                Uw oude juwelen smelten of de originele juwelen een hedendaagse look geven. 10a Juweelontwerp biedt ook herontwerpservices aan, waarbij we uw oude juwelen of erfstukken transformeren tot een nieuw hedendaags juweel.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-center">
                Van oud goud naar nieuw sieraad: een bijzonder proces waar tijd aandacht en vakmanschap voor nodig is
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4B: Nieuw leven Gallery - 4 Columns (3 images) */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Image 1 */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094848/handgemaakte-juwelen-studio-maastricht-28_wlqsys.jpg"
                alt="Nieuw leven Maastricht"
                width={300}
                height={300}
                className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
              />
            </div>

            {/* Image 2 */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094851/handgemaakte-juwelen-studio-tongeren-29_ce8nu4.jpg"
                alt="Nieuw leven Tongeren"
                width={300}
                height={300}
                className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
              />
            </div>

            {/* Image 3 */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1762094844/handgemaakte-juwelen-studio-bilzen-30_fqm63l.jpg"
                alt="Nieuw leven Bilzen"
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
              <h2 className="text-4xl md:text-5xl font-light text-[#8fc0e5] mb-8 font-[family-name:var(--font-playfair)] tracking-tight">Laat uw juweel maken</h2>
              <p className="text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed mb-10 font-light font-[family-name:var(--font-playfair)] tracking-tight" style={{ lineHeight: '1.6' }}>
                Maak uw droomjuweel waar
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