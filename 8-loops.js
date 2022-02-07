console.log(`\n trabalhando com Condicionais`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
    
    
    
   

);

const idadeComprador = 18;
const estaAcompanhada = true;
let temPassagemComprada = false;
console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);
const destino = "Salvador";




// if(idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1); //removendo item
    
// }else if(estaAcompanhada == true) {
//         console.log("Comprador está acompanhado");
//         listaDeDestinos.splice(1,1); //removendo item 
//     }else{
//     console.log("Não é maior de Idade e não posso vender");
    
// }


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;


//WHILE, SIGNIFICA ENQUANTO
while(contador<3){
    
    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }
    contador +=1;

}
    console.log("Destino Existe: ", destinoExiste);

    if(podeComprar && destinoExiste){
        console.log("Boa viagem");
    }else{
        console.log("Desculpe tivemos um erro!")
    }

    for(let cont = 0 ;cont < 3; cont++ ){
    
        if(listaDeDestinos[contador] == destino){
            console.log("Destino existe");
            destinoExiste = true;
            
        }
        
    
    }



console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador <18);
// console.log(idadeComprador >=18);
// console.log(idadeComprador <=18);
// console.log(idadeComprador == 18);




