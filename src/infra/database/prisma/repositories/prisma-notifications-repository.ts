import { Notification } from "src/application/entities/notifications";
import { NotificationsRepository } from "../../../../application/repositories/notifications-repository"
import { PrismaService } from "../prisma.service";

export class PrismaNotificationsRepository implements NotificationsRepository {
    constructor(private prismaservice: PrismaService) { }

    async create(notification: Notification): Promise<void> {
        await this.prismaservice.notification.create({
            data: {
                id: notification.id,
                category: notification.category,
                content: notification.content.value,
                recipientId: notification.recipientId,
                readaT: notification.readAt,
                createdAt: notification.createdAt,
            },
        });
    }
}