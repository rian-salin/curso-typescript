export class Negociacao {
    constructor(data, quantidade, valor) {
        this.private_data = data;
        this.private_quantidade = quantidade;
        this.private_valor = valor;
    }
    get data() {
        return this.private_data;
    }
    get quantidade() {
        return this.private_quantidade;
    }
    get valor() {
        return this.private_valor;
    }
    get volume() {
        return this.private_quantidade * this.private_valor;
    }
}
