class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target){
        if (target instanceof Unit) {
            target.res -= this.power;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, mag) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }

    play(target) {
        if (target instanceof Unit) {
            this.stat == "res" ? target.res += this.magnitude : target.power += this.magnitude;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}