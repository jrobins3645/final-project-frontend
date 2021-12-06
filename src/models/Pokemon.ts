interface Sprites {
  front_default: string;
}

interface Sprites {
  other: Other;
}

interface Other {
  "official-artwork": Artwork;
}

interface Artwork {
  front_default: string;
}

export default interface Pokemon {
  name: string;
  sprites: Sprites;
}
