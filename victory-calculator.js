const mastery = [
    ["Ferro",  0, 10],
    [  "Bronze", 11, 20],
    [  "Prata", 21, 50],
    [  "Ouro", 51, 80],
    [  "Diamante", 81, 90],
    [ "Lendario", 91, 100 ],
    [ "Immortal", 101, Infinity]
];


function getMastery(masteryCurrent){
    for(let i = 0; i < mastery.length; i++){
        if(masteryCurrent >= mastery[i][1] && masteryCurrent <= mastery[i][2]){
            return mastery[i][0]
           


        }
    }

}

function victoryCalculator(win, defeat){
    return win - defeat;
    
    
}


let win = 50;
let defeat = 15;

let result = victoryCalculator(win, defeat);
masteryCurrent = getMastery(result);

console.log(`Você tem: ${result} Vitórias e sua Maestria atual é: ${masteryCurrent}`);


// Primeiro, é criada a função `victoryCalculator`, que recebe as variáveis `win` (vitória) e `defeat` (derrota) e calcula a diferença entre elas. Em seguida, é criada a função `getMastery`, que recebe o resultado da função `victoryCalculator` e percorre a matriz `mastery` usando um loop `for`. Se o parâmetro recebido estiver dentro do intervalo definido no índice `i` da matriz, a função retorna o valor correspondente.