/* SOLID é o acrônimo para cinco princípios da Programação Orientada a Objetos (POO) e veio para facilitar o
desenvolvimento de softwares, deixando-os mais fáceis de manter e de estender. Os 5 princípios são:
S ingle Responsibility Principle — Princípio de responsabilidade única.
O pen/Closed Principle — Princípio de Aberto/Fechado.
L iskov Substitution Principle — Princípio da Substituição de Liskov.
I nterface Segregation Principle — Princípio da Segregação de Interface.
D ependency Inversion Principle — Princípio da Inversão de Dependência.
------------------------------------------------------------------------------------------------------------------------------------------
** Princípio de responsabilidade única (Single Responsibility Principle) **
“Uma classe deve ter um, e somente um motivo para existir.”

Este princípio indica que toda classe, todo método, função ou componente de seu código deve ter uma única e exclusiva responsabilidade.
Uma classe que toma pra si muitas responsabilidades dentro da aplicação, trás baixa coesão ao seu código resultando em
baixo nível de manutenabilidade. Procure sempre segregar as responsabilidades de suas aplicações em outras classes a modo que fique fácil
de entender o papel dessa classe em sua aplicação numa simples leitura do código. Se possível, sempre construa métodos que realizem apenas
uma única função. Seja objetivo no desenvolvimento de seus métodos.

-> Violando o Princípio
Segue um exemplo de código que viola o Princípio de Responsabilidade Única em Typescript:
class Atividade {
  private baseDados: Database;

  constructor(private nome: string, private prazo: Date) {
    this.baseDados = Database.connect("admin:password@database-name", ["atividades"]);
  }

  obterNome() {
    return this.nome + "(" + this.prazo + ")";
  }

  salvar() {
    this.baseDados.atividades.save({ title: this.nome, date: this.prazo });
  }
}

--> Cumprindo o Princípio
Para este exemplo a maneira correta é dividir as responsabilidades de obter o nome da tarefa e a de salvar um registro no Banco em duas
classes distintas, classe Atividade e RepositorioAtividade respectivamente. Como mostra o exemplo abaixo:
class Atividade {

  constructor(private nome: string, private prazo: Date) {

  }

  obterNome() {
    return this.nome + "(" + this.prazo + ")";
  }

}

class RepositorioAtividade {
  private baseDados: Database;

  constructor(){
    this.baseDados = Database.connect("admin:password@database-name", ["atividades"]);
  }

  salvar() {
    this.baseDados.atividades.save({ title: this.nome, date: this.prazo });
  }
}
------------------------------------------------------------------------------------------------------------------------------------------
Princípio de Aberto/Fechado
“Você deve ser capaz de estender o comportamento de uma classe sem modifica-la.”
Este princípio defende a ideia que a classe deve ter a Abertura para extensão, mas Fechamento para modificação. Isso é possível desenvolver
utilizando princípios de Orientação a Objeto como herança e composição.

--> Cumprindo o Princípio
Abaixo temos um exemplo de classe de CartaoCredito que possui métodos de obterCartao(), obterExpiracao() e descontoMensal().
Temos outras duas categorias de cartão de crédito que disponibilizam um desconto mensal diferenciado, que são as categorias Silver e Gold.
class CartaoCredito {

  private Codigo: String;
  private Expiracao: Date;
  protected CustoMensal: number;

  constructor(codigo: String, expiracao: Date, custoMensal: number) {
      this.Codigo = codigo;
      this.Expiracao = expiracao;
      this.CustoMensal = custoMensal;
  }

  obterCodigo(): String {
      return this.Codigo;
  }

  obterExpiracao(): Date {
      return this.Expiracao;
  }

  descontoMensal(): number {
      return this.CustoMensal * 0.02;
  }

}

class CartaoCreditoGold extends CartaoCredito {

  descontoMensal(): number {
    return this.CustoMensal * 0.05;
  }

}

class CartaoCreditoSilver extends CartaoCredito {

  descontoMensal(): number {
      return this.CustoMensal * 0.03;
  }

}

--> Violando o Princípio
Abaixo temos o mesmo cenário anterior, porém mudando totalmente o comportamento e composição da classe CartaoCredito:
class CartaoCredito {

  private Codigo: String;
  private Expiracao: Date;
  protected CustoMensal: number;

  constructor(codigo: String, expiracao: Date, custoMensal: number) {
      this.Codigo = codigo;
      this.Expiracao = expiracao;
      this.CustoMensal = custoMensal;
  }

  obterCodigo(): String {
      return this.Codigo;
  }

  obterExpiracao(): Date {
      return this.Expiracao;
  }

  descontoMensal(): number {
      return this.CustoMensal * 0.02;
  }

  descontoMensalSilver(): number {
      return this.CustoMensal * 0.03;
  }

  descontoMensalGold(): number {
      return this.CustoMensal * 0.05;
  }

}
------------------------------------------------------------------------------------------------------------------------------------------
Princípio da Substituição de Liskov
“Classes derivadas devem ser facilmente substituídas pelas classes base.”
Este conceito foi introduzido por Barbara Liskov em 1987, no qual defende a ideia que uma classe base pode ser substituída em qualquer
momento por suas classes herdadas sem ser modificada.

--> Cumprindo o Principio
Abaixo temos um exemplo de classe Pessoa que tem as propriedades de Nome e Sobrenome, com uma ação de DizerSaudacao.
Para cada nacionalidade foi criada uma classe que herda de Pessoa, e diz sua saudação conforme sua língua.
abstract class Pessoa {
    Nome: string;
    Sobrenome: string;
    // @returns Retorna a Saudação da Pessoa
    abstract DizerSaudacao(): string;
}

class Brasileiro extends Pessoa {
    DizerSaudacao(): string {
        return "Bom dia! Eu sou o " + this.Nome + " " + this.Sobrenome;
    }
}
class Americano extends Pessoa {
    DizerSaudacao(): string {
        return "Good Morning! I'm " + this.Nome + " " + this.Sobrenome;
    }
}
class Italiano extends Pessoa {
    DizerSaudacao(): string {
        return "Buongiorno! Sono " + this.Nome + " " + this.Sobrenome;
    }
}

class EscritaSaudacao {
    EscreverSaudacao(pessoa: Italiano): string {
        return pessoa.DizerSaudacao();
    }
}

NOTA: Vale citar que é possível cumprir esse princípio não só utilizando classes abstratas como mencionado acima.
Também é possível cumprir utilizando interfaces ou até classes base simples.
------------------------------------------------------------------------------------------------------------------------------------------
Princípio da Segregação de Interface
“Crie pequenas interfaces granulares que são específicas do cliente.”
Esse princípio defende que devemos segregar ao máximo as nossas interfaces, tomando como partida de segregação a responsabilidade que essa
nova interface irá assumir. Devemos evitar interfaces muito genéricas, elas devem cumprir a sua única responsabilidade proposta.

--> Violando o princípio
Abaixo temos um exemplo de interface chamado Impressora que possui as funções de copiar, imprimir e grampear. Porém ao implementar uma
impressora simples, que não copia e nem grampeia, a classe se torna incoerente. Segue exemplo:
interface Impressora {
  copiarDocumento();
  imprimirDocumento(documento: Documento);
  grampearDocumento(documento: Documento, grampo: Grampo);
}

class ImpressoraSimples implements Impressora {
  public copiarDocumento() {
    // implementação ...
  }

  public imprimirDocumento(documento: Documento) {
    // implementação ...
  }

  public grampearDocumento(documento: Documento, grampo: Grampo) {
    // implementação ...
  }
}

--> Cumprindo o Princípio
Segregando as interfaces por cada responsabilidade fica mais fácil de desenvolver um código coeso. Veja o exemplo abaixo:

interface Impressora {
  imprimirDocumento(documento: Documento);
}

interface Copiadora {
  copiarDocumento();
}

interface Grampeador {
  grampearDocumento(documento: Documento, grampo: Grampo);
}

class ImpressoraSimples implements Impressora {
  public imprimirDocumento(documento: Documento) {
    // implementação ...
  }
}

class ImpressoraMultifuncional implements Impressora, Copiadora {
  public imprimirDocumento(documento: Documento) {
    // implementação ...
  }

  public copiarDocumento() {
    // implementação ...
  }
}

class SuperImpressora implements Impressora, Copiadora, Grampeador {
  public copiarDocumento() {
    // implementação ...
  }

  public imprimirDocumento(documento: Documento) {
    // implementação ...
  }

  public grampearDocumento(documento: Documento, grampo: Grampo) {
    // implementação ...
  }
}
------------------------------------------------------------------------------------------------------------------------------------------
Princípio da Inversão de Dependência
“Sempre dependa de abstrações, nunca de implementações concretas.”
O Princípio de Inversão de Dependência indica que módulos de alto nível não devem depender de módulos de baixo nível, mas ao invés disso,
depender de abstrações. Em poucos miúdos, procure sempre depender de interfaces e não de classes concretas.

--> Violando o princípio
Abaixo temos dois exemplos no qual as dependências são concretas. Primeiro exemplo:
class InserirUsuarioController extends BaseController {

  private emailService: SendGridService; // <- classe concreta
  constructor (emailService: SendGridService) { // <- classe concreta
    this.emailService = emailService;
  }

  protected enviarEmail (): void {

    // envia mail
    const email = new Email(...)
    this.emailService.sendMail(email);
  }
}

-> Segundo exemplo:
import { SendGridService } from '../../services'; // <- Código Fonte da dependência

class InserirUsuarioController extends BaseController {

  private emailService: SendGridService = new SendGridService(); // <- classe concreta

  constructor () {
  }

  protected enviarEmail (): void {
    // enviar email
    const email = new Email(...)
    this.emailService.sendMail(mail);
  }
}

--> Cumprindo o princípio
A seguir temos a mesma implementação citada acima, porém as dependências são abstrações e não implementações:
interface IEmailService {
  enviarEmail() : void;
}

class InserirUsuarioController extends BaseController {

  private emailService: IEmailService; // <- abstração
  constructor (emailService: IEmailService) { // <- abstração
    this.emailService = emailService;
  }

  protected enviarEmail (): void {
    // envia mail
    const email = new Email(...)
    this.emailService.sendMail(email);
  }
}

Nota: Vale lembrar que quando temos uma dependência de abstração é recomendável providenciar a implementação de dependências nas abstrações
durante o tempo de execução da aplicação. Em qualquer linguagem existem frameworks que fazem esse trabalho.
Já que estamos falando de Typescript, recomendo a utilização do Inversify que tem sido muito popular na comunidade.
-------------------------------------------------------------------------------------------------------------------
Vantagens e desvantagens do S.O.L.I.D.
Vantagens:
- Código modular
- Código reutilizável (D.R.Y - Don't repeat yourself)
- Código testável, baixo acoplamento
- Baixo acoplamento e alta coesão
- Código expansível
- Separations of concerns (Separação de conceitos)
- Fácil manutenção

Desvantagens:
- Complexidade
- Quantidade de código digitado aumenta
- Tempo de desenvolvimento aumenta bastante
- Tenha cuidados com: YAGNI, KISS (You aren't gonna need it, Keep it simple, stupid!)       */
