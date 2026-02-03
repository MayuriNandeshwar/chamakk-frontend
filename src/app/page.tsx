import Image from "next/image";

export default function ComingSoon() {
  return (
    <main className="coming-soon-page">
    <div className="coming-soon-fade">
        <Image
            src="/logo/chamakk-logo.png"
            alt="Chamakk"
            width={120}
            height={120}
            className="coming-soon-logo"
            priority
            />

        <h1 className="coming-soon-title">CHAMAKK</h1>
        <p className="coming-soon-tagline">
        Glow Different. Glow Natural.
        </p>

        <div className="coming-soon-divider" />

        <p className="coming-soon-text">Launching Soon</p>
        <p className="coming-soon-sub">
        We are crafting something beautiful.
        </p>
    </div>
    </main>

  );
}
