import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,
  HttpResponse
} from '@angular/common/http';

import { Observable, finalize, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';



@Injectable()
export class Intercept implements HttpInterceptor {

  constructor(private toasterService:ToastrService){}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      console.log("Reached interceptor");

      let ok:number;

      
    return next.handle(req)
    .pipe(
      tap({
        next:(event)=>(ok = event instanceof HttpResponse ? 1:0),
        // error:(event)=>(ok="failed"),
      }),
      finalize(()=>{
        // console.log("came here");
        
        console.log(ok);
        if (ok==1){
          this.toasterService.success("Api called successfully");
          
        } else {
          this.toasterService.error("Error calling Api");
        }
        
      })
    );
  }
}