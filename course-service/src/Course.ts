export default class Course {
    name: string;
    description: string;
    date: Date;
    cost: number;

    constructor(name: string) {
        this.name = name;
    }
}