import { Content } from "./content";
import { Notification } from "./notifications";

describe('Notification', ()=> {
    it('should be able to create a notification', ()=>{
        const notification = new Notification({
            content: new Content('Nova solicitacao de amizade'),
            category: 'social',
            recipientId: 'exemple-recipient-id',
            createdAt: new Date(),
        });

        expect(Content).toBeTruthy();
    })
})