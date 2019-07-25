import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';

@Component({
  selector: 'app-authcallback',
  templateUrl: './authcallback.component.html',
  styleUrls: ['./authcallback.component.css']
})
export class AuthcallbackComponent implements OnInit {

  constructor(private adal: AdalService ) {  }

  ngOnInit() {
  }

  logout(): void {
    this.adal.logOut();
}

}
