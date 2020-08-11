import { Component, OnInit, Input } from '@angular/core';

export enum TipoPergunta {
    BINARIA,
    BINARIA_JUSTIFICATIVA,
    BINARIA_SUB_PERGUNTAS,
    MULTIPLAESCOLHA,
    MULTIPLAESCOLHA_OUTROS,
    DISSERTATIVA,
    UNICA_ESCOLHA,
    UNICA_ESCOLHA_OUTROS,
}
export interface Pergunta {
    id: number;
    descricao: string;
    tipoPergunta: TipoPergunta;
    descJustificativa?: string;
    subPerguntas?: Pergunta[];
    escolhas?: string[];
}

@Component({
    selector: 'app-pergunta',
    templateUrl: './pergunta.component.html',
    styleUrls: ['./pergunta.component.scss'],
})
export class PerguntaComponent implements OnInit {
    @Input() pergunta: Pergunta;
    @Input() control: FormControl;
    constructor() {}

    ngOnInit() {}

    get TipoPergunta(): typeof TipoPergunta {
        return TipoPergunta;
    }
}
