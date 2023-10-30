import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private platform: Platform) {}

  ngOnInit(): void {
    console.log('app init');
    this.platform.ready().then((plt) => {
      console.log('platfom:--', plt);
      setTimeout(() => {
        SplashScreen.hide({
          fadeOutDuration: 500,
        });
      }, 2000);
    });
  }
}
