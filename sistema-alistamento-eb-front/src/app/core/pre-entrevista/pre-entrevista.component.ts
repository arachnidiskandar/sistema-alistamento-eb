import { Component, OnInit } from '@angular/core';
import { Pergunta, TipoPergunta } from './pergunta/pergunta.component';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-pre-entrevista',
    templateUrl: './pre-entrevista.component.html',
    styleUrls: ['./pre-entrevista.component.scss'],
})
export class PreEntrevistaComponent implements OnInit {
    perguntas: Pergunta[] = [
        {
            id: 1,
            descricao: 'Você possui tatuagem?',
            tipoPergunta: TipoPergunta.BINARIA_JUSTIFICATIVA,
            descJustificativa: 'Caso positivo, em que parte do corpo?',
        },
    ];
    control = new FormControl(null);
    constructor() {}

    ngOnInit() {}
}
