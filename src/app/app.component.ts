import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'inbox',
      url: '/folder/Inbox',
      icon: 'mail'
    },
    {
      title: 'outbox',
      url: '/folder/Outbox',
      icon: 'paper-plane'
    },
    {
      title: 'favorites',
      url: '/folder/Favorites',
      icon: 'heart'
    },
    {
      title: 'archived',
      url: '/folder/Archived',
      icon: 'archive'
    },
    {
      title: 'trash',
      url: '/folder/Trash',
      icon: 'trash'
    },
    {
      title: 'spam',
      url: '/folder/Spam',
      icon: 'warning'
    }
  ];
  public direction ="ltr";
  public labels = ['family', 'friends', 'notes', 'work', 'travel', 'reminders'];

  public langs = [{ label: "English" , langCode : "en" , dir: "ltr"},
  { label: "French" , langCode : "fr" , dir: "ltr"},
  { label: "Arabic" , langCode : "ar" , dir: "rtl"},
  { label: "Hindi" , langCode : "hi" , dir: "ltr"},
  { label: "Telugu" , langCode : "te" , dir: "ltr"}];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _platform: Platform, 
    private _translate:TranslateService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this._initTranslate();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  private _initTranslate() 
  {
     // Set the default language for translation strings, and the current language.
     //this._translate.setDefaultLang('te');


    //  if (this._translate.getBrowserLang() !== undefined) 
    //  {
    //      this._translate.use(this._translate.getBrowserLang());
    //  } 
    //  else 
    //  {
         this._translate.use('en'); // Set your language here
    //  }
  }

  changeLang(event){
    let index=event.target.value;
    this._translate.use(this.langs[index].langCode);
    this.direction = this.langs[index].dir;
  }

}
