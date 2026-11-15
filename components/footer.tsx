import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Tagline */}
          <div>
            <Image
              src="/images/logo-marcanaranja.png"
              alt="ReFood España"
              width={140}
              height={56}
              className="h-12 w-auto border-0 brightness-0 invert"
            />
            <p className="mt-4 text-secondary-foreground/70 text-sm normal-case">
              Aprovechar para Alimentar. Una red vecinal contra el desperdicio alimentario.
            </p>
            <p className="mt-4 text-secondary-foreground/60 text-sm normal-case">
              ReFood, el puente entre el exceso y la necesidad.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-secondary-foreground font-bold mb-4 normal-case">Navegación</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#que-es" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Qué es ReFood?
                </Link>
              </li>
              <li>
                <Link href="/#sumate" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Súmate al desperdicio 0
                </Link>
              </li>
              <li>
                <Link href="/#necesitas-ayuda" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Necesitas ayuda
                </Link>
              </li>
              <li>
                <Link href="/#noticias" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Lo último en ReFood
                </Link>
              </li>
              <li>
                <Link href="/memoria-anual/" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Memorias anuales
                </Link>
              </li>
              <li>
                <Link href="/prensa/" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Prensa
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Participate */}
          <div>
            <h4 className="text-secondary-foreground font-bold mb-4 normal-case">Participa</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#sumate" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Hazte voluntario/a
                </Link>
              </li>
              <li>
                <Link href="/#colabora" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Dona alimentos
                </Link>
              </li>
              <li>
                <Link href="/#colabora" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Colabora económicamente
                </Link>
              </li>
              <li>
                <Link href="/#nucleos" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Monta tu propio núcleo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-secondary-foreground font-bold mb-4 normal-case">Contacto</h4>
            <p className="text-secondary-foreground/70 text-sm mb-4 normal-case">
              informacion@refoodesp.org
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/refoodmadrid/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/refoodmadrid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/70 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/refood-espa%C3%B1a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/RefoodMad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/70 hover:text-primary transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm normal-case">
              © {new Date().getFullYear()} ReFood España. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/privacidad/" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Política de privacidad
              </Link>
              <Link href="/legal/" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Aviso legal
              </Link>
              <Link href="/legal/#cookies" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Política de cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
