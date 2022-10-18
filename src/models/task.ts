export interface ITask {
    title: string;
    responsible: string;
    isComplete: boolean;
}

export class Task {
    id: number;
    isComplete: boolean;
    static crearId() {
        return Math.round(Math.random() * 1_000_000);
    }
    constructor(public title: string, public responsible: string) {
        this.id = Task.crearId();
        this.isComplete = false;
    }
}
