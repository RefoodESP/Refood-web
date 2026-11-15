import Link from "next/link"

export function Hero() {
  return (
    <section className="relative flex items-center pt-20 overflow-hidden bg-primary" style={{ minHeight: "100svh" }}>
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 py-12 flex flex-col justify-between" style={{ minHeight: "calc(100svh - 5rem)" }}>

        {/* Main headline - fills vertical space, hard left */}
        <div className="flex-1 flex flex-col justify-center">
          <h1
            className="text-left leading-none"
            style={{
              fontSize: "clamp(2.25rem, 9.5vw, 8.75rem)",
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              color: "#1A1A1A",
              textTransform: "uppercase",
            }}
          >
            <span className="block">BARRIOS CON</span>
            <span className="block">DESPERDICIO</span>
            {/* CERO in black box with yellow text */}
            <span className="block" style={{ lineHeight: 1 }}>
              <span
                style={{
                  display: "inline-block",
                  background: "#1A1A1A",
                  color: "#F5B72F",
                  padding: "0 0.18em",
                  lineHeight: 1.05,
                }}
              >
                CERO
              </span>
              <span style={{ color: "#1A1A1A" }}>.</span>
            </span>
          </h1>
        </div>

        {/* Bottom row: two centered CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8">
          <Link
            href="#que-es"
            className="btn-refood shrink-0 w-full sm:w-auto justify-center"
            style={{ background: "transparent", color: "#1A1A1A", border: "2px solid #1A1A1A" }}
          >
            Conocer ReFood
          </Link>
          <Link
            href="#sumate"
            className="btn-refood shrink-0 w-full sm:w-auto justify-center"
            style={{ background: "#1A1A1A", color: "#F5B72F" }}
          >
            Quiero colaborar
          </Link>
        </div>

      </div>
    </section>
  )
}
