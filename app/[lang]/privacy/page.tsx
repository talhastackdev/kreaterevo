import type { Metadata } from 'next';
import { SUPPORTED_LANGUAGES, type Language } from '@/lib/dictionaries';

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isGerman = lang === 'de';

  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="section-label mb-4 block">{isGerman ? 'Rechtliches' : 'Legal'}</span>
          <h1 className="font-display font-bold text-display-1 mb-6">
            {isGerman ? 'Datenschutzerklärung' : 'Privacy Policy'}
          </h1>
          <p className="text-muted-foreground">
            {isGerman ? 'Zuletzt aktualisiert: ' : 'Last updated: '}
            {new Date().toLocaleDateString(isGerman ? 'de-DE' : 'en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-card border border-border/30 rounded-2xl p-8 mb-8">
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">{isGerman ? 'Hinweis:' : 'Notice:'}</strong>{' '}
              {isGerman
                ? 'Dies ist eine Vorlage für die Datenschutzerklärung. Als in Deutschland ansässiges Unternehmen ist KreateRevo verpflichtet, die DSGVO einzuhalten. Bitte konsultieren Sie einen qualifizierten Rechtsanwalt, um sicherzustellen, dass diese Datenschutzerklärung Ihren spezifischen Anforderungen entspricht und alle geltenden Datenschutzvorschriften erfüllt.'
                : 'This is a placeholder privacy policy template. As a Germany-based company, KreateRevo is committed to GDPR compliance. Please consult with a qualified legal professional to ensure this privacy policy meets your specific requirements and complies with all applicable data protection regulations.'}
            </p>
          </div>

          <section className="mb-10">
            <h2 className="font-display font-semibold text-2xl mb-4">
              {isGerman ? '1. Einleitung' : '1. Introduction'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isGerman
                ? 'KreateRevo UG (haftungsbeschränkt) i.G. ("wir", "uns" oder "unser") verpflichtet sich, Ihre Privatsphäre zu schützen. Diese Datenschutzerklärung erklärt, wie wir Informationen sammeln, verwenden, offenlegen und schützen, wenn Sie unsere Website besuchen oder unsere Dienstleistungen nutzen. Bitte lesen Sie diese Datenschutzerklärung sorgfältig durch. Wenn Sie mit den Bedingungen dieser Datenschutzerklärung nicht einverstanden sind, greifen Sie bitte nicht auf die Website zu.'
                : 'KreateRevo UG (haftungsbeschränkt) i.G. ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display font-semibold text-2xl mb-4">
              {isGerman ? '2. Informationen, Die Wir Sammeln' : '2. Information We Collect'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isGerman
                ? 'Wir können Informationen über Sie auf verschiedene Weise sammeln. Die Informationen, die wir über die Website sammeln können, umfassen:'
                : 'We may collect information about you in a variety of ways. The information we may collect via the website includes:'}
            </p>
            <h3 className="font-medium text-lg mb-3">
              {isGerman ? '2.1 Persönliche Daten' : '2.1 Personal Data'}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isGerman
                ? 'Persönlich identifizierbare Informationen wie Ihr Name, Ihre E-Mail-Adresse, Firmenname und Telefonnummer, die Sie uns freiwillig zur Verfügung stellen, wenn Sie sich auf der Website registrieren oder wenn Sie sich für verschiedene Aktivitäten im Zusammenhang mit der Website entscheiden.'
                : 'Personally identifiable information, such as your name, email address, company name, and telephone number, that you voluntarily give to us when you register with the website or when you choose to participate in various activities related to the website.'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display font-semibold text-2xl mb-4">
              {isGerman ? '3. DSGVO-Konformität (für EU-Bürger)' : '3. GDPR Compliance (for EU Residents)'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isGerman
                ? 'Wenn Sie in der Europäischen Union ansässig sind, haben Sie nach der Datenschutz-Grundverordnung (DSGVO) bestimmte Datenschutzrechte. Diese Rechte umfassen:'
                : 'If you are a resident of the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR). These rights include:'}
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>
                <strong>{isGerman ? 'Recht auf Auskunft:' : 'Right to Access:'}</strong>{' '}
                {isGerman
                  ? 'Sie haben das Recht, Kopien Ihrer persönlichen Daten anzufordern.'
                  : 'You have the right to request copies of your personal data.'}
              </li>
              <li>
                <strong>{isGerman ? 'Recht auf Berichtigung:' : 'Right to Rectification:'}</strong>{' '}
                {isGerman
                  ? 'Sie haben das Recht, die Berichtigung von Informationen zu verlangen, die Sie für ungenau halten.'
                  : 'You have the right to request that we correct any information you believe is inaccurate.'}
              </li>
              <li>
                <strong>{isGerman ? 'Recht auf Löschung:' : 'Right to Erasure:'}</strong>{' '}
                {isGerman
                  ? 'Sie haben das Recht, die Löschung Ihrer persönlichen Daten zu verlangen.'
                  : 'You have the right to request that we erase your personal data.'}
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display font-semibold text-2xl mb-4">
              {isGerman ? '8. Kontaktieren Sie Uns' : '8. Contact Us'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isGerman
                ? 'Wenn Sie Fragen oder Anmerkungen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte unter:'
                : 'If you have questions or comments about this Privacy Policy, please contact us at:'}
            </p>
            <div className="bg-card border border-border/30 rounded-xl p-6">
              <p className="text-muted-foreground">
                <strong className="text-foreground">KreateRevo UG (haftungsbeschränkt) i.G.</strong>
                <br />
                {isGerman ? 'E-Mail:' : 'Email:'} info@kreaterevo.com
                <br />
                {isGerman ? 'Adresse:' : 'Address:'} Residenzstraße 133A, 13409 Berlin, Germany
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
