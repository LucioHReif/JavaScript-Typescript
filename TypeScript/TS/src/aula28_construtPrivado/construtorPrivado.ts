/* Alterar o escopo de um construtor para private remove nossa capacidade de usar a palavra-chave new
class User {
  public name: string;

  private constructor (name: string) {
    this.name = name;
  }
}
const user: User = new User('Khalil Stemmler');  // Error
------------------------------------------------------------------------------------------------------------------------------
Para declarar um construtor privado no TypeScript, precisamos prefixar a palavra-chave private na declaração do construtor.
Um construtor privado não pode ser criado de fora da classe. Também é importante observar que quando declaramos um construtor
privado, não podemos criar várias instâncias de uma classe (padrão singleton).
class Singleton {
  private constructor() {}
}
let singleton = new Singleton(); // NOT ALLOWED

Typescript irá lançar um erro, Constructor of class 'Singleton' is private and only accessible within the class declaration.
Portanto, a questão aqui é: como podemos criar uma instância de dentro de uma classe?
Podemos usar a propriedade estática para criar uma instância da classe Singleton. Primeiro, declararemos um campo privado
estático chamado instance que será do tipo Singleton. Em seguida, declararemos um método estático chamado getInstance() que
verificará se uma instância da classe Singleton foi criada. Se não for criado, ele instanciará o objeto.

class Singleton {
  private static instance: Singleton;

  private constructor(public name: string) {}

  static getInstance() {
    if (this.instance) return this.instance;
    this.instance = new Singleton("Bob");
    return this.instance;
  }
}
let singleton = Singleton.getInstance();
console.log(singleton); // Singleton {name: 'Bob'}

Uma vez criada a instância, o método getInstance() sempre retornará o objeto que foi criado durante a chamada inicial.
Dessa forma, o método construtor privado não pode criar várias instâncias da classe.

let singleton1 = Singleton.getInstance(); // Singleton {name: 'Bob'}
let singleton2 = Singleton.getInstance(); // Singleton {name: 'Bob'}
let singleton3 = Singleton.getInstance(); // Singleton {name: 'Bob'}

Chamar getInstance() várias vezes não criará uma nova instância.                */

// Singleton - GoF | Factory Method - GoF
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Retornando instância já criada.');
      return Database.database;
    }
    console.log('Criando nova instância.');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();

const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();

const db3 = Database.getDatabase('localhost', 'root', '123456');
db3.connect();

const db4 = Database.getDatabase('localhost', 'root', '123456');
db4.connect();
