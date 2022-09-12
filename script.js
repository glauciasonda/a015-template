// Exercicios Aula 015
let num = null; 
let total = 0;

//Exercicio 1)
/*while(num !== 0){
    num = Number(prompt("Informe um número"));
    total += num;
    console.log(num)
}
console.log(`finalizando a entrada de números...`)
console.log(`Total: ${total}`)  */

//Exercicio 2) 
/* num = Number(prompt("Informe um número"));
for(let i = 0; i <= num; i++ ){
    console.log(i);
}*/

//Exercicio 3)
let listNum = []
/*num = Number(prompt("Informe um número"));
while(num !== 0){
    listNum.push(num);
    num = Number(prompt("Informe um número"));
}
for (let i = 0; i < listNum.length; i++){
    console.log(`O número do índice ${i} é ${listNum[i]}`)
}*/

let tipoUsr = null;
while(tipoUsr !== 'A'){
    tipoUsr = prompt(`Informe o tipo do teu usuário: `);
    console.log(`Acesso negado`)
}
console.log(`Boas-vindas, admin`);