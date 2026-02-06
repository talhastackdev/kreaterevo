import { useState } from 'react';
import { Mail, MapPin, Phone, Calendar, Clock, Check } from 'lucide-react';
import SEO from '@/components/SEO';
import { ModuleCard } from '@/components/ModuleCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language, t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success(language === 'de' 
      ? 'Nachricht gesendet! Wir melden uns innerhalb eines Werktags.' 
      : 'Message sent! We will get back to you within one business day.'
    );
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const expectItems = [
    t('contact.expect.1'),
    t('contact.expect.2'),
    t('contact.expect.3'),
    t('contact.expect.4'),
  ];

  return (
    <>
      <SEO
        titleKey="seo.contact.title"
        descKey="seo.contact.desc"
        canonicalPath="/contact"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">{t('nav.contact')}</span>
            <h1 className="font-display font-bold text-display-1 mb-6">
              {t('contact.hero.title')}
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              {t('contact.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32 bg-charcoal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display font-semibold text-2xl mb-8">
                {t('contact.info.title')}
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{t('contact.info.email')}</h3>
                    <a 
                      href="mailto:info@kreaterevo.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@kreaterevo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{t('contact.info.phone')}</h3>
                    <a 
                      href="tel:+4915906702779" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +49 1590 6702779
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{t('contact.info.location')}</h3>
                    <p className="text-muted-foreground">
                      Residenzstraße 133A<br />
                      13409 Berlin, Germany<br />
                      {language === 'de' ? 'EU-weite Kunden' : 'Serving clients across the EU'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{t('contact.info.hours')}</h3>
                    <p className="text-muted-foreground">
                      {t('contact.info.hoursValue')}<br />
                      {t('contact.info.hoursTime')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Benefits */}
              <div className="space-y-4">
                <h3 className="font-medium mb-4">{t('contact.expect.title')}</h3>
                {expectItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <ModuleCard className="p-8" showPort={false}>
              <h2 className="font-display font-semibold text-xl mb-6">
                {t('contact.form.title')}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder={language === 'de' ? 'Ihr Name' : 'Your name'}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    {t('contact.form.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder={language === 'de' ? 'Ihr Unternehmen' : 'Your company'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                    placeholder={language === 'de' ? 'Erzählen Sie uns von Ihrem Projekt...' : 'Tell us about your project...'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting 
                    ? (language === 'de' ? 'Wird gesendet...' : 'Sending...') 
                    : t('contact.form.submit')
                  }
                </button>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    {t('contact.form.schedule')}
                  </p>
                  <button
                    type="button"
                    onClick={() => toast.info(language === 'de' ? 'Calendly-Integration demnächst!' : 'Calendly integration coming soon!')}
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    <Calendar className="w-4 h-4" />
                    {t('contact.form.scheduleLink')}
                  </button>
                </div>
              </form>
            </ModuleCard>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-display-3 mb-4">
              {t('contact.alt.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ModuleCard className="p-8 text-center" showPort={false}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{t('contact.alt.call.title')}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t('contact.alt.call.desc')}</p>
              <button 
                onClick={() => toast.info(language === 'de' ? 'Calendly-Integration demnächst!' : 'Calendly integration coming soon!')}
                className="text-primary text-sm font-medium hover:underline"
              >
                {t('contact.alt.call.button')}
              </button>
            </ModuleCard>

            <ModuleCard className="p-8 text-center" showPort={false}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{t('contact.alt.email.title')}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t('contact.alt.email.desc')}</p>
              <a 
                href="mailto:info@kreaterevo.com"
                className="text-primary text-sm font-medium hover:underline"
              >
                info@kreaterevo.com
              </a>
            </ModuleCard>

            <ModuleCard className="p-8 text-center" showPort={false}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{t('contact.alt.phone.title')}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t('contact.alt.phone.desc')}</p>
              <a 
                href="tel:+4915906702779"
                className="text-primary text-sm font-medium hover:underline"
              >
                +49 1590 6702779
              </a>
            </ModuleCard>
          </div>
        </div>
      </section>
    </>
  );
}
