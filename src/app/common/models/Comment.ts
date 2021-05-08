export class Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;

    constructor(p_postId: number, p_id: number, p_name: string, p_email: string, p_body: string) {
        this.postId = p_postId;
        this.id = p_id;
        this.name = p_name;
        this.email = p_email;
        this.body = p_body;
    }
}