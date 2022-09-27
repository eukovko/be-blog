export default class Course {
    name: string;
    description: string;
    cost: number;
    placesLeft: number;

    constructor(name: string, description: string, cost: number, placesLeft: number) {
        this.name = name;
        this.description = description;
        this.cost = cost;
        this.placesLeft = placesLeft;
    }
}