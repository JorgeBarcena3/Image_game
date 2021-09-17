import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderGameComponent } from './header-game/header-game.component';
import { FooterGameComponent } from './footer-game/footer-game.component';
import { BodyGameComponent } from './body-game/body-game.component';
import { WeolcomeDialogComponent } from './weolcome-dialog/weolcome-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderGameComponent,
    FooterGameComponent,
    BodyGameComponent,
    WeolcomeDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
