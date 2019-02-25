import { environment } from "../../environments/environment";
import { UserService } from "./user.service";
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { LocalStorageService } from "./local-storage.service";
import { NotificationService } from "../lib/notification/notification.service";

@Injectable()
export class GeneralAuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private auth: LocalStorageService,
    private api: UserService,
    private notification: NotificationService
  ) {}

  async canActivate(): Promise<boolean> {
  
    const token: any | null = this.auth.getAuthToken();
    console.log("token",token)
    if (token === null) {
      this.notification.error("Please login to  continue");
      this.router.navigate(['login']);

      return false;
    } else {
      try {
        let result = await this.api.verify().toPromise();
        // in this case, we have verified token so let the component load
      } catch (e) {
        // this means the token is not good so lets go back to
        this.notification.error("Session has expired, please login again.");
        this.router.navigate(['login']);

        return false;
      }
    }

    return true;
  }
}
