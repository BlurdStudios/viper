'use client';

import { X, Sparkles } from 'lucide-react';

interface DemoDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function DemoDialog({ open, onClose }: DemoDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Dialog */}
      <div className="relative bg-bg-secondary border border-white/10 rounded-2xl p-8 max-w-md w-full flex flex-col items-center gap-6 text-center animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="w-14 h-14 rounded-2xl bg-accent-gold/10 border border-accent-gold/25 flex items-center justify-center">
          <Sparkles size={24} className="text-accent-gold" />
        </div>

        <div className="flex flex-col gap-2">
          <span className="bg-accent-gold/20 text-accent-gold text-[10px] font-black tracking-[3px] px-3 py-1 rounded-md uppercase inline-block w-fit mx-auto">
            DEMO MODE
          </span>
          <h3 className="font-display text-lg font-bold text-text-primary tracking-wide">
            Coming Soon
          </h3>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
          The full customizer is currently under development. We are working on
          <span className="text-accent-gold font-bold"> best-in-class designs </span>
          and an immersive customization experience.
        </p>

        <p className="text-text-muted text-xs">
          Want to order now? Contact us directly on WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
          <a
            href="https://wa.me/919885039653"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 w-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] text-xs font-bold tracking-wider py-3 rounded-xl transition-all text-center"
          >
            WHATSAPP US
          </a>
          <button
            onClick={onClose}
            className="flex-1 w-full bg-accent-gold hover:bg-accent-gold-hover text-black text-xs font-bold tracking-wider py-3 rounded-xl transition-all cursor-pointer"
          >
            GOT IT
          </button>
        </div>
      </div>
    </div>
  );
}
