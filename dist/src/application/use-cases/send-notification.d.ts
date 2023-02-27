import { Notification } from "../entities/notification";
import { NotificationsRepository } from "../repositories/notification-repository";
interface SendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}
interface SendNotificationResponse {
    notification: Notification;
}
export declare class SendNotification {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(request: SendNotificationRequest): Promise<SendNotificationResponse>;
}
export {};
