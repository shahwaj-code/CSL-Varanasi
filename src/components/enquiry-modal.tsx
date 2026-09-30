import { createContext, useContext, useState, type ReactNode } from "react";
import { X } from "lucide-react";
import { EnquiryForm } from "./enquiry-form";

type Ctx = { open: () => void; close: () => void; isOpen: boolean };
const EnquiryCtx = createContext<Ctx | null>(null);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <EnquiryCtx.Provider value={{ open: () => setIsOpen(true), close: () => setIsOpen(false), isOpen }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md animate-fade-in"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative w-full max-w-md h-full bg-background shadow-2xl overflow-y-auto overscroll-contain animate-slide-in-right border-l-4 border-primary">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 rounded-full bg-primary text-primary-foreground p-2 hover:scale-110 transition"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="p-6 pt-14 pb-16">
              <EnquiryForm compact />
            </div>

          </div>
        </div>
      )}
    </EnquiryCtx.Provider>
  );
}

export function useEnquiry() {
  const ctx = useContext(EnquiryCtx);
  if (!ctx) throw new Error("useEnquiry must be used inside EnquiryProvider");
  return ctx;
}
