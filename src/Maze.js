class Maze {
    constructor(matrix) {
      this.matrix = matrix
      // danh dau huong da di chuyen
      this.flash = {};
      //luu vet duong di
      this.pre = {};
      this.way = {};
      this.isWay = false;
      this.count = 0;
    }
    //ham di chuyen cua robot
    move(x, y, xNext, yNext, b) {
    
      if (!this.pre[xNext+'-'+yNext]) {
        this.pre[xNext+'-'+yNext] = []
      }
      this.pre[xNext+'-'+yNext].push({
        x, y
      });
      this.flash[x+'-'+y] = {
        x: xNext, y: yNext
      };
      this.findWay({
        x: xNext, y: yNext
      }, b);
    }
    //ham show duong di tu dich ve diem xuat phat
    showWay(start, finish) {
      this.count += 1;
      if (this.way[finish.x+'-'+finish.y]) return;
      console.log(finish);
      if (finish.x === start.x && finish.y === start.y) {
        console.log('finish----------- --- -- ')
        return;
      }
      let preF = this.pre[finish.x+'-'+finish.y];
      if (!preF) return;
      // console.log(preF);
      this.way[finish.x+'-'+finish.y] = true;
      for (var i = 0; i < preF.length; i++) {
        if (this.matrix[preF[i].x][preF[i].y] === 0)
          this.showWay(start, preF[i])
        // console.log(preF[i])
      }
    }
    //thuat toan vet can
    findWay(a, b) {
  
      if (a.x === b.x && a.y === b.y) {
        // console.log(this.pre)
        this.isWay = true;
  
      }

      if (this.flash[a.x+'-'+a.y]) {
        return;
      }
      // di xuong duoi
      if (a.x-1 >= 0 && this.matrix[a.x-1][a.y] === 0)
        this.move(a.x, a.y, a.x-1, a.y, b)
      // di len tren
      if (a.x+1 < this.matrix.length && this.matrix[a.x+1][a.y] === 0)
        this.move(a.x, a.y, a.x+1, a.y, b)
      // di sang trai
      if (a.y-1 >= 0 && this.matrix[a.x][a.y-1] === 0)
        this.move(a.x, a.y, a.x, a.y-1, b)
      // di sang phai
      if (a.y+1 < this.matrix.length && this.matrix[a.x][a.y+1] === 0)
        this.move(a.x, a.y, a.x, a.y+1, b)
  
  
  
    }
  }
module.exports= Maze;