// Métodos de validação de CPF usando classes
// CPF: 705.484.450-52 070.987.720-03
class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '')
    });
  }

  éSequência() {  //metodo que repete o primeiro caractere 11 vezes seguidas (sequencia)
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo; //começa no caractere 0 e repete 11 vezes
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
    const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
    this.novoCPF = cpfSemDigitos + digito1 + digito2;
  }

  static geraDigito(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    for (let stringNumerica of cpfSemDigitos) {
      total += reverso * Number(stringNumerica);
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';
  }

  valida() { //metodo de validação
    if (!this.cpfLimpo) return false;  //se não cpfLimpo retorna falso
    if (typeof this.cpfLimpo !== 'string') return false;  //se for string retorna falso
    if (this.cpfLimpo.length !== 11) return false;  //se quantidade dos caracteres for diferente de 11 retorna falso
    if (this.éSequência()) return false;  //se for sequencia (só numeros iguais) retorna falso
    this.geraNovoCpf();

    return this.novoCPF === this.cpfLimpo; //novoCPF é instanciado como cpfLimpo, que passará pela validação
  }
}

let validacpf = new ValidaCPF('070.987.720-03');
// validacpf = new ValidaCPF('999.999.999-99');

if (validacpf.valida()) {  //puxa o metodo validar e, se todas retornarem true, então mostra "CPF válido"
  console.log('CPF válido');
} else {
  console.log('CPF inválido'); //se pelo menos uma das afirmações forem falsas, então mostra "CPF inválido"
}
