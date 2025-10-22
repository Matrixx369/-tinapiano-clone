import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import FadeInSection from '../components/FadeInSection'
import ScrollToTop from '../components/ScrollToTop'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />

      {/* Hero Image Only */}
      <section className="relative h-[600px] lg:h-[750px] overflow-hidden">
        <Image
          src="https://ext.same-assets.com/3019426010/688791092.webp"
          alt="Handgemaakte juwelen"
          fill
          className="object-cover animate-ken-burns"
          style={{ objectPosition: 'center 35%' }}
        />
      </section>

      {/* Dark Text Section with Button */}
      <FadeInSection>
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 lg:py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed max-w-4xl mx-auto mb-10 font-[family-name:var(--font-playfair)] font-light tracking-tight" style={{ lineHeight: '1.6' }}>
              Laat uw persoonlijkheid schitteren met onze handgemaakte juwelen. 
              Elk stuk is uniek en uiteraard vervaardigd in overleg met de klant
            </h1>
            <Link 
              href="/juwelen"
              className="inline-block bg-[#8fc0e5] text-white px-8 py-4 rounded-md font-medium hover:bg-[#7ab0d8] hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase text-xl"
            >
              Blader door de creaties
            </Link>
          </div>
        </section>
      </FadeInSection>

      {/* About Section */}
      <FadeInSection delay={100}>
        <section className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2">
                <Image
                  src="https://afe081fed4.clvaw-cdnwnd.com/658ebfc1c006b3887df112a24a576036/200000113-7b62a7b62b/logo-transparent.png?ph=afe081fed4"
                  alt="10a Juweelontwerp Logo"
                  width={300}
                  height={200}
                  className="mx-auto"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-4xl md:text-5xl font-light text-[#8fc0e5] mb-8 font-[family-name:var(--font-playfair)] tracking-tight">
                  <span className="text-5xl md:text-6xl">10</span>
                  <span className="text-3xl md:text-4xl">a</span>
                  {' '}is een Belgisch Label!
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed" style={{ lineHeight: '1.8' }}>
                  Ieder juweel is uniek. Tina (10a) ontwerpt en maakt juwelen voor wie houdt van puurheid, luxe en tijdloze schoonheid.
                  Robuust, markant maar ook vrouwelijk en zacht. Ongewone sieraden maken de drager interessant, onderstrepen haar persoonlijkheid.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Product Categories - NO BORDERS */}
      <FadeInSection delay={150}>
        <section className="py-20 lg:py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-[#8fc0e5] text-center mb-16 font-[family-name:var(--font-playfair)] tracking-tight">Onze sieraden</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <Link href="/ringen" className="group cursor-pointer">
              <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://ext.same-assets.com/3019426010/2649150772.webp"
                    alt="Ringen"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 bg-[#8fc0e5]">
                  <h3 className="text-white font-medium text-center uppercase tracking-wide">Ringen</h3>
                </div>
              </div>
            </Link>

            <Link href="/oorringen" className="group cursor-pointer">
              <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://ext.same-assets.com/3019426010/1871366328.webp"
                    alt="Oorringen"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 bg-[#8fc0e5]">
                  <h3 className="text-white font-medium text-center uppercase tracking-wide">Oorringen</h3>
                </div>
              </div>
            </Link>

            <Link href="/halskettingen" className="group cursor-pointer">
              <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://ext.same-assets.com/3019426010/1072932616.webp"
                    alt="Halsjuwelen"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 bg-[#8fc0e5]">
                  <h3 className="text-white font-medium text-center uppercase tracking-wide">Halsjuwelen</h3>
                </div>
              </div>
            </Link>

            <Link href="/armbanden" className="group cursor-pointer">
              <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://ext.same-assets.com/3019426010/2462445221.webp"
                    alt="Armbanden"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 bg-[#8fc0e5]">
                  <h3 className="text-white font-medium text-center uppercase tracking-wide">Armbanden</h3>
                </div>
              </div>
            </Link>

            <Link href="/broches" className="group cursor-pointer">
              <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="https://ext.same-assets.com/3019426010/1792438925.webp"
                    alt="Broches"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 bg-[#8fc0e5]">
                  <h3 className="text-white font-medium text-center uppercase tracking-wide">Broches</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Custom Jewelry Section */}
      <FadeInSection delay={200}>
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <Image
                src="https://ext.same-assets.com/3019426010/3179136517.webp"
                alt="Juwelen op maat"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-light text-[#8fc0e5] mb-8 font-[family-name:var(--font-playfair)] tracking-tight">Juwelen op maat</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-10" style={{ lineHeight: '1.8' }}>
                Op zoek naar een uniek juweel die bij uw persoonlijkheid past? Bij 10a juweelontwerp helpen wij u bij het creëren van een op maat gemaakte juweel dat volledig aan uw wensen voldoet. Contacteer ons vandaag nog om een afspraak te maken!
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-[#8fc0e5] text-white px-8 py-4 rounded-md font-medium hover:bg-[#7ab0d8] hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase text-xl"
              >
                Contacteer ons
              </Link>
            </div>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Men's Jewelry Section */}
      <FadeInSection delay={100}>
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2">
              <Image
                src="https://ext.same-assets.com/3019426010/1065727544.webp"
                alt="Herenjuwelen"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-light text-[#8fc0e5] mb-8 font-[family-name:var(--font-playfair)] tracking-tight">Herenjuwelen</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6" style={{ lineHeight: '1.8' }}>
                Bent u op zoek naar stijlvolle en trendy juwelen voor mannen? Onze collectie herenjuwelen is speciaal ontworpen om mannen een unieke en verfijnde uitstraling te geven. Van elegante armbanden, sleutelhangers tot klassieke manchetknopen, wij hebben alles wat u nodig heeft om uw outfit compleet te maken.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed" style={{ lineHeight: '1.8' }}>
                Geef uw look een extra dimensie met onze prachtige ontwerpen.
              </p>
            </div>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Redesign Section */}
      <FadeInSection delay={150}>
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <Image
                src="https://ext.same-assets.com/3019426010/4016404978.webp"
                alt="Herontwerpen"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-light text-[#8fc0e5] mb-8 font-[family-name:var(--font-playfair)] tracking-tight">Herontwerpen</h2>
              <p className="text-gray-700 text-lg leading-relaxed" style={{ lineHeight: '1.8' }}>
                10a Juweelontwerp biedt ook herontwerp services aan, waarbij we uw oude juwelen of erfstukken transformeren tot een nieuw hedendaags juweel.
              </p>
            </div>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Repair Section */}
      <FadeInSection delay={200}>
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2">
              <Image
                src="https://ext.same-assets.com/3019426010/36370026.webp"
                alt="Reparatie"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-light text-[#8fc0e5] mb-8 font-[family-name:var(--font-playfair)] tracking-tight">Reparatie</h2>
              <p className="text-gray-700 text-lg leading-relaxed" style={{ lineHeight: '1.8' }}>
                Vertrouw ons uw dierbare juwelen of gebroken parelsnoer toe aan onze reparatieservice en herontdek de schoonheid die ze ooit hadden. Neem vandaag nog contact met ons op om een afspraak te maken en uw juwelen weer te laten stralen.
              </p>
            </div>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Testimonials */}
      <FadeInSection delay={100}>
      <section className="py-20 lg:py-24 bg-[#8fc0e5]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-center text-gray-900 mb-16 font-[family-name:var(--font-playfair)] tracking-tight">Getuigenissen</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center bg-white bg-opacity-20 p-8 rounded-lg backdrop-blur-sm hover:bg-opacity-30 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-[family-name:var(--font-playfair)]">Christel B. - Hasselt</h3>
              <p className="text-gray-800 italic leading-relaxed" style={{ lineHeight: '1.8' }}>
                "Tina heeft voor mij een erfstuk opnieuw ontworpen en het resultaat is verbluffend. Haar vakmanschap en oog voor detail zijn ongevenaard. Een ware professional die ik iedereen zou aanraden."
              </p>
            </div>
            <div className="text-center bg-white bg-opacity-20 p-8 rounded-lg backdrop-blur-sm hover:bg-opacity-30 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-[family-name:var(--font-playfair)]">Jeroen T. - Maastricht</h3>
              <p className="text-gray-800 italic leading-relaxed" style={{ lineHeight: '1.8' }}>
                "Ik ben ontzettend blij met de ring die Tina voor me heeft gemaakt. Ze luistert goed, denkt mee en haar werk is van hoge kwaliteit. Ze is zeer deskundig en levert uitstekend werk af."
              </p>
            </div>
            <div className="text-center bg-white bg-opacity-20 p-8 rounded-lg backdrop-blur-sm hover:bg-opacity-30 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-[family-name:var(--font-playfair)]">Valerie V. - Knokke</h3>
              <p className="text-gray-800 italic leading-relaxed" style={{ lineHeight: '1.8' }}>
                "Tina is meer dan een goudsmid; ze is een ware kunstenaar. Haar persoonlijke benadering maakte de ervaring speciaal. Ze heeft voor mij een set oorbellen gemaakt die perfect passen bij mijn stijl."
              </p>
            </div>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Final CTA */}
      <FadeInSection delay={200}>
      <section className="py-20 lg:py-24 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-10 font-[family-name:var(--font-playfair)] tracking-tight">
            Schitterend en op maat. Tijd om uw droomjuweel te ontwerpen?
          </h2>
          <Link 
            href="/contact"
            className="inline-block bg-[#8fc0e5] text-white px-8 py-4 rounded-md font-medium hover:bg-[#7ab0d8] hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase text-xl"
          >
            Contacteer ons
          </Link>
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