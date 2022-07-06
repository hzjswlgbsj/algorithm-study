import Queue from './Queue';

interface Patient {
  code: number;
  name: string;
}

export class PriorityQueue extends Queue {
  /**
   * 实现优先队列
   * code越小优先级越高，所以每次都应该弹出
   */
  public dequeue() {
    let priority = this.dataStore[0].code;
    for (let i = 1; i <= this.dataStore.length; i++) {
      if (this.dataStore[i].code < priority)
      priority = i;      
    }

    return this.dataStore.splice(priority, 1);
  }
}