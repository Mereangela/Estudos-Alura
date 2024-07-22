/* ANOTAÇÕES IMPORTANTES = JAVASCRIPT 

    
 query = tradução = Buscar e sempre com q minusculo.
 Selector = tradução = Seletor e sempre com S maisculo.
 Esta função vai buscar o elemento no html.
 Para chamar classe sempre um o ponto . antes
 Para chamar o id, chama como #id
 Sempre usar entre parenteses

 Para guardar somente o som do Pom ou de qualquer outro elemento, é necessário criar um FUNÇÃO para chamar.
 A função tem que ter um nome e seguindo parenteses () e chaves {}
 Tudo que está dentro das {} pode ser chamado de ESCOPO.
 const = não pode/deve ser alterado.

 = significa atribuição.
 Esta condição vai chamar todos elementos no button no HTML.
 Para chamar os elementos da lista tem que utilizar os colchetes [] e informar o número do indice.
 O indice inicia no ZERO - 0
 A sintaxe utilizada para listas é chamada dwe ARRAY
 montar uma estrutura de repetição
 
 WHILE = ENQUANTO e precisa ter uma condição entre os () para determinar onde vai parar o loop 
 Chaves significa a rotina e o que vai rodado - ou laço
 O While recebe a função se é VERDADEIRA_TRUE ou FALSA_FALSE
 Necessário comparar

 let é uma referência variavel  - algo que sempre vai receber algo novo 
 < = menor
 > = maior 

 length = tamanho da lista

 Na criação da variavel, sempre criar um NOME que faça SENTIDO

 Com analogias o WHILE

 A aula é como se você estivesse organizando essa festa. As teclas do teclado são como seus amigos, cada um com um instrumento diferente. 
 O código JavaScript é como a lista de instruções que você precisa seguir para que a música saia perfeita.
 A função tocaSom() é como o maestro da sua orquestra, ele é responsável por indicar qual instrumento deve tocar em cada momento.
 O while() é como a sua lista de convidados, ele vai te ajudar a organizar a ordem em que cada amigo vai tocar.
 A variável contador é como o número da sua lista de convidados, ela vai te ajudar a saber qual amigo está na sua vez de tocar.
 A classList é como a etiqueta que cada amigo usa na festa, indicando qual instrumento ele toca.
 A template string é como a sua lista de músicas, ela te ajuda a organizar as músicas que cada amigo vai tocar.
 Com a template string, você consegue criar uma lista de músicas dinâmica, ou seja, você pode adicionar ou remover músicas da lista sem precisar reescrever todo o código.
 Assim como você precisa organizar a festa para que a música saia perfeita, você precisa usar o código JavaScript para que o Alura Midi funcione corretamente.

Com analogias o FOR
 Você poderia escrever o endereço de cada amigo em um cartão separadamente, mas isso seria muito trabalhoso.

 O for é como um robô que faz esse trabalho por você! Você só precisa dizer a ele:

 "Comece com o primeiro amigo" (o contador começa em 0).
 "Enquanto não chegar ao último amigo, continue" (a condição é que o contador seja menor que o número de amigos).
 "Depois de cada amigo, vá para o próximo" (o contador aumenta em 1).
 O robô vai pegar o endereço de cada amigo, escrever no cartão e enviar para ele. Assim, você não precisa fazer isso manualmente e pode aproveitar seu tempo para outras coisas!

 O for é como um robô que te ajuda a automatizar tarefas repetitivas, deixando seu código mais limpo e fácil de entender.


*/

/*

MODELO COM WHILE - ENQUANTO:

function tocaSom(idElementoAudio) {

    document.querySelector(idElementoAudio).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];

    const instrumento/*#som_${instrumentos}`;

    console.log(idAudio);


    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    // vai incrementar +1
    contador = contador + 1;

    //vai imprimir no DevTools na aba do console e para quando a condição ser falsa.
    console.log(contador);
}
 */

function tocaSom(seletorAudio) {


    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        //* alert ('Elemento não encontrado ) - desta forma aparece um popup informando
        console.log('Elemento não encontrado');
    }

    if (elemento != null) {

        if (elemento.localName === 'audio') {
            elemento.play();
        }
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// MODELO COM FOR = PARA e é mais simplificado e mais limpo
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumentos = tecla.classList[1];
    const idAudio = `#som_${instrumentos}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    //Quando o usuário aperta a tecla do teclado
    tecla.onkeydown = function(evento) {

        // Se = if (Dada condição for verdadeira)
        // == significa igual e compara a igualdade
        // ===  compara o valor com um texto  - Tipo de Dado - Se é número ou texto 
        // Operador: || significa OR - OU
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    //Quando o usuário solta a tecla do teclado
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }


}