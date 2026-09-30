import { Phone } from "lucide-react";

export function FloatingContacts() {
  return (
    <div className="fixed right-3 bottom-3 z-40 flex flex-col gap-2.5">
      <a
        href="https://wa.me/919999380187"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="group relative h-10 w-10 rounded-full bg-[#25D366] text-white grid place-items-center shadow-lg hover:scale-110 transition"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <svg viewBox="0 0 24 24" className="h-5 w-5 relative" fill="currentColor" aria-hidden>
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .18 5.32.18 11.87c0 2.09.55 4.13 1.6 5.93L0 24l6.35-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.24-6.15-3.4-8.44zM12.05 21.3h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.22-3.77.99 1.01-3.67-.24-.38a9.82 9.82 0 0 1-1.5-5.19c0-5.44 4.43-9.86 9.87-9.86 2.63 0 5.11 1.03 6.97 2.89a9.79 9.79 0 0 1 2.89 6.98c0 5.44-4.43 9.83-9.85 9.83zm5.4-7.37c-.29-.15-1.75-.87-2.02-.97-.27-.1-.47-.15-.67.15-.2.29-.77.96-.94 1.16-.17.2-.35.22-.64.07-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.56-.34z"/>
        </svg>
      </a>
      <a
        href="tel:+919999380187"
        aria-label="Call"
        className="group relative h-10 w-10 rounded-full gradient-brand text-primary-foreground grid place-items-center shadow-lg hover:scale-110 transition"
      >
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
        <Phone className="h-4 w-4 relative" />
      </a>
    </div>
  );
}
