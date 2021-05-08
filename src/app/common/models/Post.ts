export class Post {
    userId: number;
    title: string;
    body: string;
    id?: number;

    constructor(p_userId: number,  p_title: string, p_body: string, p_id?: number) {
        this.userId = p_userId;
        this.title = p_title;
        this.body = p_body;
        this.id = p_id;
    }
}