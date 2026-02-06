import SEO from '@/components/SEO';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Imprint() {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  return (
    <>
      <SEO
        titleKey="seo.imprint.title"
        descKey="seo.home.desc"
        canonicalPath="/imprint"
        noindex
      />

      <div className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-label mb-4 block">{isGerman ? 'Rechtliches' : 'Legal'}</span>
            <h1 className="font-display font-bold text-display-1 mb-6">
              {isGerman ? 'Impressum' : 'Imprint'}
            </h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="font-display font-semibold text-2xl mb-4">{isGerman ? 'Angaben gemäß § 5 TMG' : 'Information according to § 5 TMG'}</h2>
              <div className="bg-card border border-border/30 rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">KreateRevo UG (haftungsbeschränkt)</strong><br />
                  Residenzstraße 133A<br />
                  13409 Berlin<br />
                  Germany
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="font-display font-semibold text-2xl mb-4">{isGerman ? 'Vertreten durch' : 'Represented by'}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {isGerman ? 'Geschäftsführer:' : 'Managing Director:'} Hafiz Abdul Rahman
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display font-semibold text-2xl mb-4">{isGerman ? 'Kontakt' : 'Contact'}</h2>
              <div className="bg-card border border-border/30 rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed">
                  {isGerman ? 'Telefon:' : 'Phone:'} +49 1590 6702779<br />
                  {isGerman ? 'E-Mail:' : 'Email:'} info@kreaterevo.com<br />
                  {isGerman ? 'Website:' : 'Website:'} www.kreaterevo.com
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="font-display font-semibold text-2xl mb-4">{isGerman ? 'Registereintrag' : 'Commercial Register'}</h2>
              <div className="bg-card border border-border/30 rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">{isGerman ? 'Registergericht:' : 'Register Court:'}</strong> Amtsgericht Berlin (Charlottenburg)<br />
                  <strong className="text-foreground">{isGerman ? 'Handelsregisternummer:' : 'Commercial Register Number:'}</strong> HRB 283656
                </p>
              </div>
              {/* <p className="text-muted-foreground leading-relaxed mt-4 italic">
                {isGerman 
                  ? 'Hinweis: Die Gesellschaft befindet sich derzeit in Gründung. Die Eintragung in das Handelsregister ist erfolgt.'
                  : 'Note: The company is currently in formation. Registration in the commercial register has been completed.'}
              </p> */}
            </section>

            {/* <section className="mb-10">
              <h2 className="font-display font-semibold text-2xl mb-4">{isGerman ? 'Umsatzsteuer-ID' : 'VAT ID'}</h2>
              <p className="text-muted-foreground leading-relaxed">
                <em>{isGerman ? 'Wird nach Eintragung im Handelsregister beantragt.' : 'Will be applied for after commercial registration.'}</em>
              </p>
            </section> */}

            <section className="mb-10">
              <h2 className="font-display font-semibold text-2xl mb-4">{isGerman ? 'Verantwortlich für den Inhalt' : 'Responsible for Content'}</h2>
              <p className="text-muted-foreground leading-relaxed">
                Hafiz Abdul Rahman<br />
                Residenzstraße 133A<br />
                13409 Berlin
              </p>
            </section>

            {isGerman && (
              <>
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
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="font-display font-semibold text-2xl mb-4">Haftung für Inhalte</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="font-display font-semibold text-2xl mb-4">Urheberrecht</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors.
                  </p>
                </section>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
