interface IStack {
  top: number; // 栈顶位置，初始化为0
  push: (element: any) => void; // 向栈压入新元素
  pop: () => any; // 弹出栈顶元素，并返回被弹出的栈顶元素
  peek: () => any; // 返回栈顶元素
  length: () => number; // 返回栈中元素的个数
  clear: () => void; // 清空栈
}

export class Stack implements IStack {
  private dataStore: any[] = [];
  public top: number = -1;

  public length() {
    return this.top + 1;
  }
  public clear() {
    this.dataStore = [];
    this.top = 0;
  }
  public pop() {
    const deleteElement = this.dataStore.pop();
    this.top--;
    return deleteElement;
  }
  public push(element: any) {
    this.dataStore.push(element);
    this.top++;
  }
  public peek() {
    return this.dataStore[this.top]
  }
}