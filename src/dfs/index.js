/** 深度优先搜索 */

let map = [10, 10]; // 地图边界
let user = []; // 已经走过的路
let moveX = [-1, 0, 1, 0]; // x可走
let moveY = [0, -1, 0, 1]; // y可走

function DFS(destinctation, user, x, y) {
  console.log(x, y);
  if (destinctation[0] === x && destinctation[1] === y) {
    return true;
  }
  for (let i = 0; i < 3; i++) {
    let newX = moveX[i] + x;
    let newY = moveY[i] + y;
    // console.log(newX, newY);

    if (
      newX >= 0 &&
      newX < map[0] &&
      newY >= 0 &&
      newY < map[1] &&
      user[[newX, newY]] !== 1
    ) {
      user[[newX, newY]] = 1;
      DFS(map, user, newX, newY);
      user[[newX, newY]] = 0; // 回溯
    }
  }
  return false;
}

console.log(DFS([9, 9], user, 0, 0));
