import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Rotas } from './shared/route';
import { PreEntrevistaComponent } from './core/pre-entrevista/pre-entrevista.component';

const routes: Routes = [
    { path: Rotas.PRE_ENTREVISTA, component: PreEntrevistaComponent },
    { path: '**', redirectTo: Rotas.PRE_ENTREVISTA },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
