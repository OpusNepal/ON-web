import { environment } from "../../environments/environment";
import { UserService } from "./user.service";
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { LocalStorageService } from "./local-storage.service";
import { NotificationService } from "../lib/notification/notification.service";

@Injectable()
export class LoginAuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private auth: LocalStorageService,
    private api: UserService,
    private notification: NotificationService
  ) {}

  async canActivate(): Promise<boolean> {
    // check if we have this activeated from root node of appication
    // now lets check if we have the token
    const token: any | null = this.auth.getAuthToken;
    if (token === null) {
      // we are in login and we dont have token, that is valid state
      // ANYTHING TODO
    } else {
      try {
        // now we will have to verify the token we have
      
        let result = await this.api.verify().toPromise();
        this.router.navigate(['home']);
        

        return false;
      } catch (e) {
        // this means unauthorized, so we need to clear the token and let the user here
        // so lets remove the token
        // this.notification.error("Please login to continue");
        this.auth.clearAuthData();
      }
    }

    return true;
  }
}
