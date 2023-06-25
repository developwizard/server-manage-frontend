import {Injectable} from "@angular/core";
import {NotifierService} from "angular-notifier";

@Injectable({providedIn: 'root'})
export class NotificationService {
  private readonly notifier: NotifierService;

  constructor(notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  onDefault(message: string) {
    this.notifier.notify(NotificationType.DEFAULT, message);
  }

  onInfo(message: string) {
    this.notifier.notify(NotificationType.INFO, message);
  }

  onSuccess(message: string) {
    this.notifier.notify(NotificationType.SUCCESS, message);
  }

  onWarning(message: string) {
    this.notifier.notify(NotificationType.WARNING, message);
  }

  onError(message: string) {
    this.notifier.notify(NotificationType.ERROR, message);
  }
}

enum NotificationType {
  DEFAULT = 'default',
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error'
}
