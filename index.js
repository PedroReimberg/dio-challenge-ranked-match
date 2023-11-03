//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, 
//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

//["Name", Win, Lose, "Rank", Balance]
let player1Data = ["Jogador 1", 10, 10, "Unranked", undefined]

function rankBalance(player1Data){
    let win = player1Data[1]
    let lose = player1Data[2]
    let balance = win - lose
    return balance
}
for(i = 0; i < 9 ; i++){

    player1Data[4] = rankBalance(player1Data)

    switch(true){
        //Se vitórias for menor do que 10 = Ferro
        case (player1Data[4] <= 10):
            player1Data[3] = "Ferro"
            break
        //Se vitórias for entre 11 e 20 = Bronze    
        case (player1Data[4] <= 20):
            player1Data[3] = "Bronze"
            break
        //Se vitórias for entre 21 e 50 = Prata
        case (player1Data[4] <= 50):
            player1Data[3] = "Prata"
            break
        //Se vitórias for entre 51 e 80 = Ouro
        case (player1Data[4] <= 80):
            player1Data[3] = "Ouro"
            break
        //Se vitórias for entre 81 e 90 = Diamante
        case (player1Data[4] <= 90):
            player1Data[3] = "Diamante"
            break
        //Se vitórias for maior ou igual a 101 = Imortal
        case (player1Data[4] >= 101):
            player1Data[3] = "Imortal"
            break
        default:
            player1Data[3] = "Unranked"
            break    
    }

    //## Saída
    //Ao final deve se exibir uma mensagem: "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
    console.log("O Herói tem de saldo de " + player1Data[4] + " está no nível de " + player1Data[3])

    //Aumento de Vitórias
    player1Data[1] += 25
    //Aumento de Derrotas
    player1Data[2] += 10
}