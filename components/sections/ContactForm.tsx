'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { usePathname } from 'next/navigation';
import { Calendar } from 'lucide-react';
import { ModuleCard } from '@/components/ModuleCard';
import { toast } from 'sonner';
import type { Language } from '@/lib/dictionaries';
import { submitContactForm } from '@/services/contactService';

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

const buildSchema = (lang: Language) =>
  z.object({
    name: z
      .string()
      .min(2, lang === 'de' ? 'Name muss mindestens 2 Zeichen lang sein.' : 'Name must be at least 2 characters.'),
    email: z
      .string()
      .email(lang === 'de' ? 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' : 'Please enter a valid email address.'),
    company: z.string().optional(),
    message: z
      .string()
      .min(10, lang === 'de' ? 'Nachricht muss mindestens 10 Zeichen lang sein.' : 'Message must be at least 10 characters.'),
  });

type FormData = z.infer<ReturnType<typeof buildSchema>>;

export default function ContactForm({ lang, labels, scheduleWithIcon = false }: ContactFormProps) {
  const pathname = usePathname();
  const schema = buildSchema(lang);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const result = await submitContactForm({
        ...data,
        source: pathname || undefined,
      });

      if (!result.success) throw new Error(result.message);

      toast.success(
        lang === 'de'
          ? 'Nachricht gesendet! Wir melden uns innerhalb eines Werktags.'
          : 'Message sent! We will get back to you within one business day.'
      );
      reset();
    } catch {
      toast.error(
        lang === 'de'
          ? 'Fehler beim Senden. Bitte versuchen Sie es erneut.'
          : 'Failed to send message. Please try again.'
      );
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl bg-secondary border outline-none transition-colors ${
      hasError
        ? 'border-destructive focus:border-destructive focus:ring-1 focus:ring-destructive'
        : 'border-border focus:border-primary focus:ring-1 focus:ring-primary'
    }`;

  return (
    <ModuleCard className="p-8" showPort={false}>
      {labels.title && (
        <h2 className="font-display font-semibold text-xl mb-6">{labels.title}</h2>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              {labels.name} *
            </label>
            <input
              type="text"
              id="name"
              placeholder={lang === 'de' ? 'Ihr Name' : 'Your name'}
              className={inputClass(!!errors.name)}
              {...register('name')}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-destructive">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              {labels.email} *
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@company.com"
              className={inputClass(!!errors.email)}
              {...register('email')}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-destructive">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            {labels.company}
          </label>
          <input
            type="text"
            id="company"
            placeholder={lang === 'de' ? 'Ihr Unternehmen' : 'Your company'}
            className={inputClass(false)}
            {...register('company')}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            {labels.message} *
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder={lang === 'de' ? 'Erzählen Sie uns von Ihrem Projekt...' : 'Tell us about your project...'}
            className={`${inputClass(!!errors.message)} resize-none`}
            {...register('message')}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-destructive">{errors.message.message}</p>
          )}
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
