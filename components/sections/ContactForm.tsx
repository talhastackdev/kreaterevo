'use client';

import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { ModuleCard } from '@/components/ModuleCard';
import { toast } from 'sonner';
import type { Language } from '@/lib/dictionaries';

interface ContactFormLabels {
  title?: string;
  name: string;
  email: string;
  company: string;
  message: string;
  submit: string;
  schedule: string;
  scheduleLink: string;
}

interface ContactFormProps {
  lang: Language;
  labels: ContactFormLabels;
  scheduleWithIcon?: boolean;
}

export default function ContactForm({ lang, labels, scheduleWithIcon = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success(
      lang === 'de'
        ? 'Nachricht gesendet! Wir melden uns innerhalb eines Werktags.'
        : 'Message sent! We will get back to you within one business day.'
    );
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <ModuleCard className="p-8" showPort={false}>
      {labels.title && (
        <h2 className="font-display font-semibold text-xl mb-6">{labels.title}</h2>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              {labels.name} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              placeholder={lang === 'de' ? 'Ihr Name' : 'Your name'}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              {labels.email} *
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
            {labels.company}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
            placeholder={lang === 'de' ? 'Ihr Unternehmen' : 'Your company'}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            {labels.message} *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
            placeholder={lang === 'de' ? 'Erzählen Sie uns von Ihrem Projekt...' : 'Tell us about your project...'}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (lang === 'de' ? 'Wird gesendet...' : 'Sending...') : labels.submit}
        </button>

        {scheduleWithIcon ? (
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-3">{labels.schedule}</p>
            <button
              type="button"
              onClick={() =>
                toast.info(
                  lang === 'de' ? 'Calendly-Integration demnächst!' : 'Calendly integration coming soon!'
                )
              }
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Calendar className="w-4 h-4" />
              {labels.scheduleLink}
            </button>
          </div>
        ) : (
          <p className="text-center text-sm text-muted-foreground">
            {labels.schedule}{' '}
            <button
              type="button"
              onClick={() =>
                toast.info(
                  lang === 'de' ? 'Calendly-Integration demnächst!' : 'Calendly integration coming soon!'
                )
              }
              className="text-primary hover:underline"
            >
              {labels.scheduleLink}
            </button>
          </p>
        )}
      </form>
    </ModuleCard>
  );
}
