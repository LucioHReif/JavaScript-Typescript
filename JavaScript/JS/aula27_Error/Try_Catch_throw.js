function soma(x, y) {
    if (
        typeof x !== 'number' ||      // confere se x ou y são numeros
        typeof y !== 'number'
    ) {
        throw new Error('x e y precisam ser números.'); // mensagem se x ou y não forem numeros
    }                                                  // parecido com console.log
    return x + y;       //retorna soma entre x e y
}

try {       // executado quando não há erros
    console.log(soma(1, 2));
    // console.log(soma('1', 2));
} catch (error) { // executado quando há erros
    console.log(error);
    console.log('Alguma coisa mais amigável pro usuário.');
}