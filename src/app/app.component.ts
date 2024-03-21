import { Component, OnInit } from '@angular/core';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private ccService: NgcCookieConsentService) {}

  ngOnInit(): void {
    this.ccService.statusChange$.subscribe(event => {
      if (event.status === 'allow') {
        this.loadGTM();
      }
    });
  }

  loadGTM(): void {
    // Dynamically inject the Google Tag Manager script
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','G-6NV03JS26M');`;
    document.head.appendChild(gtmScript);

    // Optionally push an event to DataLayer for explicit consent given
    window['dataLayer'] = window['dataLayer'] || [];
    window['dataLayer'].push({
      event: 'consent_given'
    });
  }
}
