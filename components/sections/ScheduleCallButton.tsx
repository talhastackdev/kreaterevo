'use client';

import { toast } from 'sonner';
import type { Language } from '@/lib/dictionaries';

export default function ScheduleCallButton({ lang, label }: { lang: Language; label: string }) {
  return (
    <button
      onClick={() =>
        toast.info(
          lang === 'de' ? 'Calendly-Integration demnächst!' : 'Calendly integration coming soon!'
        )
      }
      className="text-primary text-sm font-medium hover:underline"
    >
      {label}
    </button>
  );
}
