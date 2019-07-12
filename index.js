  var Maze = require('./src/Maze')
  
  // 0 di duoc,1 chuong ngai vat;
  var maze = new Maze(
    [[0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [1, 1, 1, 1, 0],
      [1, 1, 0, 1, 0],
      [0, 0, 0, 0, 0]
    ]
  
  );
  maze.findWay({
    x: 0, y: 0
  }, {
    x: 4, y: 0
  });
  if (maze.isWay) {
    console.log('Ton tai duong di')
  } else
    console.log('Khong ton tai duong di')
  maze.showWay({
    x: 0, y: 0
  }, {
    x: 4, y: 0
  })