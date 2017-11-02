import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OAuthService } from 'angular-oauth2-oidc';

declare const OktaAuth: any;
declare const window: any;

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
  })

export class LoginPage {
  @ViewChild('email') email: any;
  private username: string;
  private password: string;
  private error: string;

    constructor(private navCtrl: NavController, private oauthService: OAuthService) {
        oauthService.redirectUri = 'http://localhost:8100';
        oauthService.clientId = '0oaco09abzSRow3c30h7';
        oauthService.scope = 'openid profile email';
        oauthService.oidc = true;
        oauthService.issuer = 'https://dev-869657.oktapreview.com';

    }
    

    ionViewDidLoad() : void {
        setTimeout(() => {
            this.email;
        }, 500 );
    }
}