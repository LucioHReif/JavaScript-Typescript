/* Interface TypeScript vs classe abstrata
Classe Abstrata
- Alguns membros são abstratos e alguns são totalmente implementados.
- A classe abstrata não suporta múltiplas heranças.
- Classe abstrata compilada para funções JavaScript.
- Classes abstratas são relacionadas. Por exemplo, ViewModelBase é uma classe abstrata, então sabemos que esta classe herdará apenas por ViewModels.

Interface abstrata
- Todos os membros são abstratos.
- As interfaces suportam múltiplas heranças.
- A interface TypeScript não possui código JavaScript, o que significa que está disponível apenas no TypeScript
e não produz nenhum código no arquivo JavaScript compilado.
- As interfaces são de natureza genérica. Eles podem ser implementados por qualquer classe, por exemplo, a interface IClone
pode ser implementada por qualquer classe, como objetos de negócios, classes de banco de dados.
----------------------------------------------------------------------------------------------------------------------------------------------------------
Sintaxe
abstract class BaseEmployee {
    abstract doWork(): void;

    workStarted(): void {
        console.log('work started.');
    }
}
No exemplo acima, criamos uma classe abstrata. O primeiro método doWork é abstrato e colocamos a palavra-chave abstract antes do nome do método.
O método abstrato não possui nenhuma implementação. O segundo método workStarted tem implementação e não é um método abstrato.
----------------------------------------------------------------------------------------------------------------------------------------------------------
Construtor
Na classe abstrata, podemos escrever um construtor que é executado automaticamente quando o usuário cria uma nova instância da classe derivada.
A função construtora sempre tem o mesmo nome de construtor e pode ter parâmetros. Segue abaixo o exemplo do construtor:
abstract class BaseEmployee {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
O construtor é sempre usado para inicializar os valores das variáveis e o trabalho de configuração do objeto. Acima, temos um construtor de
BaseEmployee que recebe dois parâmetros firstName e lastName. No construtor, atribuímos valores de parâmetro às nossas variáveis.
----------------------------------------------------------------------------------------------------------------------------------------------------------
Cass derivado
abstract class BaseEmployee {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    abstract doWork(): void;
}

class Employee extends BaseEmployee {
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    doWork(): void {
        console.log(`${this.lastName}, ${this.firstName} doing work...`);
    }
}

let emp = new Employee('Dana', 'Ryan');
emp.doWork(); //Print Ryan, Dana doing work...

No exemplo acima, criamos uma classe abstrata BaseEmployee. Temos um método abstrato doWork que não fornecemos nenhuma implementação.
A classe Employee estende a classe BaseEmployee. No construtor da classe Employee, chamamos o construtor BaseEmployee usando o método super.
O método super é usado para chamar o construtor da classe base. O método super usa os mesmos parâmetros definidos no construtor da classe base.
Nas duas últimas linhas, criamos uma instância da classe Employee e chamamos o método doWork.
----------------------------------------------------------------------------------------------------------------------------------------------------------
Implementar Interface
Uma classe abstrata pode implementar uma ou mais interfaces. Você pode aprender mais sobre interfaces aqui.
Abaixo está o exemplo de implementação de interface por classe abstrata.
interface IName {
    firstName: string
    lastName: string;
}

interface IWork {
    doWork(): void;
}

abstract class BaseEmployee implements IName, IWork {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    abstract doWork(): void;
}

class Employee extends BaseEmployee {
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    doWork(): void {
        console.log(`${this.lastName}, ${this.firstName} doing work...`);
    }
}

let emp: IWork = new Employee('Dana', 'Ryan');
emp.doWork();
No exemplo acima, criamos duas interfaces IName e IWork. Ambas as interfaces são implementadas pela classe abstrata
BaseEmployee usando a palavra-chave implements na linha destacada 10. A classe Employee estende a classe BaseEmployee.
Na linha 32, criamos uma variável emp da interface IWork e atribuímos uma nova instância da classe Employee.
Agora, o único membro disponível na variável emp é doWork, pois o tipo de dados da variável emp é a interface IWork.
------------------------------------------------------------------------------------------------------------------------------------
TypeScript - classe abstrata
Defina uma classe abstrata em Typescript usando a abstractpalavra-chave. As classes abstratas são principalmente para herança,
onde outras classes podem derivar delas. Não podemos criar uma instância de uma classe abstrata. Uma classe abstrata normalmente
inclui um ou mais métodos abstratos ou declarações de propriedade. A classe que estende a classe abstrata deve definir todos os métodos abstratos.
A seguinte classe abstrata declara um método abstrato finde também inclui um método normal display.

abstract class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    display(): void{
        console.log(this.name);
    }

    abstract find(string): Person;
}
class Employee extends Person {
    empCode: number;

    constructor(name: string, code: number) {
        super(name); // must call super()
        this.empCode = code;
    }

    find(name:string): Person {
        // execute AJAX request to find an employee from a db
        return new Employee(name, 1);
    }
}
let emp: Person = new Employee("James", 100);
emp.display(); //James
let emp2: Person = emp.find('Steve');

No exemplo acima, Personé uma classe abstrata que inclui uma propriedade e dois métodos, um dos quais é declarado como abstrato.
O find()método é um método abstrato e, portanto, deve ser definido na classe derivada. A Employeeclasse deriva da Personclasse e
por isso deve definir o find()método como abstrato. A Employeeclasse deve implementar todos os métodos abstratos da Personclasse,
caso contrário, o compilador apresentará um erro.

Observação:
A classe que implementa uma classe abstrata deve chamar super()o construtor.
A classe abstrata também pode incluir uma propriedade abstrata, conforme mostrado abaixo.
abstract class Person {
    abstract name: string;

    display(): void{
        console.log(this.name);
    }
}

class Employee extends Person {
    name: string;
    empCode: number;

    constructor(name: string, code: number) {
        super(); // must call super()

        this.empCode = code;
        this.name = name;
    }
}
let emp: Person = new Employee("James", 100);
emp.display(); //James       */

export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(
      `${this.emoji} - ${this.nome} agora tem ${this.vida} de vida...`,
    );
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(this.emoji + ' GUERREIRAAAAAA AOOOOOO ATAAAQUEEE!!');
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';

  bordao(): void {
    console.log(this.emoji + ' MONNNNNNNNNNNSSSTERRRRRRRRRRRRRR!!!!');
  }
}

const guerreira = new Guerreira('Guereira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
