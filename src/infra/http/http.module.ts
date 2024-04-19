import { Module } from "@nestjs/common";
import { NotificationsController } from "./controlers/notifications.controller";
import { SendNotification } from "@application/use-cases/errors/send-notification";
import { DataBaseModule } from "../database/database.module";
import { CancelNotification } from "@application/use-cases/errors/cancel-notification";
import { CountRecipientNotifications } from "@application/use-cases/errors/count-recipient-notification";
import { GetRecipientNotifications } from "@application/use-cases/errors/get-recipient-notification";
import { ReadNotification } from "@application/use-cases/errors/read-notifcation";
import { UnreadNotification } from "@application/use-cases/errors/unread-notification";

@Module({
    imports: [DataBaseModule],
    controllers: [NotificationsController],
    providers: [
        SendNotification,
        CancelNotification,
        CountRecipientNotifications,
        GetRecipientNotifications,
        ReadNotification,
        UnreadNotification,
    ]
})

export class HttpModule { }