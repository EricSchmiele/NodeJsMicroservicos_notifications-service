"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationViewModel = void 0;
class NotificationViewModel {
    static toHTTP(notification) {
        return {
            id: notification.id,
            content: notification.content.value,
            category: notification.category,
            recipientId: notification.recipientId,
        };
    }
}
exports.NotificationViewModel = NotificationViewModel;
//# sourceMappingURL=notification-view-model.js.map