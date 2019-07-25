import { Component } from '@angular/core';
import { AdalService } from 'adal-angular4';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Azure-AngularADAL-test-manish';

  private adalConfiguration = {
    tenant: 'f2d49e1f-a61d-40d0-aaf5-293740f55013',
    clientId: 'da753f2a-bedb-4f25-833a-d9f8d4f048ac',
    redirectUri: 'http://localhost:4200/auth-callback',
    postLogoutRedirectUri: 'http://localhost:4200/logout',
    endpoints: {
      "https://graph.microsoft.com": "https://graph.microsoft.com"
    }
  }
 
  constructor(private adal: AdalService) {
    this.adal.init(this.adalConfiguration);
  }

  ngOnInit() {
    this.adal.handleWindowCallback();
  }
}
