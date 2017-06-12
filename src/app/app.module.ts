import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PokeTypesComponent } from './poke-types/poke-types.component';
import { PokeTypesService } from './services/poke-types/poke-types.service';
import { PokeTyepDetailsService } from './services/poke-type-details/poke-type-details.service';
@NgModule({
  declarations: [
    AppComponent,
    PokeTypesComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [PokeTypesService, PokeTyepDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
