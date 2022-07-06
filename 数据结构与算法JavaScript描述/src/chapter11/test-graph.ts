// 测试第十一章的图（Graph）数据结构
import { Graph } from './Graph';

console.log('开始测试图数据结构');
const graph = new Graph(5);

// 开始给Graph添加顶点和边
graph.addEdge(0, 1)
graph.addEdge(0, 2)
graph.addEdge(1, 3)
graph.addEdge(2, 4)
graph.showGraph()

// console.log('---------测试dfs---------')
// graph.dfs(0, (v) =>  console.log(`Visited vertex: ${v}`))

console.log('---------测试bfs---------')
graph.bfs(0, (v) =>  console.log(`Visited vertex: ${v}`))