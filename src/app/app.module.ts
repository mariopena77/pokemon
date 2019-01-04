import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CoreModule } from "./core/core.module";
import { AuthModule } from "./auth/auth.module";
//import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
//import { InMemoryDataService } from "./data-api/books-dummy-api";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from "@angular/fire/database";

import { routes } from "./routes";
import { environment } from "../environments/environment";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(routes),
    AuthModule,
    HttpModule,
    HttpClientModule,
    /** HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        delay: 3000
      }
    ),*/
    AngularFireModule.initializeApp(environment.firebaseConfig, environment.firebaseConfig.projectId),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
