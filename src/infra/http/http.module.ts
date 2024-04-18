import { Module } from "@nestjs/common";
import { NotificationsController } from "./controlers/notifications.controller";

@Module({
    imports: [],
    controllers: [NotificationsController]
})

export class HttpModule { }