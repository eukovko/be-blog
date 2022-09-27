export default class Course {
    id: number;
    name: string;
    description: string;
    cost: number;
    placesLeft: number;

    constructor(id:number, name: string, description: string, cost: number, placesLeft: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.cost = cost;
        this.placesLeft = placesLeft;
    }
}