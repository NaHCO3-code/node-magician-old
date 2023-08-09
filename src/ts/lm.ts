
type v2d={x:number,y:number}

export class Vector2{
  x: number

  y: number

  constructor(x: number, y:number){
    this.x = x;
    this.y = y;
  }

  set(x: number, y: number){
    this.x = x;
    this.y = y;
  }

  add(v: Vector2|v2d){
    this.x += v.x;
    this.y += v.y;
    return this
  }

  reduce(v: Vector2|v2d){
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  plus(n:number){
    this.x*=n;
    this.y*=n;
    return this;
  }

  equal(v: Vector2|v2d){
    return (this.x == v.x && this.y == v.y)
  }
} 