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
  public static getInstance(params:any) {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(params);
    }
    return Singleton.instance;
  }
  getColor() {
    return this.color;
  }
}

const a = Singleton.getInstance('black');
const b = Singleton.getInstance('red');

console.log('==> color a:', a.getColor());
console.log('==> color b:', b.getColor());

console.log('==> is same instance:', a === b);