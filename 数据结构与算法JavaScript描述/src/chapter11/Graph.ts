// import Vertex, { IVertex } from './Vertex';
interface IGraph {
  vertices: number; // 顶点数量
  edges: number; // 边数量
  adj: any[]; // 邻接表数组
  marked: any[]; // 标识是否被访问过
  edgeTo: any[]; // 保存从一个顶点到下一个顶点的所有边
  addEdge: (v: any, w: any) => void;
  showGraph: () => void;
  dfs: (v: any) => void;
  bfs: (v: any) => void;
}

// 图
export class Graph implements IGraph {
  public vertices: number = 0;
  public edges: number = 0;
  public adj: any[] = [];
  public edgeTo: any[] = [];
  public marked: any[] = [];

  constructor(v: number) {
    this.vertices = v;
    for (let i = 0; i < this.vertices; i++) {
      this.adj[i] = [];
      this.marked[i] = false;
    }
  }
  public addEdge(v: any, w: any) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }

  public showGraph() {
    for (let i = 0; i < this.vertices; i++) {
      let log = `${i} -> `
      for (let j = 0; j < this.adj[i].length; j++) {
        if (typeof this.adj[i][j] !== undefined) {
          log += `${this.adj[i][j]} ` 
        }
      }
      console.log(log)
    }
  }

  public dfs(v: any, cb?: (v: any) => void) {
    this.marked[v] = true;
    if (this.adj[v] !== undefined) {
      if (typeof cb === 'function') {
        cb(v)
      } else {
        console.log(`Visited vertex: ${v}`)
      }
    }

    for (let i = 0; i < this.adj[v].length; i++) {
      const w = this.adj[v][i];
      if (!this.marked[Number(w)]) {
        this.dfs(w, cb);
      }
    }
  }

  /**
   * (1) 查找与当前顶点相邻的未访问顶点，将其添加到已访问顶点列表及队列中； 
   * (2) 从图中取出下一个顶点 v，添加到已访问的顶点列表； 
   * (3) 将所有与 v 相邻的未访问顶点添加到队列。 
   * @param s 
   */
  public bfs(s: any, cb?: (v: any) => void) {
    const queue = [];
    this.marked[s] = true;
    queue.push(s); // 添加到队尾
    while (queue.length > 0) {
      const v: any = queue.shift(); // 从队首移除
      if (typeof cb === 'function') {
        cb(v)
      } else {
        console.log(`Visited vertex: ${v}`)
      }

       for (let i = 0; i < this.adj[v].length; i++) {
        const w = this.adj[v][i];
        if (!this.marked[Number(w)]) {
          this.edgeTo[w] = v;
          this.marked[w] = true;
          queue.push(w);
        }
      }
    }
  }
}