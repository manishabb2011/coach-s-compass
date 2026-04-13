import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "+353894727693";
const WHATSAPP_MESSAGE = "Hi Vandana, I'd like to connect.";

const sanitizedNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
const isConfigured = sanitizedNumber.length > 7;
const whatsappUrl = `https://wa.me/${sanitizedNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const WhatsAppButton = () => {
  const [bottomOffset, setBottomOffset] = useState(24);

  useEffect(() => {
    const updateOffset = () => {
      const footer = document.querySelector("footer");
      if (!footer) {
        setBottomOffset(24);
        return;
      }

      const footerRect = footer.getBoundingClientRect();
      const overlap = Math.max(0, window.innerHeight - footerRect.top);
      setBottomOffset(24 + overlap);
    };

    updateOffset();
    window.addEventListener("scroll", updateOffset, { passive: true });
    window.addEventListener("resize", updateOffset);
    return () => {
      window.removeEventListener("scroll", updateOffset);
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  if (!isConfigured) {
    return (
      <button
        type="button"
        disabled
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366]/70 px-4 py-3 text-sm font-semibold text-white shadow-lg opacity-70 cursor-not-allowed"
        title="Add your WhatsApp number in src/components/WhatsAppButton.tsx"
        aria-label="Connect on WhatsApp"
        style={{ bottom: `${bottomOffset}px` }}
      >
        <MessageCircle size={20} />
        Connect on WhatsApp
      </button>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#20ba57] focus:outline-none focus:ring-2 focus:ring-ring animate-pulse"
      aria-label="Connect on WhatsApp"
      style={{ bottom: `${bottomOffset}px` }}
    >
      <MessageCircle size={20} />
      Connect on WhatsApp
    </a>
  );
};

export default WhatsAppButton;
