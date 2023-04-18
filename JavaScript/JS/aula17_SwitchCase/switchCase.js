function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;    //como diaSemanaTexto repete na switch, deve ser uma variável ao invés de constante

    switch (diaSemana) {        // parecido com if, retorna algo de acordo com o valor mencionado
        case 0:                 // caso valor == 0, retorna frase 'domingo'
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}

const data = new Date('1987-04-21 00:00:00'); // define uma data de referência
const diaSemana = data.getDay(); // mostra o dia da semana (0-domingo, 1-segunda, 2-terça, 3-quarta, 4-quinta, 5-sexta, 6-sábado)
const diaSemanaTexto = getDiaSemanaTexto(diaSemana); // junta o dia da semana com respectivo número
console.log(diaSemana, diaSemanaTexto); //mostra numero e dia da semana (texto)