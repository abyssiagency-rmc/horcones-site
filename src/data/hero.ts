export interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  body?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  image: string;
  imageAlt: string;
  layout: "full" | "shop";
  position: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: "identidad",
    eyebrow: "Horcones RC",
    title: "El rugby se juega en equipo.",
    ctaLabel: "Conoce el club",
    ctaHref: "/club",
    image: "/images/hero/hero-night.jpg",
    imageAlt: "Jugador de rugby elevado buscando la pelota bajo las luces de la cancha.",
    layout: "full",
    position: "55% 40%",
  },
  {
    id: "partido",
    eyebrow: "Próximo partido",
    title: "Horcones vs. próximo rival",
    body: "Sábado · 18:00 · Cancha Horcones. Las entradas se habilitan desde la página de Tickets.",
    ctaLabel: "Tickets",
    ctaHref: "/tickets",
    secondaryLabel: "Ver calendario",
    secondaryHref: "/partidos",
    image: "/images/hero/hero-match.jpg",
    imageAlt: "Partido de rugby adulto en acción sobre césped.",
    layout: "full",
    position: "62% 45%",
  },
  {
    id: "comunidad",
    eyebrow: "Comunidad",
    title: "Después del partido, sigue el club.",
    body: "Tercer tiempo, eventos y vida de club.",
    ctaLabel: "Ver eventos",
    ctaHref: "/eventos",
    image: "/images/hero/hero-huddle.jpg",
    imageAlt: "Equipo de rugby reunido en ronda bajo las luces de la cancha.",
    layout: "full",
    position: "50% 42%",
  },
  {
    id: "equipos",
    eyebrow: "Equipos",
    title: "De infantiles a primera.",
    body: "Un club, varias categorías, una misma identidad.",
    ctaLabel: "Conoce los equipos",
    ctaHref: "/equipos",
    image: "/images/hero/hero-scrum.jpg",
    imageAlt: "Formación de scrum en un partido de rugby.",
    layout: "full",
    position: "50% 45%",
  },
  {
    id: "tienda",
    eyebrow: "Tienda oficial",
    title: "Viste los colores.",
    body: "Indumentaria y campañas del club.",
    ctaLabel: "Ir a la tienda",
    ctaHref: "/tienda",
    image: "/images/hero/hero-shop.jpg",
    imageAlt: "Deportista mostrando una camiseta de juego.",
    layout: "shop",
    position: "50% 35%",
  },
];
