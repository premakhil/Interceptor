import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

@Injectable()
export class AppComponent {

  constructor(private http:HttpClient) {}

  title = 'ApiProject';


  public getValid():void {

    

   var req = this.http.get("https://jsonplaceholder.typicode.com/posts");
    // console.log(a);

    console.log("valid request sent");
    
    req.subscribe(res=>{console.log(res);})
    

  }

  public getInvalid():void {

    

    var req = this.http.get("https://jsonplaceholder.typicode.com/postsInvalid");
     // console.log(a);
 
     console.log("invalid request sent");
     
     req.subscribe(res=>{console.log(res);})


  }



}
