// system import or require
import { Component, OnInit } from '@angular/core'
import { AppState, Global } from '../shared/services/app.service'

@Component({
  templateUrl: './icon.edit.html',
  styleUrls: ['./icon.edit.css']
})
export class IconEditPage implements OnInit {


  constructor(
    public appState: AppState,
    private _global: Global) {
  }

  ngOnInit() {
  }

}