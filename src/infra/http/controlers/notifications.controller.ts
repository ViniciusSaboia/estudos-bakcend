import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotification } from '@application/use-cases/errors/send-notification';
import { NotificationViewModel } from '../view-models/notification-view-model';
import { CancelNotification } from '@application/use-cases/errors/cancel-notification';
import { ReadNotification } from '@application/use-cases/errors/read-notifcation';
import { UnreadNotification } from '@application/use-cases/errors/unread-notification';
import { CountRecipientNotifications } from '@application/use-cases/errors/count-recipient-notification';
import { GetRecipientNotifications } from '@application/use-cases/errors/get-recipient-notification';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification,
    private cancelnotification: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private countRecipientNotificaitons: CountRecipientNotifications,
    private getRecipientNotifications: GetRecipientNotifications,
    ) {}
  
  @Patch(':id/cancel')
  async cancel(@Param('id')id:string) {
    await this.cancelnotification.execute({
      notificationId:id,
    }) 
  }

  @Get('count/from/:recipientid')
  async countFromRecipient(@Param('recipientId')recipientId: string){
    const { count } = await this.countRecipientNotificaitons.execute({
      recipientId,
    });

    return{
      count,
    };
  }

  @Get('from/:recipientid')
  async getFromRecipient(@Param('recipientId')recipientId: string) {
    const { notifications } = await this.getRecipientNotifications.execute({
      recipientId,
    });

    return{
      notifications: notifications.map(NotificationViewModel.toHTTP),
    };
  }

  @Patch(':id/read')
  async read(@Param('id')id:string) {
    await this.readNotification.execute({
      notificationId:id,
    }) 
  }

  @Patch(':id/unread')
  async unread(@Param('id')id:string) {
    await this.unreadNotification.execute({
      notificationId:id,
    }) 
  }

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
