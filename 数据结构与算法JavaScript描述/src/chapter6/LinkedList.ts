import Node, { INode } from './Node';
export interface ILinkedList {
  head: INode;
  find: (element: any) => any; // 根据element值查找对应的Node并返回
  findPrevious: (element: any) => any | null; // 根据element值查找对应的前一个Node并返回
  insert: (newElement: any, item: any) => void; // 根据item，在item后面插入一个Node
  display:() => void; // 显示队列里所有元素
  remove: (element: any) => boolean; // 删除给定element的节点
}

export default class LinkedList implements ILinkedList {
  public head: INode;

  constructor() {
    this.head = new Node('head');
  }

  public find(element: any) {
    let curNode = this.head;
    while (curNode.element !== element) {
      curNode = curNode.next;
    }

    return curNode;
  }

  public findPrevious(element: any) {
    let curNode = this.head;
    while (curNode.next && curNode.next.element !== element) {
      curNode = curNode.next;
    }

    // 如果遍历后curNode.next为null的话说明element不在该链表中
    // 自然他的“上一个”节点就没有，所以返回null
    // 这里我们允许返回头节点，也可以不让返回头节点
    // if (curNode.next === null || curNode.element === 'head')
    if (curNode.next === null) {
      return null;
    }

    return curNode;
  }

  public insert(newElement: any, item: any) {
    let newNode = new Node(newElement);
    let curNode = this.find(item);
    newNode.next = curNode.next;
    curNode.next = newNode;
  }

  public display() {
    let curNode = this.head;
    while (curNode.next !== null) {
      console.log(curNode.next.element)
      curNode = curNode.next;
    }
  }
  public remove(element: any) {
    const previous = this.findPrevious(element);
    if (previous) {
      // previous最坏的情况是倒数第二个，所以他是肯定存在next节点的
      previous.next = previous.next.next;
      return true;
    } else {
      return false;
    }
  }
}