import { Notification } from "@application/entities/notifications"
import { NotificationsRepository } from "@application/repositories/notifications-repository"

export class InMemoryNotificationsRepository
    implements NotificationsRepository {
        
    async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
        return this.notifications.filter(notification => notification.recipientId === recipientId)
    }
    async countManyByRecipientId(recipientId: string): Promise<number> {
        return this.notifications.filter(notification => notification.recipientId === recipientId).length;
    }
    async save(notification: Notification): Promise<void> {
        const notificationIndex = this.notifications.findIndex(
            (item) => item.id === notification.id,
        );

        if (notificationIndex >= 0) {
            this.notifications[notificationIndex] = notification;
        }
    }
    async findById(notificationId: string): Promise<Notification | null> {
        const notification = this.notifications.find(
            (item) => item.id === notificationId,
        );


        if (!notification) {
            return null
        }

        return notification;
    }

    public notifications: Notification[] = [];

    async create(notification: Notification) {
        this.notifications.push(notification)
    }
}



