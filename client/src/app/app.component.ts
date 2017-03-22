import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router';
import { AppState, Global } from './shared/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [Global]
})
export class AppComponent {


  // 构造函数
  constructor(
    public _global: Global,
    public _appState: AppState,
    private route: ActivatedRoute,
    private router: Router
  ) {


  }

  // 页面初始化
  ngOnInit() {
  }

  

}
