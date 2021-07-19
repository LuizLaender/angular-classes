import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ContentModule } from './content/content.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MenuDashComponent } from './menu/menu-dash/menu-dash.component';
import { ToggleButtonComponent } from './menu/toggle-button/toggle-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MenuDashComponent,
    ToggleButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContentModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
