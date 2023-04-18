function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    inicia() {
      this.cliqueBotoes();
      this.pressionaBackSpace();
      this.pressionaEnter();
    },

    pressionaBackSpace() {
      this.display.addEventListener('keydown', e => { //adiciona evento à tecla pressionada
        if (e.keyCode === 8) { //chave da tecla 8
          e.preventDefault();
          this.clearDisplay(); //se for tecla 8 limpa ("apaga") o display
        }
      });
    },

    pressionaEnter() { //método para realizar conta ao pressionar Enter
      this.display.addEventListener('keyup', e => { //adiciona evento à tecla pressionada
        if (e.keyCode === 13) { //chave da tecla 13
          this.realizaConta(); //se for tecla 13 (Enter) realiza a conta
        }
      });
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) { //se for NaN, mostra "Conta Inválida"
          alert('Conta inválida');
          return;
        }

        this.display.value = String(conta); //se tiver letras (string)
      } catch (e) {                        //da um alert "Conta inválida"
        alert('Conta inválida');
        return;
      }
    },

    clearDisplay() { //método que limpa (deixa a caixa em branco)
      this.display.value = ''; //display fica em branco ("como se estivesse apagado")
    },

    apagaUm() { //método para apagar numeros um de cada vez
      this.display.value = this.display.value.slice(0, -1);
    },


    cliqueBotoes() {
      document.addEventListener('click', e => { //adiciona um evento de click de acordo 
        const el = e.target;                    //com o valor do botão

        if (el.classList.contains('btn-num')) { //se for um numero vai mostrar o n° cliquado
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains('btn-clear')) { //se for o C vai apagar todo o display
          this.clearDisplay();
        }

        if (el.classList.contains('btn-del')) { //se for o Del(<<) vai apagar os
          this.apagaUm();                      //numeros um por um
        }

        if (el.classList.contains('btn-eq')) { //ao clickar no igual (=) realiza a conta
          this.realizaConta();                // e mostra o resultado
        }

        this.display.focus(); //foca no display para poder realzar mais contas sem precisar 
      });                     //clickar na caixa para realizar cada conta
    },

    btnParaDisplay(valor) {
      this.display.value += valor; //mostra o valor após cada conta
    }

  };
}

const calculadora = criaCalculadora(); //executa função
calculadora.inicia(); //executa método
