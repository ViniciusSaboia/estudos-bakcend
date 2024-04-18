import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotification } from 'src/application/use-cases/send-notifications';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { NotificationViewModel } from '../view-models/notification-view-model';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body

    const {notification} = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    })      

    return {
      notification: NotificationViewModel.toHTTP(notification)
    }
  }
}