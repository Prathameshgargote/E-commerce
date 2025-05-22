import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OfferBarComponent } from './shared/components/offer-bar/offer-bar.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { MaterialModule } from './shared/material/material.module';
import { AuthComponent } from './shared/components/auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './shared/components/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { CountdownTimerComponent } from './shared/components/countdown-timer/countdown-timer.component';
import { CardComponent } from './shared/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    OfferBarComponent,
    NavbarComponent,
    AuthComponent,
    HomeComponent,
    FooterComponent,
    CarouselComponent,
    CountdownTimerComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
