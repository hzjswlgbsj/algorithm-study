// 测试第三章的List数据结构
import { List } from './List';

console.log('开始测试List数据结构');
console.log('开始添加元素');
const list = new List();
// 测试数组转List
let testArr = ['a', 'b', 'c', 'd', 'e', 'f']
list.arrayToList(testArr);

console.log('当前元素列表', list.length());
// 初始位置的值
console.log('初始位置的值', list.currPos(), list.getElement());
// 移动位置并获取以后后位置的值
list.next()
list.next()
list.next()
console.log('初始位置的值', list.currPos(), list.getElement());

// 测试列表中是否包含数字5和6
console.log('列表中是否包含5', list.contains(5))

// 测试迭代器
list.forEach(item => {
  console.log('迭代结果', item)
})