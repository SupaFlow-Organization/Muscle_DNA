// Shared type definitions for the application

export interface Product {
  name: string;
  flavor: string;
  category: string;
  description: string;
  image: string;
  price?: number;
  features?: string[];
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  number: string;
  label: string;
  description?: string;
}

export interface Flavor {
  name: string;
  type: string;
}

export interface Benefit {
  text: string;
  icon?: string;
}
