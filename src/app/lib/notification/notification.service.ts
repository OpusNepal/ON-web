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
        type: "success",
        z_index: 8000,
      },
     
    );
  }

  error(message: string) {
    $.notify(
      {
        message: message
      },
      {
        type: "danger",
        z_index: 8000,
      }
    );
  }
}
