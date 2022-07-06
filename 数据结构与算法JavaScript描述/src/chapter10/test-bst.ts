// 测试第十章的树数据结构
import { BST } from './BST';
import { INode } from './Node';

console.log('开始测试查找二叉树数据结构');
const bst = new BST();

// 开始给set1添加元素
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);
bst.showTree()

console.log('中序遍历结果为：')
bst.inOrder(bst.root, (node: INode) => {
  console.log(node.data)
})
console.log('前序遍历结果为：')
bst.preOrder(bst.root, (node: INode) => {
  console.log(node.data)
})
console.log('后序遍历结果为：')
bst.postOrder(bst.root, (node: INode) => {
  console.log(node.data)
})

console.log('最小值为：', bst.getMin())
console.log('最大值为：', bst.getMax())
console.log('查找值为3的节点：', bst.find(3))