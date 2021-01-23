interface Color {
  id: number;
  hex: string;
  __type: string;
}

interface Cart {
  [id: number]: Color
}

interface Palettes {
  [title: string]: Color[];
}

export type { Color, Cart, Palettes };