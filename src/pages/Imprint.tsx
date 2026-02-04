import SEO from '@/components/SEO';

export default function Imprint() {
  return (
    <>
      <SEO
        title="Imprint / Impressum"
        description="Legal notice and imprint for KreateRevo. Company information in accordance with German law."
        canonical="/imprint"
        noindex
      />

      <div className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-label mb-4 block">Legal</span>
            <h1 className="font-display font-bold text-display-1 mb-6">
              Imprint / Impressum
            </h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-card border border-border/30 rounded-2xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Hinweis / Notice:</strong> Die KreateRevo UG (haftungsbeschränkt) 
                befindet sich derzeit in Gründung. Die Eintragung ins Handelsregister wurde beantragt. / 
                KreateRevo UG (haftungsbeschränkt) is currently in formation. Registration has been applied for.
              </p>
            </div>

            <section className="mb-10">
              <h2 className="font-display font-semibold text-2xl mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="bg-card border border-border/30 rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">KreateRevo UG (haftungsbeschränkt) i. G.</strong><br />
                  Residenzstraße 133A<br />
                  13409 Berlin<br />
                  Germany
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="font-display font-semibold text-2xl mb-4">Vertreten durch</h2>
              <p className="text-muted-foreground leading-relaxed">
                Geschäftsführer: Hafiz Abdul Rahman
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display font-semibold text-2xl mb-4">Kontakt</h2>
              <div className="bg-card border border-border/30 rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed">
                  Telefon: +49 1590 6702779<br />
                  E-Mail: info@kreaterevo.com<br />
                  Website: www.kreaterevo.com
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="font-display font-semibold text-2xl mb-4">Registereintrag</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">In Gründung / In Formation</strong><br /><br />
                Die Eintragung ins Handelsregister wurde beantragt.<br />
                Registergericht: Amtsgericht Berlin-Charlottenburg<br />
                <em>Registration has been applied for at the local court Berlin-Charlottenburg.</em>
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display font-semibold text-2xl mb-4">Umsatzsteuer-ID</h2>
              <p className="text-muted-foreground leading-relaxed">
                <em>Wird nach Eintragung im Handelsregister beantragt.</em><br />
                <em>Will be applied for after commercial registration.</em>
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display font-semibold text-2xl mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p className="text-muted-foreground leading-relaxed">
                Hafiz Abdul Rahman<br />
                Residenzstraße 133A<br />
                13409 Berlin
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display font-semibold text-2xl mb-4">Streitschlichtung</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline ml-1"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Unsere E-Mail-Adresse finden Sie oben im Impressum.<br /><br />
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display font-semibold text-2xl mb-4">Haftung für Inhalte</h2>
              <p className="text-muted-foreground leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.<br /><br />
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
                der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display font-semibold text-2xl mb-4">Haftung für Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. 
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.<br /><br />
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte 
                einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
                Links umgehend entfernen.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display font-semibold text-2xl mb-4">Urheberrecht</h2>
              <p className="text-muted-foreground leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem 
                deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung 
                außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen 
                Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht 
                kommerziellen Gebrauch gestattet.<br /><br />
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem 
                auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. 
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display font-semibold text-2xl mb-4">English Translation</h2>
              <div className="bg-card border border-border/30 rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Information according to § 5 TMG</strong><br />
                  KreateRevo UG (haftungsbeschränkt) i. G.<br />
                  Residenzstraße 133A<br />
                  13409 Berlin<br />
                  Germany
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Represented by</strong><br />
                  Managing Director: Hafiz Abdul Rahman
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Contact</strong><br />
                  Phone: +49 1590 6702779<br />
                  Email: info@kreaterevo.com<br />
                  Website: www.kreaterevo.com
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Commercial Register</strong><br />
                  <em>In Formation</em><br />
                  Registration has been applied for at the local court Berlin-Charlottenburg.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">VAT ID</strong><br />
                  <em>Will be applied for after commercial registration.</em>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
