/* Enums são um dos poucos recursos do TypeScript que não é uma extensão de nível de tipo do JavaScript. Enums permitem que um
desenvolvedor defina um conjunto de constantes nomeadas. O uso de enums pode facilitar a documentação da intenção ou criar
um conjunto de casos distintos. O TypeScript fornece enumerações numéricas e baseadas em string.
Existem três tipos de enums:

Enum numérica - baseadas em números, ou seja, elas armazenam valores de string como números.
nums podem ser definidos usando a palavra-chave enum. Digamos que queremos armazenar um conjunto
de tipos de mídia de impressão. A enumeração correspondente no TypeScript seria:
enum PrintMedia {
  Newspaper,
  Newsletter,
  Magazine,
  Book
}
No exemplo acima, temos uma enumeração chamada PrintMedia. A enumeração tem quatro valores: Newspaper, Newsletter, Magazine e Book.
Aqui, os valores de enumeração começam em zero e aumentam em 1 para cada membro. Seria representado como:
Newspaper = 0
Newsletter = 1
Magazine = 2
Book = 3

Enums sempre recebem valores numéricos quando são armazenados. O primeiro valor sempre assume o valor numérico de 0, enquanto os
outros valores na enumeração são incrementados em 1. Também temos a opção de inicializar o primeiro valor numérico nós mesmos.
Por exemplo, podemos escrever o mesmo enum como:
enum PrintMedia {
  Newspaper = 1,
  Newsletter,
  Magazine,
  Book
}

O primeiro membro, Newspaper, é inicializado com o valor numérico 1. Os membros restantes serão incrementados em 1 a partir do
valor numérico do primeiro valor. Assim, no exemplo acima, Newsletter seria 2, Revista seria 3 e Livro seria 4. Não é necessário
atribuir valores sequenciais aos membros Enum. Eles podem ter qualquer valor.
enum PrintMedia {
    Newspaper = 1,
    Newsletter = 5,
    Magazine = 5,
    Book = 10
}

O enum pode ser usado como um parâmetro de função ou tipo de retorno, conforme mostrado abaixo:
enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
}
function getMedia(mediaName: string): PrintMedia {
    if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
 }
let mediaType: PrintMedia = getMedia('Forbes'); // returns Magazine
No exemplo acima, declaramos um enum PrintMedia. Em seguida, declaramos uma função getMedia()que recebe um parâmetro
de entrada mediaNamedo tipo string. Esta função retorna um enum PrintMedia. Na função, verificamos o tipo de mídia.
Se o nome da mídia corresponder a 'Forbes' ou 'Outlook', retornamos enum member PrintMedia.Magazine.

Enums computados:
As enumerações numéricas podem incluir membros com valor numérico calculado. O valor de um membro de enumeração pode ser uma constante ou calculado. A enumeração a seguir inclui membros com valores calculados.

Exemplo: Enum computado
enum PrintMedia {
    Newspaper = 1,
    Newsletter = getPrintMediaCode('newsletter'),
    Magazine = Newsletter * 3,
    Book = 10
}

function getPrintMediaCode(mediaName: string): number {
    if (mediaName === 'newsletter') {
        return 5;
    }
}
PrintMedia.Newsetter; // returns 5
PrintMedia.Magazine; // returns 15

Quando a enumeração inclui membros calculados e constantes, os membros de enumeração não iniciados devem vir primeiro ou devem vir
depois de outros membros inicializados com constantes numéricas. O seguinte dará um erro.
enum PrintMedia {
    Newsletter = getPrintMediaCode('newsletter'),
    Newspaper, // Error: Enum member must have initializer
    Book,
    Magazine = Newsletter * 3,
}

A enumeração acima pode ser declarada como abaixo.
enum PrintMedia {
    Newspaper,
    Book,
    Newsletter = getPrintMediaCode('newsletter'),
    Magazine = Newsletter * 3
}
// or
enum PrintMedia {
    Newsletter = getPrintMediaCode('newsletter'),
    Magazine = Newsletter * 3,
    Newspaper = 0,
    Book,
}
-----------------------------------------------------------------------------------------------------------------------------------------------------------
Enum de string -  os valores de enumeração são inicializados com valores de sequência em vez de valores numéricos.
Os benefícios de usar enums de string é que enums de string oferecem melhor legibilidade. Se fôssemos depurar um
programa, seria mais fácil ler valores de string em vez de valores numéricos.
enum PrintMedia {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}
// Access String Enum
PrintMedia.Newspaper; //returns NEWSPAPER
PrintMedia['Magazine'];//returns MAGAZINE
-----------------------------------------------------------------------------------------------------------------------------------------------------------
Enum heterogênea - são enumerações que contêm valores numéricos e de cadeia de caracteres.  */

enum Cores {
  VERMELHO = 10, // 10
  AZUL = 100, // 100
  AMARELO = 200, // 200
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

export function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}
escolhaACor(123456);
