import { InMemoryNotificationsRepository } from "../../../../test/repositories/in-memory-notifications-repository";
import { makeNotification } from "../../../../test/factories/notification-factory";
import { GetRecipientNotifications } from "./get-recipient-notification";

describe('Get recipients notification', () => {
    it('should be able to count recipient notifications', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const getRecipientNotifications = new GetRecipientNotifications(notificationsRepository);


        await notificationsRepository.create(makeNotification ({ recipientId: 'recipient-1' }) );
        
        await notificationsRepository.create(makeNotification ({ recipientId: 'recipient-1' }) 
        )

        await notificationsRepository.create(makeNotification ({ recipientId: 'recipient-2' }) 
        )

        const { notifications } = await getRecipientNotifications.execute({
            recipientId: 'recipient-1'
        });

        expect(notifications).toHaveLength(2);
        expect (notifications).toEqual(expect.arrayContaining([
            expect.objectContaining({ recipientID: 'recipient-1'}),
            expect.objectContaining({ recipientID: 'recipient-1'}),
        ]))
    });
});