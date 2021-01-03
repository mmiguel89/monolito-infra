import { Component } from '@angular/core';

import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  axionButtonColor: string;
  axionText: string;
  allianzButtonColor: string;
  allianzText: string;

  constructor(private http: HTTP) {
    this.init();
  }

  init() {
    setInterval(() => {
      this.pingAxion();
      this.pingAllianz();
    }, 3600000); // 1 h
    this.axionButtonColor = "primary";
    this.axionText = "ready!";
    this.allianzButtonColor = "primary";
    this.allianzText = "ready!";
  }

  pingAxion() {
    this.axionButtonColor = "warning";
    this.axionText = "pinging...";
    this.http.get('http://monolito.net.ar:8081/', {}, {})
      .then(data => {
        this.axionButtonColor = "success";
        this.axionText = (new Date()).toLocaleTimeString();
      })
      .catch(error => {
        this.axionButtonColor = "danger";
        this.axionText = (new Date()).toLocaleTimeString();
      });
  }

  pingAllianz() {
    this.allianzButtonColor = "warning";
    this.allianzText = "pinging...";
    this.http.get('http://monolito.net.ar:8083/', {}, {})
      .then(data => {
        this.allianzButtonColor = "success";
        this.allianzText = (new Date()).toLocaleTimeString();
      })
      .catch(error => {
        this.allianzButtonColor = "danger";
        this.allianzText = (new Date()).toLocaleTimeString();
      });
  }

  refresh() {
    this.init();
  }
}
