/* PROTECTED - implica que o método ou propriedade é acessível apenas internamente
dentro da classe ou qualquer classe que a estenda, mas não externamente.

O modificador de acesso protegido é semelhante ao modificador de acesso privado,
exceto que os membros protegidos podem ser acessados usando suas classes derivadas.
class Employee {
    public empName: string;
    protected empCode: number;

    constructor(name: string, code: number){
        this.empName = name;
        this.empCode = code;
    }
}
class SalesEmployee extends Employee{
    private department: string;

    constructor(name: string, code: number, department: string) {
        super(name, code);
        this.department = department;
    }
}
let emp = new SalesEmployee("John Smith", 123, "Sales");
emp.empCode; //Compiler Error

No exemplo acima, temos uma classe Employeecom dois membros, propriedade pública empNamee propriedade
protegida empCode. Criamos uma subclasse SalesEmployeeque se estende da classe pai Employee.
Se tentarmos acessar o membro protegido de fora da classe, como emp.empCode, obteremos o seguinte erro de compilação:
erro TS2445: A propriedade 'empCode' é protegida e acessível apenas dentro da classe 'Employee' e suas subclasses.
*/

export class Empresa {
  readonly nome: string; // public não necessário
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Luiz', 'Otávio');
const colaborador2 = new Colaborador('Maria', 'Miranda');
const colaborador3 = new Colaborador('João', 'Vieira');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);
console.log(empresa1);
