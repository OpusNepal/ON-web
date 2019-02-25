import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private userService: UserService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        const token = this.userService.getToken();
        const reqWithToken = req.clone({
            setHeaders: {
                'x-access-token': token
            }
        });
    
        return next.handle(reqWithToken).pipe(
            map((event: HttpEvent<any>, err) => {

                if (event instanceof HttpResponse) {
                    const response: HttpResponse<any> = <HttpResponse<any>> event;
                    if (response.url != null && response.url.endsWith('/api/auth/login') && response.ok) {
                        //save token to localstorage
                        console.log(response.body.data.data.token);
                       this.userService.setToken(response.body.data.data.token)
                    }
                }
                return event;
             })
            // catchError((error, caught) => {
            //     console.log(error)
            //     return Promise.reject(error);
            // }) 
        );
    }
}
