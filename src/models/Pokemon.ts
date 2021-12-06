interface Sprites {
  front_default: string;
}

interface Forms {
  name: string;
}

export default interface Pokemon {
  forms: Forms[];
  sprites: Sprites[];
}
