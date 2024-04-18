import { Inject, Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notifications-repository";
import { NotificationNotFound } from "./errors/notifications-not-found";

interface CancelNotificationRequest {
    notificationId: string;
}

type CancelNotificationResponse = void


@Injectable()
export class CancelNotification {
    constructor(private notificationsRepository: NotificationsRepository) { }

    async execute(request: CancelNotificationRequest): Promise<CancelNotificationResponse> {
        const { notificationId } = request;


        const notification = await this.notificationsRepository.findById(notificationId)        

        if (!notification) {
            throw new NotificationNotFound();
        }

        
    };
    
}