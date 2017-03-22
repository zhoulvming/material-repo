import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
declare var $: any;
export type InteralStateType = {
  [key: string]: any
};

@Injectable()
export class AppState {
  _state: InteralStateType = {};

  constructor() {
  }

  // already return a clone of the current state
  get state() {
    return this._state = this._clone(this._state);
  }
  // never allow mutation
  set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }

  get(prop?: any) {
    // use our state getter for the clone
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }

  set(prop: string, value: any) {
    // internally mutate our state
    return this._state[prop] = value;
  }


  private _clone(object: InteralStateType) {
    // simple object clone
    return JSON.parse(JSON.stringify(object));
  }
}

@Injectable()
export class Global {

  private handleError(error: any): Promise<any> {
    console.error('An service error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  constructor(private _http: Http,
    public _appState: AppState) {
  }

  /**
   * 获取当前path
   */
  getCurrentPath(route) {
    let currPath = '';
    let urlArr = route.url._value;
    urlArr.forEach(function (item) {
      currPath += '/' + item.path;
    });
    return currPath;
  }

  /**
   * 页面初始化函数
   */
  init() {

    /**
     * 下拉框组件初始化
     */
    $('.ui.dropdown').dropdown();




  }



}