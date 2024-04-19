import { Notification as RawNotification} from "@prisma/client";
import { Content } from "@application/entities/content";
import { Notification } from "@application/entities/notifications";

    export class PrismaNotificationMapper {
        static toPrisma(notification:Notification){
            return {
                id: notification.id,
                category: notification.category,
                content: notification.content.value,
                recipientId: notification.recipientId,
                readaT: notification.readAt,
                createdAt: notification.createdAt,
            }
        }


        static toDomain(raw: RawNotification):Notification{
            return new Notification({
                category: raw.category,
                content: new Content(raw.content),
                recipientId: raw.recipientId,
                readAt: raw.readAt,
                canceledAt: raw.canceledAt,
                createdAt: raw.createdAt
            })
        }
    }