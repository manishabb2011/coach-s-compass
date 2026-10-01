import circleGlobe from "@/assets/circle/leadnorth-circle.png";
import qrCode from "@/assets/circle/leadnorth-whatsapp-qr.jpeg";

type JoinCircleVisualsProps = {
  globeLoading?: "lazy" | "eager";
};

const JoinCircleVisuals = ({ globeLoading = "lazy" }: JoinCircleVisualsProps) => {
  return (
    <div className="relative flex w-full items-center justify-center">
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-primary/5 blur-2xl"
        aria-hidden="true"
      />
      <div className="relative flex flex-row items-center justify-center gap-4 sm:gap-5 md:gap-6">
        <div className="relative w-40 shrink-0 sm:w-44 md:w-48">
          <div className="absolute inset-3 rounded-full bg-primary/15 blur-xl" aria-hidden="true" />
          <img
            src={circleGlobe}
            alt="LeadNorth Consulting compass pointing toward a bright horizon"
            className="relative aspect-square w-full rounded-full object-cover gold-border-glow ring-1 ring-primary/30"
            loading={globeLoading}
          />
        </div>
        <div className="w-36 shrink-0 overflow-hidden rounded-lg border border-border bg-card gold-border-glow sm:w-40 md:w-44">
          <img
            src={qrCode}
            alt="QR code to join The LeadNorth Circle WhatsApp group"
            className="h-auto w-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinCircleVisuals;
