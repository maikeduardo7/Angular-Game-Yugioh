export interface CardImage {
    id: number;
    image_url: string;
    image_url_small: string;
    image_url_cropped: string;
  }

export interface Card {
    id: number;
    name: string;
    typeline: string[];
    type: string;
    humanReadableCardType: string;
    frameType: string;
    desc: string;
    race: string;
    atk: number;
    def: number;
    level: number;
    attribute: string;
    archetype: string;
    ygoprodeck_url: string;
    card_images: CardImage[];
    
}

