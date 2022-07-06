// 测试第九章的集合（set）数据结构
import { Set } from './Set';

console.log('开始测试Set数据结构');
const set1 = new Set();
const set2 = new Set();

// 开始给set1添加元素
set1.add('a');
set1.add('b');
set1.add('c');
set1.add('d');
set1.add('e');
console.log('set1当前元素', set1.show());

// 开始给set2添加元素
console.log('开始给set2添加元素');
set2.add('b');
set2.add('c');
set2.add('d');
console.log('set2当前元素', set2.show());

// 取set1和set2的交集
const inter = set1.intersect(set2);
console.log('set1和set2的交集：', inter.show());

// 取set1和set2的并集
const union = set1.union(set2);
console.log('set1和set2的并集：', union.show());

// 取set1和set2的补集
const diff = set1.difference(set2);
console.log('set1和set2的补集：', diff.show());

// 判断set2是不是set1的子集
console.log('set2是否是set1的子集：', set2.subset(set1));


