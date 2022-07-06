export interface IQueue {
  enqueue: (element: any) => void; // 向队尾增加一个元素
  dequeue: () => any; // 弹出队首元素，并返回被弹出的队列顶元素
  front: () => number; // 返回队首的元素
  back: () => number; // 返回队尾的元素
  toString:() => string; // 显示队列里所有元素
  empty:() => boolean; // 判断队列是否还有元素
  length: () => number; // 返回队列中元素的个数
  clear: () => void; // 清空队列
}

export default class Queue implements IQueue {
  protected dataStore: any[] = [];
  
  public enqueue(element: any) {
    this.dataStore.push(element);
  }
  public dequeue() {
    return this.dataStore.shift();
  }
  public front() {
    return this.dataStore[0]
  }
  public back() {
    return this.dataStore[this.dataStore.length - 1]
  }
  public toString() {
    return JSON.stringify(this.dataStore);
  }
  public empty() {
    return this.dataStore.length === 0;
  }
  public length() {
    return this.dataStore.length;
  }
  public clear() {
    this.dataStore = [];
  }
}