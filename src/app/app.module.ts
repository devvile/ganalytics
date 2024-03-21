import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // For forms
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TileSpaceComponent } from './tile-space/tile-space.component';
import { TileComponent } from './tile/tile.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { GtagModule } from 'angular-gtag';
import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';

const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'https://sparkling-hummingbird-3cd250.netlify.app/' // or 'https://sparkling-hummingbird-3cd250.netlify.app/' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#f1d600'
    }
  },
  theme: 'edgeless',
  type: 'opt-out'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    TileSpaceComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxGoogleAnalyticsModule.forRoot('G-6NV03JS26M'),
    NgcCookieConsentModule.forRoot(cookieConfig),
    NgxGoogleAnalyticsRouterModule,
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//trackingId: 'G-6NV03JS26M'