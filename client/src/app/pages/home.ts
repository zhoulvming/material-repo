import { Component, OnInit } from '@angular/core';
import { AppState, Global } from '../shared/services/app.service';

@Component({
  templateUrl: './home.html'
})
export class HomePage implements OnInit {
  constructor(public _appState: AppState, private _global: Global) { }

  ngOnInit() {
    // 页面一些共通组件的初始化和数据获取
    this._global.init();
  }

  

}