export class Album {
    userId: number;
    id: number;
    title: string;

    constructor(p_userId: number, p_id: number, p_title: string) {
        this.userId = p_userId;
        this.id = p_id;
        this.title = p_title;
    }
}
