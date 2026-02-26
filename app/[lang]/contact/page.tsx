import type { Metadata } from 'next';
import { Mail, MapPin, Phone, Calendar, Clock, Check } from 'lucide-react';
import { getDictionary, SUPPORTED_LANGUAGES, type Language } from '@/lib/dictionaries';
import { ModuleCard } from '@/components/ModuleCard';
import ContactForm from '@/components/sections/ContactForm';
import ScheduleCallButton from '@/components/sections/ScheduleCallButton';

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang as Language);
  const siteUrl = 'https://kreaterevo.com';

  return {
    title: dict['seo.contact.title'],
    description: dict['seo.contact.desc'],
    alternates: {
      canonical: `${siteUrl}/${lang}/contact`,
      languages: {
        en: `${siteUrl}/en/contact`,
        de: `${siteUrl}/de/contact`,
        'x-default': `${siteUrl}/en/contact`,
      },
    },
    openGraph: {
      type: 'website',
      locale: lang === 'de' ? 'de_DE' : 'en_US',
      url: `${siteUrl}/${lang}/contact`,
      siteName: 'KreateRevo',
      title: `${dict['seo.contact.title']} | KreateRevo`,
      description: dict['seo.contact.desc'],
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang as Language);

  const expectItems = [
    dict['contact.expect.1'],
    dict['contact.expect.2'],
    dict['contact.expect.3'],
    dict['contact.expect.4'],
  ];

  const formLabels = {
    title: dict['contact.form.title'],
    name: dict['contact.form.name'],
    email: dict['contact.form.email'],
    company: dict['contact.form.company'],
    message: dict['contact.form.message'],
    submit: dict['contact.form.submit'],
    schedule: dict['contact.form.schedule'],
    scheduleLink: dict['contact.form.scheduleLink'],
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">{dict['nav.contact']}</span>
            <h1 className="font-display font-bold text-display-1 mb-6">{dict['contact.hero.title']}</h1>
            <p className="text-lg lg:text-xl text-muted-foreground">{dict['contact.hero.subtitle']}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display font-semibold text-2xl mb-8">{dict['contact.info.title']}</h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{dict['contact.info.email']}</h3>
                    <a href="mailto:info@kreaterevo.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@kreaterevo.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{dict['contact.info.phone']}</h3>
                    <a href="tel:+4915906702779" className="text-muted-foreground hover:text-primary transition-colors">
                      +49 1590 6702779
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{dict['contact.info.location']}</h3>
                    <p className="text-muted-foreground">
                      Residenzstraße 133A<br />
                      13409 Berlin, Germany<br />
                      {lang === 'de' ? 'EU-weite Kunden' : 'Serving clients across the EU'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{dict['contact.info.hours']}</h3>
                    <p className="text-muted-foreground">
                      {dict['contact.info.hoursValue']}<br />
                      {dict['contact.info.hoursTime']}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-medium mb-4">{dict['contact.expect.title']}</h3>
                {expectItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form (client component) */}
            <ContactForm lang={lang as Language} labels={formLabels} scheduleWithIcon />
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-display-3 mb-4">{dict['contact.alt.title']}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <ModuleCard className="p-8 text-center" showPort={false}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{dict['contact.alt.call.title']}</h3>
              <p className="text-sm text-muted-foreground mb-4">{dict['contact.alt.call.desc']}</p>
              <ScheduleCallButton lang={lang as Language} label={dict['contact.alt.call.button']} />
            </ModuleCard>
            <ModuleCard className="p-8 text-center" showPort={false}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{dict['contact.alt.email.title']}</h3>
              <p className="text-sm text-muted-foreground mb-4">{dict['contact.alt.email.desc']}</p>
              <a href="mailto:info@kreaterevo.com" className="text-primary text-sm font-medium hover:underline">
                info@kreaterevo.com
              </a>
            </ModuleCard>
            <ModuleCard className="p-8 text-center" showPort={false}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{dict['contact.alt.phone.title']}</h3>
              <p className="text-sm text-muted-foreground mb-4">{dict['contact.alt.phone.desc']}</p>
              <a href="tel:+4915906702779" className="text-primary text-sm font-medium hover:underline">
                +49 1590 6702779
              </a>
            </ModuleCard>
          </div>
        </div>
      </section>
    </>
  );
}
