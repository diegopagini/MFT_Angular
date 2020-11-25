import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [AppComponent, PlayersComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    CalendarModule,
    TableModule,
    InputTextModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
