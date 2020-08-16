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
