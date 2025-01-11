import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { MessageCardComponent } from './components/message-card/message-card.component';
import {MatCardModule} from '@angular/material/card';
import { CarrosselComponent } from './components/carrossel/carrossel.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NguCarouselModule } from '@ngu/carousel';
import { MatDialogModule } from '@angular/material/dialog';
import { MessageModalComponent } from './components/message-modal/message-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessageCardComponent,
    CarrosselComponent,
    MessageModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,
    FormsModule,
    MatProgressBarModule,
    NguCarouselModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
