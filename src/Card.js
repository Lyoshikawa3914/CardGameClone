class Card {
    constructor (name = none, type = none, color = none, 
        stage = none, digi_type = none, 
        attribute = none, level = none, play_cost = none,
         evolution_cost = none, 
        cardrarity = none, artist = none, dp = none, cardnumber = none,
         maineffect = none,
        sourceeffect = none, card_sets = none, image_url = none) {
        
        this.name = name;
        this.type = type;
        this.color = color;
        this.stage = stage;
        this.digi_type = digi_type;
        this.attribute = attribute;
        this.level = level;
        this.play_cost = play_cost;
        this.evolution_cost = evolution_cost;
        this.cardrarity = cardrarity;
        this.artist = artist;
        this.dp = dp;
        this.cardnumber = cardnumber;
        this.maineffect = maineffect;
        this.sourceeffect = sourceeffect;
        this.card_sets = card_sets;
        this.image_url = image_url;
    }
}

export default Card;