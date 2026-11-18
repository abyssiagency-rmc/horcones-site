export interface Product {
  slug: string;
  categoria: string;
  nombre: string;
  precio: string;
  descripcion: string;
  imagen: string;
  alt: string;
  tallas: string[];
}

export const products: Product[] = [
  {
    slug: "camiseta-local-2026",
    categoria: "Local 2026",
    nombre: "Camiseta Local",
    precio: "$39.990",
    descripcion: "Rojo de local. Tejido liviano para partido y tribuna.",
    imagen: "/images/shop/camiseta-local.svg",
    alt: "Camiseta local roja de Horcones RC.",
    tallas: ["S", "M", "L", "XL", "XXL"],
  },
  {
    slug: "camiseta-visita-2026",
    categoria: "Visita 2026",
    nombre: "Camiseta Visita",
    precio: "$39.990",
    descripcion: "Blanco y rojo. La equipación para jugar afuera.",
    imagen: "/images/shop/camiseta-visita.svg",
    alt: "Camiseta de visita blanca y roja de Horcones RC.",
    tallas: ["S", "M", "L", "XL", "XXL"],
  },
  {
    slug: "camiseta-entrenamiento",
    categoria: "Entrenamiento",
    nombre: "Camiseta Entrenamiento",
    precio: "$29.990",
    descripcion: "Negro y rojo. Para entrenar todos los días.",
    imagen: "/images/shop/camiseta-entrenamiento.svg",
    alt: "Camiseta de entrenamiento negra y roja de Horcones RC.",
    tallas: ["S", "M", "L", "XL", "XXL"],
  },
];
