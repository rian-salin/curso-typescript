export class Negociacao {
    constructor(data, quantidade, valor) {
        this.private_data = data;
        this.private_quantidade = quantidade;
        this.private_valor = valor;
    }
    get data() {
        //tipando o retorno da fanção
        return this.private_data;
    }
    get quantidade() {
        //tipando o retorno da fanção
        return this.private_quantidade;
    }
    get valor() {
        //tipando o retorno da fanção
        return this.private_valor;
    }
    get volume() {
        //tipando o retorno da fanção
        return this.private_quantidade * this.private_valor;
    }
}
