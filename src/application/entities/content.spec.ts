import { Content } from "./content";

describe('Notification content', () => {
    it('should be able to create a notification content', () => {
        const content = new Content('Voce recebeu um solicitacao de amizade');

        expect(content).toBeTruthy();
    })

    it('should not be able to create a notification content with less than 5 characteres', () => {
        expect(() => new Content('aaa')).toThrow();
    })

    it('should not be able to create a notification content with more than 240 characteres', () => {
        expect(() => new Content('a'.repeat(241))).toThrow();
    })
})