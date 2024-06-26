export class Content {
    private readonly content: string;

    get value(): string {
        return this.content;
    }

    private ValidadeContentLength(content: string): boolean {
        return content.length > 5 && content.length < 240;
    }

    constructor(content: string) {
        const isContentValid = this.ValidadeContentLength(content);

        if (!isContentValid) {
            throw new Error('Content length error.')
        }

        this.content = content;
    }
}