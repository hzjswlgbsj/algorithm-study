export interface INode {
  element: any;
  next: any;
}
export default class Node {
  public element: any;
  public next: any;
  constructor(element: any) {
    this.element = element;
    this.next = null;
  }
}