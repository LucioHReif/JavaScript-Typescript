/* Um tipo de interseção cria um novo tipo combinando vários tipos existentes. O novo tipo tem todas as características dos tipos existentes.
Para combinar tipos, você usa o &operador da seguinte forma:
type typeAB = typeA & typeB;

O typeABterá todas as propriedades de typeAe typeB.
Observe que o tipo união usa o | operador que define uma variável que pode conter um valor de typeAoutypeB
let varName = typeA | typeB; // union type
-----------------------------------------------------------------------------------------------------------------------------------
Exemplo2:
Suponha que você tenha três interfaces: BusinessPartner, Identitye Contact.
interface BusinessPartner {
    name: string;
    credit: number;
}
interface Identity {
    id: number;
    name: string;
}
interface Contact {
    email: string;
    phone: string;
}

O seguinte define dois tipos de interseção:
type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;

O Employeetipo contém todas as propriedades do tipo Identitye Contact:
type Employee = Identity & Contact;
let e: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'
};

E o Customertipo contém todas as propriedades do tipo BusinessPartnere Contact:
type Customer = BusinessPartner & Contact;
let c: Customer = {
    name: 'ABC Inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
};

Posteriormente, se você quiser implementar vendas de funcionários, poderá criar um novo tipo de interseção que
contenha todas as propriedades de Identity, Contacte BusinessPartnertipos:
type Employee = Identity & BusinessPartner & Contact;
let e: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684',
    credit: 1000
};
-----------------------------------------------------------------------------------------------------------------------------------
--> Type order:
Observe ambos BusinessPartnere Identity tenha a propriedade namecom o mesmo tipo. Se não o fizerem, você terá um erro.
Quando você cruza tipos, a ordem dos tipos não importa. Por exemplo:
type typeAB = typeA & typeB;
type typeBA = typeB & typeA;
Neste exemplo, typeABe typeBAtêm as mesmas propriedades.  */

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Intersecao = AB & AC & AD;

const pessoa: Pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

console.log(pessoa);

// Module mode
export { pessoa };
