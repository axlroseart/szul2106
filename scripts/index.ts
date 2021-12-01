class Singleton {
  private static instance: Singleton;
  x: number;
  y: number;
  color: string;
  private constructor(color:string) {
    this.x = 1;
    this.y = 2;
    this.color = color;
  }
  static getInstance(params:any) {
    let instance = Singleton.instance;
    if (!instance) {
      instance = new Singleton(params);
    }
    return instance;
  }
  getColor() {
    return this.color;
  }
}

const a = Singleton.getInstance('black');
console.log(a.getColor());