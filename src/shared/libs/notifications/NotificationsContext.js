import Notification from "./Notification.js";

class NotificationsContext {
  constructor() {
    this.errors = [];
  }

  addNotification(context, message) {
    this.errors.push(new Notification(context, message));
  }

  hasNotification(){
    return this.errors.length > 0;
  }

  getNotifications() {
    return this.errors;
  }

}

export default NotificationsContext;
