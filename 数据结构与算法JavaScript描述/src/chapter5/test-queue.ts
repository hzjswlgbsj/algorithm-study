// 测试第五章的Stack数据结构
import Queue from './Queue';

console.log('开始测试Stack数据结构');
const queue = new Queue();

console.log('开始添加元素');
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.enqueue('d');
queue.enqueue('e');

// 当前队列中的元素
console.log('当前队列中的元素', queue.toString());

// 当前队首和队尾的值
console.log('当前队首和队尾的值', queue.front(), queue.back());

// 弹出队首的值并返回
console.log('弹出前队列中元素的数量', queue.length());
console.log('被弹出的元素', queue.dequeue());
console.log('弹出后队列顶当前的值', queue.front());
console.log('弹出后队列中元素的数量', queue.length());

console.log('----------------接下来测试用队列来实现基数排序-----------------')
// 基数排序是非比较排序算法，算法的时间复杂度为O(n)。相比于快速排序的O(nlgn),从表
// 面上看具有不小的优势，但实际上可能有些出入，因为基数排序的n可能会有比较大的系数K
