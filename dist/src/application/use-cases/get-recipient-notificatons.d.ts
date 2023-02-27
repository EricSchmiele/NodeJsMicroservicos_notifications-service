import { Notification } from "@application/entities/notification";
import { NotificationsRepository } from "../repositories/notification-repository";
interface GetRecipientNotificationsRequest {
    recipientId: string;
}
interface GetRecipientNotificationsResponse {
    notifications: Notification[];
}
export declare class GetRecipientNotifications {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(request: GetRecipientNotificationsRequest): Promise<GetRecipientNotificationsResponse>;
}
export {};
