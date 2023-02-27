import { Notificarion as RawNotification } from "@prisma/client";
import { Notification } from "@application/entities/notification";
export declare class PrismaNotificationMapper {
    static toPrisma(notification: Notification): {
        id: string;
        category: string;
        content: string;
        recipientId: string;
        readAt: Date | null | undefined;
        createdAt: Date;
    };
    static toDomain(raw: RawNotification): Notification;
}
