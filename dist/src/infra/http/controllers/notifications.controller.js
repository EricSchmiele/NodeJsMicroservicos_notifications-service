"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsController = void 0;
const common_1 = require("@nestjs/common");
const send_notification_1 = require("../../../application/use-cases/send-notification");
const create_notification_body_1 = require("../dtos/create-notification-body");
const notification_view_model_1 = require("../view-models/notification-view-model");
const cancel_notification_1 = require("../../../application/use-cases/cancel-notification");
const read_notification_1 = require("../../../application/use-cases/read-notification");
const unread_notification_1 = require("../../../application/use-cases/unread-notification");
const count_recipient_notifications_1 = require("../../../application/use-cases/count-recipient-notifications");
const get_recipient_notificatons_1 = require("../../../application/use-cases/get-recipient-notificatons");
let NotificationsController = class NotificationsController {
    constructor(sendNotification, cancelNotification, readNotification, unreadNotification, countRecipientNotification, getRecipientNotification) {
        this.sendNotification = sendNotification;
        this.cancelNotification = cancelNotification;
        this.readNotification = readNotification;
        this.unreadNotification = unreadNotification;
        this.countRecipientNotification = countRecipientNotification;
        this.getRecipientNotification = getRecipientNotification;
    }
    async cancel(id) {
        await this.cancelNotification.execute({ notificationId: id });
    }
    async countFromRecipient(recipientId) {
        const { count } = await this.countRecipientNotification.execute({ recipientId });
        return { count };
    }
    async getFromRecipient(recipientId) {
        const { notifications } = await this.getRecipientNotification.execute({ recipientId });
        return { notifications: notifications.map(notification_view_model_1.NotificationViewModel.toHTTP) };
    }
    async read(id) {
        await this.readNotification.execute({ notificationId: id });
    }
    async unread(id) {
        await this.unreadNotification.execute({ notificationId: id });
    }
    async create(body) {
        const { recipientId, content, category } = body;
        const { notification } = await this.sendNotification.execute({
            content,
            category,
            recipientId,
        });
        return {
            notification: notification_view_model_1.NotificationViewModel.toHTTP(notification),
        };
    }
};
__decorate([
    (0, common_1.Patch)(':id/cancel'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "cancel", null);
__decorate([
    (0, common_1.Get)('/count/from/:recipientId'),
    __param(0, (0, common_1.Param)('recipientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "countFromRecipient", null);
__decorate([
    (0, common_1.Get)('/get/from/:recipientId'),
    __param(0, (0, common_1.Param)('recipientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "getFromRecipient", null);
__decorate([
    (0, common_1.Patch)(':id/read'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "read", null);
__decorate([
    (0, common_1.Patch)(':id/unread'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "unread", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_notification_body_1.CreateNotificationBody]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "create", null);
NotificationsController = __decorate([
    (0, common_1.Controller)('notifications'),
    __metadata("design:paramtypes", [send_notification_1.SendNotification,
        cancel_notification_1.CancelNotification,
        read_notification_1.ReadNotification,
        unread_notification_1.UnreadNotification,
        count_recipient_notifications_1.CountRecipientNotifications,
        get_recipient_notificatons_1.GetRecipientNotifications])
], NotificationsController);
exports.NotificationsController = NotificationsController;
//# sourceMappingURL=notifications.controller.js.map