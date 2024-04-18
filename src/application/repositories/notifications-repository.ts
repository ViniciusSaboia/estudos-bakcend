import { Notification } from "../entities/notifications";

export abstract class NotificationsRepository {
    abstract create(notification: Notification): Promise<void>;
    abstract findById(notificationId: string): Promise <Notification | null>;
}