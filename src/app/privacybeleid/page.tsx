import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import FadeInSection from '../../components/FadeInSection'
import ScrollToTop from '../../components/ScrollToTop'

export default function PrivacybeleidsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />

      {/* Page Title */}
      <FadeInSection>
        <section className="bg-white py-16 lg:py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#8fc0e5] text-center font-[family-name:var(--font-playfair)] tracking-tight mb-4">Privacybeleid</h1>
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
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Algemene informatie</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">1.1 Verwerkingsverantwoordelijke:</h3>
                      <ul className="list-none space-y-1 ml-0">
                        <li><strong>Naam:</strong> Tina Piano</li>
                        <li><strong>Adres:</strong> Jehennestraat 21, 3770 Riemst, België</li>
                        <li><strong>E-mail:</strong> info@tinapiano.be</li>
                        <li><strong>Telefoon:</strong> +32 488 89 34 08</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">1.2 Contact Belgische Gegevensbeschermingsautoriteit:</h3>
                      <ul className="list-none space-y-1 ml-0">
                        <li><strong>Adres:</strong> Drukpersstraat 35, 1000 Brussel</li>
                        <li><strong>E-mail:</strong> contact@apd-gba.be</li>
                        <li><strong>Tel:</strong> +32 2 274 48 00</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Welke gegevens verwerken wij?</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">2.1 Via contactformulieren:</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Naam en voornaam</li>
                        <li>E-mailadres</li>
                        <li>Telefoonnummer (indien opgegeven)</li>
                        <li>Berichttekst</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">2.2 Via website analytics (Google Analytics):</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>IP-adres (geanonimiseerd)</li>
                        <li>Browsertype en -versie</li>
                        <li>Gebruikte apparaat en besturingssysteem</li>
                        <li>Bezochte pagina's en tijdstip van bezoek</li>
                        <li>Verwijzende websites</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">2.3 Via cookies:</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Analytische cookies voor websitestatistieken</li>
                        <li>Technisch noodzakelijke cookies voor websitefunctionaliteit</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Waarom verwerken wij uw gegevens?</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>3.1 Contactformulier (rechtsgrond: gerechtvaardigd belang art. 6(1)(f) AVG):</strong> Beantwoorden van uw vragen, verlenen van gevraagde informatie, klantenservice en communicatie.</li>
                    <li><strong>3.2 Google Analytics (rechtsgrond: toestemming art. 6(1)(a) AVG):</strong> Websitegebruik analyseren, websiteprestaties verbeteren, gebruikerservaring optimaliseren.</li>
                    <li><strong>3.3 Noodzakelijke cookies (rechtsgrond: gerechtvaardigd belang art. 6(1)(f) AVG):</strong> Correct functioneren van de website, beveiligingsmaatregelen, sessiemanagement.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Hoe lang bewaren wij uw gegevens?</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>4.1</strong> Contactformuliergegevens: 12 maanden na laatste contact, tenzij langer bewaren noodzakelijk is voor contractuitvoering of wettelijke verplichtingen.</li>
                    <li><strong>4.2</strong> Google Analytics gegevens: Maximaal 14 maanden (conform onze configuratie).</li>
                    <li><strong>4.3</strong> Cookiegegevens: Conform de instellingen per cookietype.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Met wie delen wij uw gegevens?</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>5.1 Google Analytics:</strong> Gegevens worden verwerkt door Google LLC (Verenigde Staten) gebaseerd op EU-VS Data Privacy Framework adequaatheidsbesluiting. IP-adressen worden geanonimiseerd voor overdracht.</li>
                    <li><strong>5.2 Hosting en technische dienstverlening:</strong> Gegevens kunnen worden verwerkt door onze hostingprovider binnen de EU.</li>
                    <li><strong>5.3</strong> Geen verdere doorgifte van uw gegevens aan derden zonder uw uitdrukkelijke toestemming.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Uw rechten onder de AVG</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>6.1 Recht op inzage (art. 15 AVG):</strong> U kunt opvragen welke persoonsgegevens wij van u verwerken.</li>
                    <li><strong>6.2 Recht op rectificatie (art. 16 AVG):</strong> U kunt onjuiste of onvolledige gegevens laten corrigeren.</li>
                    <li><strong>6.3 Recht op wissing (art. 17 AVG):</strong> U kunt verwijdering van uw gegevens verzoeken wanneer deze niet langer nodig zijn.</li>
                    <li><strong>6.4 Recht op beperking (art. 18 AVG):</strong> U kunt verzoeken om beperking van de verwerking onder bepaalde omstandigheden.</li>
                    <li><strong>6.5 Recht op bezwaar (art. 21 AVG):</strong> U kunt bezwaar maken tegen verwerking gebaseerd op gerechtvaardigd belang.</li>
                    <li><strong>6.6 Recht op gegevensoverdraagbaarheid (art. 20 AVG):</strong> U kunt een kopie van uw gegevens in gestructureerd formaat opvragen.</li>
                    <li><strong>6.7 Recht op intrekking toestemming:</strong> U kunt gegeven toestemming voor cookies/analytics te allen tijde intrekken.</li>
                  </ul>
                  <p className="mt-4"><strong>Uitoefening van rechten:</strong> Stuur een e-mail naar info@tinapiano.be. Wij reageren binnen 30 dagen.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies en tracking</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">7.1 Cookiecategorieën:</h3>
                      <div className="space-y-2">
                        <div>
                          <strong>Strikt noodzakelijke cookies (geen toestemming vereist):</strong>
                          <ul className="list-disc list-inside ml-2">
                            <li>Sessiecookies voor websitefunctionaliteit</li>
                            <li>Beveiligingscookies</li>
                          </ul>
                        </div>
                        <div>
                          <strong>Analytische cookies (toestemming vereist):</strong>
                          <ul className="list-disc list-inside ml-2">
                            <li>_ga: Gebruikt door Google Analytics voor gebruikersidentificatie (2 jaar)</li>
                            <li>_ga_[container-id]: Gebruikt voor sessie- en campagnemetingen (2 jaar)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">7.2 Toestemming:</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Via onze cookiebanner kunt u uw voorkeuren instellen</li>
                        <li>U kunt uw toestemming te allen tijde wijzigen via de cookievoorkeuren onderaan elke pagina</li>
                        <li>Intrekking van toestemming heeft geen invloed op de rechtmatigheid van eerdere verwerking</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Beveiliging</h2>
                  <p className="mb-3">Wij treffen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen ongeautoriseerde toegang, wijziging, verlies of vernietiging:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>SSL-versleuteling voor gegevensoverdracht</li>
                    <li>Beveiligde hosting binnen de EU</li>
                    <li>Regelmatige beveiligingsupdates</li>
                    <li>Beperkte toegang op basis van functievereisten</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Gegevenslek</h2>
                  <p className="leading-relaxed">
                    In geval van een datalek dat risico's voor uw rechten en vrijheden meebrengt, informeren wij u hierover binnen 72 uur na ontdekking conform artikel 34 AVG.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact en klachten</h2>
                  <p className="mb-3"><strong>Vragen over dit privacybeleid:</strong> info@tinapiano.be</p>
                  <p className="mb-3"><strong>Klacht indienen bij toezichthouder:</strong></p>
                  <ul className="list-none space-y-1 ml-0">
                    <li><strong>Belgische Gegevensbeschermingsautoriteit (APD/GBA)</strong></li>
                    <li>Website: https://www.gegevensbeschermingsautoriteit.be</li>
                    <li>E-mail: contact@apd-gba.be</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Wijzigingen privacybeleid</h2>
                  <p className="leading-relaxed">
                    Wij kunnen dit privacybeleid wijzigen. Belangrijke wijzigingen communiceren wij via onze website. Controleer daarom regelmatig deze pagina.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Minderjarigen</h2>
                  <p className="leading-relaxed">
                    Onze website is niet specifiek gericht op personen onder de 16 jaar. Wij verwerken niet bewust persoonsgegevens van minderjarigen zonder toestemming van ouders of verzorgers.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg text-sm text-gray-600 border-l-4 border-[#8fc0e5]">
                  <p><strong>Laatste wijziging:</strong> Januari 2025</p>
                  <p><strong>Versie:</strong> 1.0</p>
                  <p className="mt-3 text-xs">Deze documenten zijn volledig gebaseerd op de huidige Belgische en EU-wetgeving voor 2025, inclusief GDPR-compliance, cookie-wetgeving, en consumentenbeschermingsrecht.</p>
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