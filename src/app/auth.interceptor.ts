import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptot implements HttpInterceptor{

intercept(req: HttpRequest<any>, next:HttpHandler) : Observable<HttpEvent<any>> {
 const idToken = localStorage.getItem("id_token");

 if(idToken){
     const cloned = req.clone({
         headers: req.headers.set("Authorizaton","Bearer " + idToken)
     });
     return next.handle(cloned);
 }else{
     return next.handle(req);
 }
}
}