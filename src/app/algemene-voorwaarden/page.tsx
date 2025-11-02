import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import FadeInSection from '../../components/FadeInSection'
import ScrollToTop from '../../components/ScrollToTop'

export default function AlgemeneVoorwaardenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />

      {/* Page Title */}
      <FadeInSection>
        <section className="bg-white py-16 lg:py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#8fc0e5] text-center font-[family-name:var(--font-playfair)] tracking-tight mb-4">Algemene Voorwaarden</h1>
          </div>
        </section>
      </FadeInSection>

      {/* Content */}
      <FadeInSection delay={100}>
        <section className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto prose prose-sm">
              <div className="space-y-8 text-gray-700">
                
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 1: Toepasselijkheid</h2>
                  <p className="leading-relaxed">
                    Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten tussen 10a Juweelontwerp - Tina Piano (hierna: "wij") en de klant, voor zover niet uitdrukkelijk schriftelijk van deze voorwaarden wordt afgeweken.
                  </p>
                  <div className="mt-4 bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Bedrijfsgegevens:</h3>
                    <ul className="space-y-2">
                      <li><strong>Naam:</strong> Tina Piano</li>
                      <li><strong>Adres:</strong> Jehennestraat 21, 3770 Riemst, België</li>
                      <li><strong>E-mail:</strong> info@tinapiano.be</li>
                      <li><strong>Telefoon:</strong> +32 488 89 34 08</li>
                      <li><strong>Website:</strong> www.tinapiano.be</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 2: Aanbod en overeenkomst</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>2.1</strong> Alle aanbiedingen zijn vrijblijvend en kunnen door ons te allen tijde worden ingetrokken of gewijzigd.</li>
                    <li><strong>2.2</strong> Een overeenkomst komt tot stand door schriftelijke bevestiging van de opdracht door ons of door daadwerkelijke uitvoering van de opdracht.</li>
                    <li><strong>2.3</strong> Alle handgemaakte juwelen en sieraden zijn unieke stukken. Kleine variaties in vorm, kleur en afmetingen zijn inherent aan handgemaakt werk en vormen geen gebrek.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 3: Prijzen en betaling</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>3.1</strong> Alle prijzen zijn inclusief 21% BTW, tenzij uitdrukkelijk anders vermeld.</li>
                    <li><strong>3.2</strong> Prijzen kunnen zonder voorafgaande kennisgeving worden gewijzigd.</li>
                    <li><strong>3.3</strong> Betaling dient te geschieden binnen 14 dagen na factuurdatum, tenzij schriftelijk anders overeengekomen.</li>
                    <li><strong>3.4</strong> Bij laattijdige betaling zijn wij gerechtigd een rente van 1% per maand te berekenen vanaf de vervaldatum.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 4: Levering en risico-overgang</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>4.1</strong> Levertijden zijn indicatief en nimmer fataal, tenzij uitdrukkelijk schriftelijk een fatale termijn is overeengekomen.</li>
                    <li><strong>4.2</strong> Het risico van verlies of beschadiging gaat over op de klant op het moment van aflevering.</li>
                    <li><strong>4.3</strong> Levering vindt plaats op het door de klant opgegeven adres.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 5: Wettelijke garantie en conformiteit</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>5.1</strong> Op alle producten rust een wettelijke garantie van 2 jaar vanaf levering conform de Belgische wetgeving.</li>
                    <li><strong>5.2</strong> Consumentenrechten: Als consument heeft u recht op herstel of vervanging zonder kosten bij gebreken die bestonden ten tijde van levering, prijsvermindering of ontbinding van de koop indien herstel of vervanging onmogelijk is, melding van gebreken binnen 2 maanden na ontdekking, en het instellen van rechtsvordering binnen 1 jaar na ontdekking van het gebrek.</li>
                    <li><strong>5.3</strong> De wettelijke garantie geldt niet voor normale slijtage, onjuist gebruik, of beschadigingen ontstaan na levering door toedoen van de klant.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 6: Herroepingsrecht</h2>
                  <p className="mb-3 text-sm text-gray-600">(alleen voor consumentenkoop op afstand)</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>6.1</strong> Bij aankoop op afstand heeft u als consument het recht om binnen 14 dagen na ontvangst zonder opgave van reden de overeenkomst te herroepen.</li>
                    <li><strong>6.2</strong> Uitzonderingen: Het herroepingsrecht geldt niet voor op maat gemaakte of gepersonaliseerde sieraden, en producten die door hun aard niet geschikt zijn voor retournering.</li>
                    <li><strong>6.3</strong> Retourkosten zijn voor rekening van de klant, tenzij wij hebben aangeboden deze te dragen.</li>
                    <li><strong>6.4</strong> Terugbetaling geschiedt binnen 14 dagen na ontvangst van de retour.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 7: Aansprakelijkheid</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>7.1</strong> Onze aansprakelijkheid voor directe schade is beperkt tot het factuurbedrag van de geleverde producten.</li>
                    <li><strong>7.2</strong> Wij zijn niet aansprakelijk voor indirecte schade, gevolgschade, gederfde winst of immateriële schade.</li>
                    <li><strong>7.3</strong> Consumentenbescherming: Deze aansprakelijkheidsbeperkingen gelden niet voor schade door overlijden of letsel, noch voor opzettelijke of grove schuld van onze zijde.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 8: Eigendomsvoorbehoud</h2>
                  <p className="leading-relaxed">
                    Alle geleverde producten blijven ons eigendom totdat volledige betaling heeft plaatsgevonden.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 9: Overmacht</h2>
                  <p className="leading-relaxed">
                    Wij zijn niet gehouden tot nakoming van enige verplichting jegens de klant indien wij daartoe verhinderd zijn als gevolg van overmacht, zoals onder meer oorlog, terreur, epidemie, staking of overheidsmaatregelen.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 10: Klachtenprocedure en geschillenregeling</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>10.1</strong> Klachten: Klachten over onze producten of dienstverlening kunnen worden gemeld via info@tinapiano.be of +32 488 89 34 08.</li>
                    <li><strong>10.2</strong> Consumentenbemiddeling: Voor consumentenkwesties kunt u contact opnemen met Consumentenombudsdienst, North Gate II, Boulevard du Roi Albert II 8 bus 1, 1000 Brussel, Tel: +32 2 702 52 20, E-mail: contact@consumerombudsman.be</li>
                    <li><strong>10.3</strong> Online geschillenoplossing: Voor online aankopen: https://ec.europa.eu/consumers/odr/</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 11: Gegevensbescherming</h2>
                  <p className="leading-relaxed">
                    Voor de verwerking van uw persoonsgegevens verwijzen wij naar ons <Link href="/privacybeleid" className="text-[#8fc0e5] hover:underline">privacybeleid</Link>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 12: Toepasselijk recht en geschillen</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>12.1</strong> Op alle overeenkomsten is uitsluitend Belgisch recht van toepassing.</li>
                    <li><strong>12.2</strong> Alle geschillen worden voorgelegd aan de bevoegde rechtbanken van het arrondissement Tongeren, België.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 13: Slotbepalingen</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>13.1</strong> Wijzigingen van deze voorwaarden zijn slechts van kracht nadat zij schriftelijk aan de klant zijn meegedeeld.</li>
                    <li><strong>13.2</strong> Indien een bepaling van deze voorwaarden nietig of vernietigbaar blijkt, blijven de overige bepalingen volledig van kracht.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg text-sm text-gray-600 border-l-4 border-[#8fc0e5]">
                  <p><strong>Laatste wijziging:</strong> Januari 2025</p>
                  <p><strong>Versie:</strong> 1.0</p>
                </div>

              </div>
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