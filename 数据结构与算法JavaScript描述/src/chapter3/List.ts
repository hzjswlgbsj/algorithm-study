interface IList {
  listSize: number; // 列表的元素个数
  pos: number; // 列表的当前位置
  length: () => number; // 返回列表中元素的个数
  clear: () => void; // 清空列表中的所有元素
  toString: () => string; // 返回列表的字符串形式
  getElement: (pos: number) => any; // 返回当前位置的元素
  insert: (pos: number, element: any) => boolean; // 插入新元素
  append: (element: any) => void; // 在列表的末尾添加新元素
  remove: (pos: number) => void; // 在列表中删除元素
  contains: (element: any) => boolean; // 判断给定元素是否在列表中
  front: () => void; // 将列表的当前位置移动到第一个元素
  end: () => void; // 将列表的当前位置移动到最后一个元素
  prev: () => void; // 将当前位置前移一位
  next: () => boolean; // 将当前位置后移一位
  currPos: () => void; // 返回列表的当前位置
  moveTo: (pos: number) => void; // 将当前位置移动到指定位置
  forEach: (iteration:  (data: any) => void) => void; // 迭代器
  arrayToList: (data: any[]) => void; // 将数组中的数组放到列表中
}

export class List implements IList {
  private dataStore: any[] = [];
  public listSize: number = 0;
  public pos: number = 0;

  public length() {
    return this.listSize;
  }
  public clear() {
    this.dataStore = [];
    this.listSize = 0;
    this.pos = 0;
  }
  public append(element: any) {
    this.dataStore.push(element);
    this.listSize++;
  }
  public remove(pos: number) {
    this.dataStore.splice(pos, 1);
    this.listSize--;
  }
  public toString() {
    return JSON.stringify(this.dataStore);
  }
  public getElement() {
    return this.dataStore[this.pos];
  }
  public insert(pos: number, element: any) {
    if (pos > -1) {
      this.dataStore.splice(pos, 0, element);
      this.listSize++;
      return true;
    }
    
    return false;
  }
  public contains(element: any) {
    if (typeof element === 'undefined') {
      return this.dataStore.some(item => typeof item === 'undefined');
    } else if (['string', 'number', 'boolean'].includes(typeof element)) {
      return this.dataStore.some(item => item === element);
    } else if (typeof element === 'object') {
      // 这里值判断值是否相等，不判断是否为同一个引用地址
      return this.dataStore.some(item => {
        return JSON.stringify(item) === JSON.stringify(element);
      });
    }else {
      return false;
    }
  }

  public front() {
    this.pos = 0;
  }
  public end() {
    this.pos = this.listSize - 1;
  }
  public prev() {
    if (this.pos > 0) {
      --this.pos;
    };
  }
  public next() {
    if (this.pos < this.listSize - 1) {
      ++this.pos;
      return true
    };
    return false;
  }
  public currPos() {
    return this.pos;
  }
  public moveTo(pos: number) {
    this.pos = pos;
  }

  /**
   * 因为位置指针从 0 开始，所以永远比 length 小 1，所以导致最后一项无法被遍历到
   * 如果将 this.currPos() < this.length() - 1 改为 this.currPos() < this.length()
   * 则会陷入死循环，因为他永远是成立的，next 方法又不可能让他「越界」，所以
   * 选择让迭代函数在最后一次的时候手动执行一次
   * 
   * 在业务需求中，我们可以封装自己的迭代器，以做更多的「处理」后再迭代，或者返回我们
   * 自己规定的数据结构的值
   * @param iteration 每次迭代会被执行的函数
   */
  public forEach(iteration: (data: any) => void) {
    for(this.front(); this.currPos() < this.length() - 1; this.next()) {
      iteration(this.dataStore[this.currPos()])
    }

    if (this.currPos() === this.length() - 1) {
      iteration(this.dataStore[this.currPos()])
    }
  }

  public arrayToList(data: any[]) {
    if (data.length > 0) {
      data.forEach(item => this.append(item))
    }
  }
}