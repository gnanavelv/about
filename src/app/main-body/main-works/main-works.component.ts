import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-works',
  templateUrl: './main-works.component.html',
  styleUrls: ['./main-works.component.scss']
})
export class MainWorksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  goToLink(url: string){
    window.open(url, "_blank");
}
}
