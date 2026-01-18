'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Header from '../../components/Header'
import FadeInSection from '../../components/FadeInSection'
import ScrollToTop from '../../components/ScrollToTop'

export default function HalskettingenPage() {
  const [selectedImage, setSelectedImage] = useState<{src: string; name: string} | null>(null)

  const products = [
    {
      src: 'https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927765/halskettingen-03_dhsxsj.jpg',
      name: 'Sterlingsilver 925'
    },
    {
      src: 'https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927765/halskettingen-04_biesao.jpg',
      name: 'Koord met geëmailleerde hangertjes'
    },
    {
      src: 'https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927765/halskettingen-05_j3nslh.png',
      name: 'Sterlingsilver 925'
    },
    {
      src: 'https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927765/halskettingen-06_bbip0f.jpg',
      name: 'Sterlingsilver 925'
    },
    {
      src: 'https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927767/halskettingen-07_wriiaj.jpg',
      name: 'Sterlingsilver 925'
    },
    {
      src: 'https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927766/halskettingen-08_mnhsg3.jpg',
      name: 'Sterlingsilver 925'
    },
    {
      src: 'https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927769/halskettingen-09_c8wvze.png',
      name: 'Sterlingsilver 925'
    },
    {
      src: 'https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927771/halskettingen-10_swd4fh.jpg',
      name: 'Natuurparels met wit- en geelgouden slotje'
    },
    {
      src: 'https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927772/halskettingen-11_rg6m00.jpg',
      name: 'Verguld 18K Sterlingsilver 925'
    },
    {
      src: 'https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927772/halskettingen-12_icz4cx.png',
      name: 'Natuurparels met wit- en geelgouden slotje'
    },
    {
      src: 'https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927772/halskettingen-13_srxtrj.jpg',
      name: 'Sterlingsilver 999'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />

      {/* Hero Image */}
      <section className="relative h-[40vh] sm:h-[70vh] md:h-[80vh] lg:h-[750px] overflow-hidden bg-gray-900">
        <Image
          src="https://res.cloudinary.com/dfdlwn49l/image/upload/v1761927766/halskettingen-02_nvplfc.jpg"
          alt="Halskettingen collectie"
          fill
          className="object-contain md:object-cover"
          style={{ objectPosition: '50% 55%' }}
          priority
        />
      </section>

      {/* Title Section with Dark Background */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 lg:py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-light text-[#8fc0e5] mb-8 font-[family-name:var(--font-playfair)] tracking-tight">Halskettingen</h1>
            <p className="text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed max-w-4xl mx-auto mb-10 font-light font-[family-name:var(--font-playfair)] tracking-tight" style={{ lineHeight: '1.6' }}>
              Bent u op zoek naar halskettingen die stijl en verfijning uitstralen? Onze collectie biedt unieke en trendy ontwerpen. Klaar om uw gepersonaliseerde halsketting te laten maken?
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#8fc0e5] text-white px-8 py-4 rounded-md font-medium hover:bg-[#7ab0d8] hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase text-xl"
            >
              Contacteer ons
            </Link>
          </div>
      </section>

      {/* Halskettingen Gallery */}
      <FadeInSection delay={100}>
        <main className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-16">
              {products.map((product, index) => (
                <div key={index} className="group cursor-pointer" onClick={() => setSelectedImage(product)}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105">
                    <div className="aspect-square relative overflow-hidden bg-white">
                      <Image
                        src={product.src}
                        alt={product.name}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                      />
                    </div>
                    <div className="p-5 bg-[#8fc0e5]">
                      <p className="text-white text-sm text-center truncate px-2">{product.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </FadeInSection>

      {/* Image Modal Popup */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative bg-white rounded-lg shadow-2xl max-w-2xl max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-[#8fc0e5] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#7ab0d8] transition-all z-10"
            >
              ✕
            </button>

            {/* Image */}
            <div className="relative w-full h-[70vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.name}
                fill
                className="object-contain p-6"
              />
            </div>

            {/* Product Name */}
            <div className="bg-[#8fc0e5] p-6 text-center">
              <p className="text-white text-lg font-medium">{selectedImage.name}</p>
            </div>
          </div>
        </div>
      )}

      {/* Custom Halsketting Section */}
      <FadeInSection delay={200}>
        <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-20 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-light text-[#8fc0e5] mb-8 font-[family-name:var(--font-playfair)] tracking-tight">Op zoek naar een unieke halsketting?</h2>
              <p className="text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed mb-10 font-light font-[family-name:var(--font-playfair)] tracking-tight" style={{ lineHeight: '1.6' }}>
                Laat ons uw droomhalsketting ontwerpen en maken. Elk stuk wordt speciaal voor u gemaakt, afgestemd op uw persoonlijke smaak en wensen.
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
                <li><Link href="/halskettingen" className="text-[#8fc0e5] hover:underline font-medium">Halskettingen</Link></li>
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