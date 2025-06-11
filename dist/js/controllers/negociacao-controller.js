import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adiciona() {
        //tipando o retorno da fanção
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
    }
    criaNegociacao() {
        //tipando o valor de retorno
        //convertendo o Valor Strig de #data para seu valor de DATE
        const exp = /-/g;
        //convertendo o Valor Strig de #data para seu valor de DATE
        const date = new Date(this.inputData.value.replace(exp, ","));
        //convertendo o Valor Strig de #quantidade para seu valor de INTEIRO
        const quantidade = parseInt(this.inputQuantidade.value);
        //convertendo o Valor Strig de #valor para seu valor de FLOAT
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
}
