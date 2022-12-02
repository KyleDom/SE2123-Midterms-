const diffOfTwoDates = (date1: Date, date2: Date) => {
    return Math.abs(date1.getTime() - date2.getTime()) / 3600 / 1000 
}
//test
const date1 = new Date("December 1, 2022 09:00:00" )
const date2 = new Date("December 1, 2022 07:35:00")
console.log(diffOfTwoDates(date1, date2))


class Player {
    firstName : string;
    lastName : string; 
    number : number;
    age : number;
    constructor(firstName: string, lastName : string, number : number, age : number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.number = number;
        this.age = age; 
    }
}

const getAverageAge = (players: Player[]) => {
    const averageAge =  ((players.map(player => player.age).reduce((totalAge, age) => totalAge + age)) / players.length).toFixed(0)
    console.log(averageAge)
}
//test
const player1 = new Player("Lebron", "James", 23, 39)
const player2 = new Player("Davis", "Anthony", 6, 29)
const player3 = new Player("Westbrook", "Russ", 0, 35)
let playersArray = [player1, player2, player3]
getAverageAge(playersArray)

