import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PreEntrevistaComponent } from './core/pre-entrevista/pre-entrevista.component';
import { SharedModule } from './shared/shared.module';
import { PerguntaComponent } from './core/pre-entrevista/pergunta/pergunta.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent, PreEntrevistaComponent, PerguntaComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
