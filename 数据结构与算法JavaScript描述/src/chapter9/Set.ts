interface ISet {
  dataStore: any[];
  add: (data: any) => boolean; // 向集合中添加数据
  remove: (data: any) => boolean; // 从集合中删除元素
  size: () => number; // 显示集合的元素数量
  union: (set: ISet) => Set; // 取当前集合和传入集合的并集
  intersect: (set: ISet) => Set; // 取当前集合和传入集合的交集
  difference: (set: ISet) => Set; // 取当前集合和传入集合的补集（属于当前集合但不属于传入集合）
  subset: (set: ISet) => boolean; // // 判断当前集合是否是给定集合的子集
  contains: (data: any) => boolean; // 判断某个元素是否是集合的成员
  show: () => any; // 打印集合中的值
}

export class Set implements ISet{
  public dataStore: any[] = [];

  public add(data: any) {
    if (!this.dataStore.includes(data)) {
      this.dataStore.push(data);
      return true;
    } else {
      return false
    }
  }
  public remove(data: any) {
    const pos = this.dataStore.findIndex(data);
    if (pos > -1) {
      this.dataStore.splice(pos, 1);
      return true;
    } else {
      return false
    }
  }
  public union(set: ISet) {
    const tempSet = new Set();
    tempSet.dataStore = tempSet.dataStore.concat(this.dataStore);
    set.dataStore.map(data => {
      if (!tempSet.contains(data)) {
        tempSet.add(data)
      }
    })

    return tempSet;
  }
  public intersect(set: ISet) {
    const tempSet = new Set();
    this.dataStore.map(data => {
      if (set.contains(data)) {
        tempSet.add(data)
      }
    })

    return tempSet;
  }
  public difference(set: ISet) {
    const tempSet = new Set();
    this.dataStore.map(data => {
      if (!set.contains(data)) {
        tempSet.add(data)
      }
    })

    return tempSet;
  }
  public subset(set: ISet) {
    if (this.size() > set.size()) {
      return false;
    } else {
      this.dataStore.map(data => {
        if (!set.contains(data)) {
          return false
        }
      })
    }

    return true;
  }
  public contains(data: any) {
    return this.dataStore.includes(data);
  }
  public size() {
    return this.dataStore.length;
  }
  public show() {
    return this.dataStore;
  }
}