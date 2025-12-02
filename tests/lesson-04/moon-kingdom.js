let characters = [
    { name: 'lan', level: 1, health: 100 },
    { name: 'tao', level: 30, health: 900 },
    { name: 'bao', level: 60, health: 1600 }
]

let charactersPowerUp = characters.map(char => {
    return {
        name: char.name.toUpperCase(),
        level: char.level * 2,
        health: char.health * 3
    }
})

let possibleWinners = charactersPowerUp.filter(char => char.health > 1000);

console.log("Characters Power Up: ", charactersPowerUp);
console.log("Characters Winners: ", possibleWinners);


let players = [
    { name: 'Mario', score: 1000 },
    { name: 'Luigi', score: 1100 },
    { name: 'Peach', score: 750 },
    { name: 'Yoshi', score: 200 },
    { name: 'Phong', score: 500 },
    { name: 'Lan', score: 900 },
]

let sortPlayers = players.sort((a, b) => {
    return b.score - a.score
});

console.log("LeaderBoard: ", sortPlayers);

for (let i = 0; i < sortPlayers.length; i++) {
    if (i === 0)
        sortPlayers[i].medal = "🥇"
    if (i === 1)
        sortPlayers[i].medal = "🥈"
    if (i === 2)
        sortPlayers[i].medal = "🥉"
}

console.log("LeaderBoard: ", sortPlayers);