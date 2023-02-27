import { Notification } from "@application/entities/notification";
import { NotificationsRepository } from "@application/repositories/notification-repository";
import { PrismaService } from "../prisma.service";
export declare class PrismaNotificationsRepository implements NotificationsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findById(notificationId: string): Promise<Notification | null>;
    findManyByRecipientId(recipientId: string): Promise<Notification[]>;
    countManyByRecipientId(recipientId: string): Promise<number>;
    create(notification: Notification): Promise<void>;
    save(notification: Notification): Promise<void>;
}
