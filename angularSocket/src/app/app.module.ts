import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { FormsModule } from '@angular/forms';
import { NgForm }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { MessageService } from './message.service';
import { SocketioService } from './socketio.service';

const appRoutes: Routes = [
  { path: 'discussion', component: DiscussionComponent },
  { path: 'authentification', component: AuthentificationComponent },
  { path: '', component: DiscussionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DiscussionComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    MessageService,
    SocketioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
