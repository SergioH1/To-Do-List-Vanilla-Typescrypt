export class Task {
    constructor(title, responsible) {
        this.title = title;
        this.responsible = responsible;
        this.id = Task.crearId();
        this.isComplete = false;
    }
    static crearId() {
        return Math.round(Math.random() * 1000000);
    }
}
