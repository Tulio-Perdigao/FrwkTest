export class ToDo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;

    constructor(p_userId: number, p_id: number, p_title: string, p_completed: boolean) {
        this.userId = p_userId;
        this.id = p_id;
        this.title = p_title;
        this.completed = p_completed;
    }
}