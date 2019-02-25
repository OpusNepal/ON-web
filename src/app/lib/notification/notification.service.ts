import { Injectable } from "@angular/core";
declare const $: any;

@Injectable()
export class NotificationService {
  success(message: string) {
    $.notify(
      {
        message: message
      },
      {
        type: "success"
      }
    );
  }

  error(message: string) {
    $.notify(
      {
        message: message
      },
      {
        type: "danger"
      }
    );
  }
}
