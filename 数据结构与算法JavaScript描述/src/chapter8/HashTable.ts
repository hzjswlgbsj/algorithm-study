// 关于哈希表的相关参考
// https://www.jianshu.com/p/70c11dc8ec98
// https://www.youtube.com/watch?v=hERepKv2Wn4

interface IHashTable {
  simpleHash: (data: string) => void; // 散列函数
  betterHash: (data: string) => void; // 更好的散列函数
  put: (data: string) => any; // 将数据存入散列表
  showDistro: () => any; // 打印散列表中的值
}

export class HashTable implements IHashTable{
  private table: any;

  constructor() {
    this.table = new Array(137);
  }

  public simpleHash(data: string) {
    let total = 0;
    for (let index = 0; index < data.length; index++) {
      total += data.charCodeAt(index);      
    }
    return total % this.table.length;
  }
  public betterHash(data: string) {
    const H = 37;
    let total = 0;
    for (let index = 0; index < data.length; index++) {
      total += H * total + data.charCodeAt(index);      
    }
    total = total % this.table.length;
    if (total < 0) {
      total += this.table.length - 1;
    }
    return Number(total);
  }
  public put(data: string) {
    let pos = this.betterHash(data);
    this.table[pos] = data;
  }
  public showDistro() {
    const n = 0;
    for (let index = 0; index < this.table.length; index++) {
      if (typeof this.table[index] !== 'undefined') {
        console.log(`${index}: ${this.table[index]}`);
      }
    }
  }
}