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

    // constructor(
    //     id: number,
    //     name: string,
    //     typeline: string[],
    //     type: string,
    //     humanReadableCardType: string,
    //     frameType: string,
    //     desc: string,
    //     race: string,
    //     atk: number,
    //     def: number,
    //     level: number,
    //     attribute: string,
    //     archetype: string,
    //     ygoprodeck_url: string,
    //     card_images: CardImage[],
    // ) {
    //     this.id = id;
    //     this.name = name;
    //     this.typeline = typeline;
    //     this.type = type;
    //     this.humanReadableCardType = humanReadableCardType;
    //     this.frameType = frameType;
    //     this.desc = desc;
    //     this.race = race;
    //     this.atk = atk;
    //     this.def = def;
    //     this.level = level;
    //     this.attribute = attribute;
    //     this.archetype = archetype;
    //     this.ygoprodeck_url = ygoprodeck_url;
    //     this.card_images = card_images;
    //   }
    
    
}

