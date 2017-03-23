
// system module
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

// common module
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { AppState, InteralStateType, Global } from './shared/services/app.service'

// page module
import { NoContentPage } from './pages/no-content'
import { HomePage } from './pages/home'
import { IconEditPage } from './pages/icon.edit'
import { ComponentNewPage } from './pages/component.new'

// Application wide providers
const APP_PROVIDERS = [
  AppState, Global
]

@NgModule({
  declarations: [
    AppComponent,
    NoContentPage,
    HomePage,
    IconEditPage,
    ComponentNewPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }