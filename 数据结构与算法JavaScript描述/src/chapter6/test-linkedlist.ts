// 测试第六章的LinkedList数据结构
import LinkedList from './LinkedList';

console.log('开始测试LinkedList数据结构');
const linkedList = new LinkedList();

console.log('开始添加元素');
linkedList.insert('a', 'head');
linkedList.insert('b', 'a');
linkedList.insert('c', 'b');
linkedList.insert('d', 'c');
linkedList.insert('e', 'd');
linkedList.insert('f', 'e');

// 当前队列中的元素
console.log('当前队列中的元素', linkedList.display());
console.log('删除f元素所在的节点', linkedList.remove('a'));
console.log('删除f所在节点后当前队列中的元素', linkedList.display());

console.log('----------------接下来测试用队列来实现基数排序-----------------')
// 基数排序是非比较排序算法，算法的时间复杂度为O(n)。相比于快速排序的O(nlgn),从表
// 面上看具有不小的优势，但实际上可能有些出入，因为基数排序的n可能会有比较大的系数K
