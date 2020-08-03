import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PreEntrevistaComponent } from './core/pre-entrevista/pre-entrevista.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [AppComponent, PreEntrevistaComponent],
    imports: [BrowserModule, AppRoutingModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
