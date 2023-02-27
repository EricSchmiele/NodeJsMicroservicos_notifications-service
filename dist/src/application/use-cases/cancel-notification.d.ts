import { NotificationsRepository } from "../repositories/notification-repository";
interface CancelNotificationRequest {
    notificationId: string;
}
type CancelNotificationResponse = void;
export declare class CancelNotification {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(request: CancelNotificationRequest): Promise<CancelNotificationResponse>;
}
export {};
