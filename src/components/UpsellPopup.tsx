import React from 'react';
import { X, CheckCircle2, Gift } from 'lucide-react';

interface UpsellPopupProps {
  onClose: () => void;
  onAccept: () => void;
  onDecline: () => void;
}

export default function UpsellPopup({ onClose, onAccept, onDecline }: UpsellPopupProps) {
  const popupItems = [
    { text: "LIBRITO DE ORACIONES CATÓLICAS + BONOS", isBonus: false },
    { text: "LIBRITO DE PRIMERA COMUNIÓN (MATERIAL EXTRA)", isBonus: false },
    { text: "LIBRITO PARA CONFIRMACIÓN (MATERIAL EXTRA)", isBonus: false },
    { text: "La Santa Misa Explicada (BONO)", isBonus: true },
    { text: "Los 10 Mandamientos P/Niños (BONO)", isBonus: true },
    { text: "¿Quién es Nuestra Señora? (BONO)", isBonus: true },
    { text: "La Historia de la Virgen María (BONO)", isBonus: true },
    { text: "Licencia para impresión", isBonus: false },
    { text: "Acceso Vitalicio y Actualizaciones Gratuitas", isBonus: false },
    { text: "PDFs listos para impresión A4 de alta definición", isBonus: false },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] p-3.5 sm:p-6 max-w-xs sm:max-w-md w-full relative shadow-2xl border-2 border-pink-100 animate-in zoom-in duration-200 overflow-hidden my-auto">
        
        {/* Background decorative accent */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-pink-100/50 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-amber-100/50 rounded-full blur-2xl pointer-events-none" />

        <button 
          onClick={onClose}
          className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 text-stone-400 hover:text-stone-600 bg-stone-100 hover:bg-stone-200 p-1 sm:p-1.5 rounded-full transition-colors cursor-pointer z-20"
          aria-label="Cerrar"
        >
          <X className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
        </button>
        
        <div className="text-center relative z-10">
          
          {/* Headline */}
          <h2 className="text-lg sm:text-2xl font-black font-heading text-stone-900 leading-tight mb-0.5 sm:mb-1">
            ¡Espera! No pierdas el <span className="block text-[#e5007d]">Material Completo</span>
          </h2>
          
          <p className="text-stone-600 text-[10px] sm:text-xs font-medium mb-2 sm:mb-2.5 leading-tight">
            ¡Liberamos un descuento exclusivo para que asegures el material completo con todos los bonos incluidos!
          </p>

          {/* Key included benefits list - All items fully displayed without scroll */}
          <div className="bg-stone-50/90 rounded-lg sm:rounded-2xl p-2 sm:p-3 border border-stone-200/70 text-left mb-2 sm:mb-3 space-y-0.5 sm:space-y-1 text-[9.5px] sm:text-xs">
            {popupItems.map((item, index) => (
              <div key={index} className="flex items-start gap-1 sm:gap-1.5 text-stone-800 font-semibold leading-tight">
                {item.isBonus ? (
                  <Gift className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#e5007d] flex-shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00a85a] flex-shrink-0 mt-0.5" />
                )}
                <span className="break-words">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Price Box */}
          <div className="bg-pink-50 rounded-lg sm:rounded-xl p-1.5 sm:p-2 border border-pink-200/80 mb-2 sm:mb-3">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <span className="line-through text-stone-400 text-[11px] sm:text-sm font-bold">R$ 27,00</span>
              <span className="text-xl sm:text-3xl font-black font-heading text-[#e5007d]">
                R$ 17,00
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={onAccept}
            className="w-full bg-gradient-to-r from-[#00a85a] to-[#12a364] hover:from-[#00924e] hover:to-[#0f8f57] text-white font-heading font-black text-xs sm:text-sm py-2.5 sm:py-3.5 px-2.5 rounded-full shadow-lg shadow-emerald-600/20 transition-all duration-200 active:scale-97 cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wide whitespace-nowrap animate-pulse-premium-button"
          >
            <span>Quiero el Material Completo</span>
          </button>

          {/* WhatsApp & Email delivery badge */}
          <div className="flex items-center justify-center mt-2 text-stone-600 font-medium text-[9.5px] sm:text-[11px] text-center">
            <span>Recíbelo en tu <strong>WhatsApp</strong> y <strong>E-mail</strong></span>
          </div>

          {/* Decline button */}
          <button
            onClick={onDecline}
            className="mt-1.5 sm:mt-2 text-stone-400 text-[9.5px] sm:text-xs font-bold hover:text-stone-600 transition-colors cursor-pointer underline decoration-stone-300 underline-offset-4"
          >
            No, gracias. Prefiero quedarme solo con el básico
          </button>

        </div>
      </div>
    </div>
  );
}

