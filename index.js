// Code your solutions in this file
function writeCards(thankYou, eventN) {
    const emptyA = []
    for(let i = 0; i < thankYou.length; i++){
        console.log(`Thank you, ${thankYou[i]}, for the wonderful ${eventN} gift!`)
        emptyA.push(`Thank you, ${thankYou[i]}, for the wonderful ${eventN} gift!`)
    }
        return emptyA

}

function countDown(number){
    while (number >= 0){
        console.log(number--)
    }
}