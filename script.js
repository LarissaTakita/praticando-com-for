//1 
function teste1 () {
    console.clear();
    console.log('Teste 1 - ⭕Contagem simples');
        for (let i = 1; i <= 10; i++) {
            console.log(i);
        }
}

//2
function teste2 () {
    console.clear();
    console.log('Teste 2 - ⭕Contagem regressiva');
        for (let i = 10; i >= 1; i--) {
            console.log(i);
        }
}


//3
function teste3 () {
    console.clear();
    console.log('Teste 3 - ⭕Números pares');
        for (let i = 0; i <= 10; i +=2) {
            console.log(i);
        }
}


//4 - travei peguei resposta
function teste4 () {
    console.clear();
    console.log('Teste 4 - 🚫Soma dos números');
        let array = [];
        let soma = 0
        for (let i = 1; i <= 5; i++) {
            array.push(i)
            soma += i;
        }
        console.log(array);
        console.log(soma);
}


//5
function teste5 () {
    console.clear();
    console.log('Teste 5 - 🚫Tabuada do 5');
        for (let i = 1; i <= 10; i++) {
            let multiplicacao = 5;
            multiplicacao *= i;
            console.log(`${i} x 5 = ${multiplicacao}`);
        }
}


//6 - travei peguei resposta
function teste6 () {
    console.clear();
    console.log('Teste 6 - 🚫Contar letras do nome');
        let nome = 'Larisa';
        for (let i = 0; i < nome.length; i++) {
            console.log(nome[i]);
        }
}


//7 - travei peguei resposta
function teste7 () {
    console.clear();
    console.log('Teste 7 - 🚫Contar até parar no 5');
        let numeroMax = 6;
        for (let i = 1; i <= 10; i++) {
            if (i === 6) {
                break;
            }
            console.log(i);
        }
}


//8
function teste8 () {
    console.clear();
    console.log('Teste 8 - ⭕Conte números maior que 5');
        let numeros = [2, 8, 4, 10, 3, 7];
        let tamanho = numeros.length;
        let maiorQueCinco = [];
        for (let i = 0; i < tamanho; i++) {
            if (numeros[i] > 5) {
                maiorQueCinco.push(numeros[i]);
            }    
        }
        console.log(numeros);
        console.log(maiorQueCinco.length);
}


//9
function teste9 () {
    console.clear();
    console.log('Teste 9 - ⭕Soma números pares');
        let arrayNove = [];
        let resultado = 0;
        for (i = 0; i <= 10; i += 2) {
            resultado += i;
            arrayNove.push(i);
        }
        console.log(arrayNove);
        console.log(resultado);
}


//10
function teste10 () {
    console.clear();
    console.log('Teste 10 - ⭕Contar números negativos')
        let numerosNegativos = [3, -1, -7, 4, -2, 8];
        let apenasNegativos = [];
        for (let i = 0; i < numerosNegativos.length; i++) {
            let listaNegativos = numerosNegativos[i];
            if (listaNegativos < 0) {
                apenasNegativos.push(listaNegativos);
            }
        }
        console.log(numerosNegativos);
        console.log(apenasNegativos.length);
}


//11 - travei peguei resposta
function teste11 () {
    console.clear();
    console.log('Teste 11 - 🚫Encontrar o maior número');
        let maiorNumero = [5, 12, 8, 20, 3];
        let maior = maiorNumero[0];
        for (let i = 1; i < maiorNumero.length; i++) {
            if (maiorNumero[i] > maior) {
                maior = maiorNumero[i];
            }
        }
        console.log(maiorNumero);
        console.log(maior);
}


//12 - travei peguei resposta
function teste12 () {
    console.clear();
    console.log('Teste 12 - 🚫Inverter uma string');
        let nomeContrario = 'Larissa';
        let quebraNome = nomeContrario.split("");
        let nomeInvertido = "";
        for (let i = quebraNome.length - 1; i >= 0; i--) {
            nomeInvertido += quebraNome[i];
        } 
        console.log(`${nomeContrario} ao contrário é ${nomeInvertido}`);
}


//13
function teste13 () {
    console.clear();
    console.log('Teste 13 - ⭕Contar letras específicas');
        let palavra = 'banana';
        let contagemLetra = [];
        let contarletra = 'a'
        for (i = 0; i < palavra.length; i++) {
            let encontraLetra = palavra[i];
            if (encontraLetra == contarletra) {
                contagemLetra.push(encontraLetra);   
            }
        } 
        console.log(palavra);
        if (contagemLetra.length > 1) {
             console.log(`Há ${contagemLetra.length} '${contarletra}'s' na palavra ${palavra}`);
        } else {
             console.log(`Há ${contagemLetra.length} '${contarletra}' na palavra ${palavra}`);
        }
}


//14
function teste14 () {
    console.clear();
    console.log('Teste 14 - ⭕Tabuada completa até o 5');
        for (let i = 1; i <= 5; i++) {
            for (let x = 1; x <= 10; x++) {
                let resultadoTabuada = x;
                resultadoTabuada *= i;
                console.log(`${i} x ${x} = ${resultadoTabuada}`);
            }            
        } 
}
   

//15 - travei peguei resposta
function teste15 () {
    console.clear();
    console.log('Teste 15 - 🚫Verificar se todos são números pares');
        let localizarNumerosPares = [2, 4, 6, 7, 8, 9];
        let todosPares = true;
        for (let i = 0; i < localizarNumerosPares.length; i++) {
            if (localizarNumerosPares[i] % 2 !== 0) {
                todosPares = false;
                break
            }
        }     
        console.log(localizarNumerosPares);
        console.log(todosPares);
}


//16
function teste16 () {
    console.clear();
    console.log('Teste 16 - ⭕Separar positivo e negativo');
        let listaASeparar = [3, -1, -7, 4, -2, 8];
        let arrayPositivo = [];
        let arrayNegativo = [];
        for (i = 0; i < listaASeparar.length; i++) {
            let verificarNumero = listaASeparar[i];
            if (verificarNumero < 0) {
                arrayNegativo.push(verificarNumero);
            } else {
                arrayPositivo.push(verificarNumero);
            }
        }
        console.log(listaASeparar);
        console.log(arrayPositivo);
        console.log(arrayNegativo);
}


//17
function teste17 () {
    console.clear();
    console.log('Teste 17 - ⭕Encontrar menor número');
        let arrayNumero = [5, 12, 8, 20, 3];
        let menorNumero = arrayNumero[0];
        for (let i = 0; i < arrayNumero.length; i++) {
            if (arrayNumero[i] < menorNumero) {
                menorNumero = arrayNumero[i];
            }
        }
        console.log(arrayNumero);
        console.log(menorNumero);
}


//18
function teste18 () {
    console.clear();
    console.log('Teste 18 - ⭕Somar números negativos');
        let contemNumeros = [3, -1, -7, 4, -2, 8];
        let contemSomaNegativo = 0;
        for (let i = 0; i < contemNumeros.length; i++) {
            if (contemNumeros[i] < 0) {
                contemSomaNegativo += contemNumeros[i]
            }
        }
        console.log(contemNumeros);
        console.log(contemSomaNegativo);
}


//19 
function teste19 () {
    console.clear();
    console.log('Teste 19 - ⭕Criar, contar, somar os numeros positivos e negativos');
        let todosOsNumeros = [3, -1, -7, 4, 0, -2, 8];
        let numPositivos = [];
        let numNegativos = [];
        let somaPositivo = 0;
        let somaNegativo = 0;
        for (let i = 0; i < todosOsNumeros.length; i++) {
            if (todosOsNumeros[i] < 0) {
                numNegativos.push(todosOsNumeros[i]);
                somaNegativo += todosOsNumeros[i];
            } else if (todosOsNumeros[i] > 0) {
                numPositivos.push(todosOsNumeros[i]);
                somaPositivo += todosOsNumeros[i];
            } 
        }
        console.log(todosOsNumeros);
        console.log(numPositivos);
        console.log(numNegativos);
        console.log(numPositivos.length);
        console.log(numNegativos.length);
        console.log(somaPositivo);
        console.log(somaNegativo);
}

//20
function teste20 () {
    console.clear();
    alert('Obrigada por visitar meu primeiro projeto! 😁');
}
