import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterImageComponent } from './components/character-image/character-image.component';
import { CharacterFormComponent } from './components/character-form/character-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterImageComponent,
    CharacterFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
