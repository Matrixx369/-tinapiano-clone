import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'

export default function OverMijPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-[#8fc0e5] mb-6">Over Mij</h1>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Ontmoet Tina, de kunstenaar achter 10a Juweelontwerp. Een verhaal van passie,
              vakmanschap en de liefde voor het creëren van unieke sieraden.
            </p>
          </div>

          {/* About Tina Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="aspect-square relative bg-gray-200 rounded-lg">
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500">Tina's Portret</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-light text-[#8fc0e5] mb-6">Tina Piano</h2>
              <h3 className="text-xl text-gray-800 mb-6 font-medium">Goudsmid & Ontwerper</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Met meer dan 15 jaar ervaring in de juwelenwereld, ben ik gepassioneerd door het creëren van
                unieke sieraden die de persoonlijkheid van de drager weerspiegelen. Elk stuk dat ik maak,
                vertelt een verhaal en draagt een deel van mijn ziel.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Mijn filosofie is eenvoudig: waar het organische en het strakke elkaar ontmoeten,
                ontstaat pure schoonheid. Ik geloof dat sieraden meer zijn dan alleen accessoires -
                ze zijn uitdrukkingen van wie we zijn.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Vanuit mijn atelier in Riemst werk ik samen met klanten om hun dromen om te zetten
                in tastbare kunstwerken van edelmetaal en edelstenen.
              </p>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-light text-[#8fc0e5] text-center mb-8">Mijn Filosofie</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#8fc0e5] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Organische Vormen</h3>
                <p className="text-gray-600">
                  Geïnspireerd door de natuur creëer ik vormen die leven en bewegen met de drager.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#8fc0e5] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">⚖️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Strakke Lijnen</h3>
                <p className="text-gray-600">
                  Moderne architectuur en design geven structuur en elegantie aan mijn creaties.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#8fc0e5] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">💫</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Persoonlijke Verhalen</h3>
                <p className="text-gray-600">
                  Elk juweel is uniek en vertelt het persoonlijke verhaal van de drager.
                </p>
              </div>
            </div>
          </div>

          {/* Experience & Expertise */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-[#8fc0e5] text-center mb-12">Ervaring & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Vakmanschap</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• 15+ jaar ervaring in goudsmeedkunst</li>
                  <li>• Gespecialiseerd in op maat gemaakte sieraden</li>
                  <li>• Expert in traditionele en moderne technieken</li>
                  <li>• Werken met edelmetalen en edelstenen</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Services</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Ontwerp en vervaardiging op maat</li>
                  <li>• Herontwerp van erfstukken</li>
                  <li>• Sieraden reparaties</li>
                  <li>• Persoonlijke designconsultaties</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Werkwijze */}
          <div className="bg-gray-900 rounded-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-light text-white text-center mb-8">Mijn Werkwijze</h2>
            <div className="grid md:grid-cols-2 gap-8 text-white">
              <div>
                <h3 className="text-xl font-semibold text-[#8fc0e5] mb-4">Luisteren & Begrijpen</h3>
                <p className="text-gray-300 leading-relaxed">
                  Elk project begint met een uitgebreid gesprek. Ik luister naar uw verhaal,
                  uw dromen en wensen om het perfecte ontwerp te kunnen creëren.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#8fc0e5] mb-4">Creëren & Verfijnen</h3>
                <p className="text-gray-300 leading-relaxed">
                  Van eerste schets tot finale afwerking - elk detail wordt zorgvuldig
                  uitgewerkt tot een kunstwerk dat uw verwachtingen overtreft.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-light text-[#8fc0e5] mb-6">Laten we kennismaken</h2>
            <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
              Bent u benieuwd naar de mogelijkheden? Ik nodig u graag uit voor een persoonlijk gesprek
              in mijn atelier om uw droomjuweel te bespreken.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-[#8fc0e5] text-white px-8 py-3 rounded-md font-medium hover:bg-[#7ab0d8] transition-colors"
            >
              Plan een kennismakingsgesprek
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
                <li><Link href="/over-mij" className="text-[#8fc0e5] font-medium">Over mij</Link></li>
                <li><Link href="/#contact" className="text-gray-300 hover:text-[#8fc0e5]">Contact</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-[#8fc0e5]">Privacybeleid</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-[#8fc0e5]">Algemene Voorwaarden</Link></li>
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
            <a href="#" className="text-gray-400 hover:text-[#8fc0e5]">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
