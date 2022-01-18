class Planet {
    protected name: string;
    protected mass: string; 

    public constructor (name, mass) {
        this.name = name;
        this.mass = mass;
    }
}

class Satellite {
    protected name: string;
    protected planet: string; 

    public constructor (name, planet) {
        this.name = name;
        this.planet = planet;
    }
}

const earth = new Planet('Earth', '5,972Е24');
const moon = new Satellite('Moon', 'Earth');

console.log(earth instanceof Planet);
console.log(earth instanceof Satellite);