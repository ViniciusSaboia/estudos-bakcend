import { Module } from "@nestjs/common";
import { NotificationsController } from "./controlers/notifications.controller";
import { SendNotification } from "src/application/use-cases/send-notifications";
import { DataBaseModule } from "../database/database.module";

@Module({
    imports: [DataBaseModule],
    controllers: [NotificationsController],
    providers: [SendNotification]
})

export class HttpModule { }