let playerName = 'Mario';
let currentLives = 3;

const level1 = 25;
const level2 = 30;
const level3 = 45;

let avgValCoin = (level1 + level2 + level3) / 3;
let oddValCoin = (level1 + level2 + level3) % 3;
console.log(`Số coin trung bình: `, avgValCoin);
console.log(`Phần coin dư: `, oddValCoin);