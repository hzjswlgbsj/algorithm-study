interface IDictionary {
  add: (key: string, value: any) => void; // 向字典中添加键值对
  find: (key: string) => any; // 根据key查找对应的value值
  remove: (key: string) => any; // 根据key删除在字典中的键值对
  showAll: () => any; // 打印字典
  count: () => number; // 计算字典中的元素个数
  clear: () => void; // 清空字典
}

export class Dictionary implements IDictionary {
  private dataStore: any;

  constructor() {
    this.dataStore = new Array();
  }

  public add(key: string, value: any) {
    this.dataStore[key] = value;
  }
  public find(key: string) {
    return this.dataStore[key];
  }
  public remove(key: string) {
    delete this.dataStore[key];
  }
  public showAll() {
    const keys = Object.keys(this.dataStore);
    keys.map(key => {
      console.log(`${key}: ${this.dataStore[key]}`)
    })
  }

  public count() {
    const keys = Object.keys(this.dataStore);
    if (keys) {
      return keys.length;
    }

    return 0;
  }
  
  public clear() {
    for (const key in this.dataStore) {
      if (Object.prototype.hasOwnProperty.call(this.dataStore, key)) {
        delete this.dataStore[key];
      }
    }
  }
}