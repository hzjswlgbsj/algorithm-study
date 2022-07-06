export interface IVertex {
  label: any;
  wasVisited: boolean;
}
export default class Vertex {
  public label: any;
  public wasVisited: boolean = false;

  constructor(label: any, wasVisited: boolean) {
    this.label = label;
    this.wasVisited = wasVisited;
  }
}