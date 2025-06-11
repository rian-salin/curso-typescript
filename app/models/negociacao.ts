export class Negociacao {
  private_data: Date;
  private_quantidade: number;
  private_valor: number;

  constructor(data: Date, quantidade: number, valor: number) {
    this.private_data = data;
    this.private_quantidade = quantidade;
    this.private_valor = valor;
  }

  get data(): Date {
    //tipando o retorno da fanção
    return this.private_data;
  }

  get quantidade(): number {
    //tipando o retorno da fanção
    return this.private_quantidade;
  }

  get valor(): number {
    //tipando o retorno da fanção
    return this.private_valor;
  }

  get volume(): number {
    //tipando o retorno da fanção
    return this.private_quantidade * this.private_valor;
  }
}
