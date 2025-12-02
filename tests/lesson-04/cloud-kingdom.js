// Cách 1 dùng if...else

// let powerUp = 'mushroom';
// let effect = '';

// if (powerUp === 'mushroom') {
//   effect = 'Mario becomes Super!';
// }
// if (powerUp === 'flower') {
//   effect = 'Mario can shoot fireballs';
// }
// if (powerUp === 'star') {
//   effect = 'Mario is invicible!';
// }
// if (powerUp === 'none') {
//   effect = 'Mario is normal';
// }
// if (powerUp === 'other')
// {
//   effect = 'Unknown power-up';
// }
//
// console.log(effect);


// Cách b dùng switch...case

// let powerUp = 'mushroom';
// let effect = '';

// switch (powerUp) {
//   case 'mushroom':
//     {
//       effect = 'Mario becomes Super!';
//       break;
//     }
//   case 'flower':
//     {
//       effect = 'Mario can shoot fireballs';
//       break;
//     }
//   case 'star':
//     {
//       effect = 'Mario is invicible!';
//       break;
//     }
//   case 'none':
//     {
//       effect = 'Mario is normal';
//       break;
//     }
//   default:
//     {
//       effect = 'Unknown power-up';
//       break;
//     }
// }

// console.log(effect);

// Cách c 

let powerUp = "mushroom";
let effect =
  (powerUp === "mushroom") ? "Mario becomes Super!" : // () ? "Xuất ra khi điều kiện 1 đúng":
    (powerUp === "flower") ? "Mario can shoot fireballs" : // () ? "Xuất ra khi điều kiện 2 đúng":
      (powerUp === "star") ? "Mario is invicible!" : // () ? "Xuất ra khi điều kiện 3 đúng":
        (powerUp === "none") ? "Mario is normal" : "Unknown power-up"
          // () ? "Xuất ra khi điều kiện 4 đúng": "Nếu các điều kiện trên ko đúng thì sẽ xuất ra cái cuối này"
  ;

console.log(effect);