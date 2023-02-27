import { Injectable } from "@nestjs/common";
import { Notification } from "@application/entities/notification";
import { NotificationsRepository } from "@application/repositories/notification-repository";
import { PrismaService } from "../prisma.service";
import { PrismaNotificationMapper } from "../mappers/prisma-notification-mapper";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
    constructor(private prisma: PrismaService) {}

    async findById(notificationId: string): Promise<Notification | null> {
        const notification = await this.prisma.notificarion.findUnique({
            where: {
                id: notificationId,
            }
        });

        if (!notification) {
            return null;
        }

        return PrismaNotificationMapper.toDomain(notification);
    }

    async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
        const notifications = await this.prisma.notificarion.findMany({
            where: {
                recipientId,
            },
        });

        return notifications.map(PrismaNotificationMapper.toDomain);
    }
    
    async countManyByRecipientId(recipientId: string): Promise<number> {
        const count = await this.prisma.notificarion.count({
            where: {
                recipientId,
            },
        });

        return count;
    }

    async create(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMapper.toPrisma(notification);

        await this.prisma.notificarion.create({
            data: raw,
        });
    }

    async save(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMapper.toPrisma(notification);

        await this.prisma.notificarion.update({
            where: {
                id: raw.id,
            },
            data: raw,
        });
    }
}