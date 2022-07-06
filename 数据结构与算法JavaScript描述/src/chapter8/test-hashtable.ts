// 测试第八章的HashTable数据结构
import { HashTable } from './HashTable';

console.log('开始测试HashTable数据结构');
const hashTable = new HashTable();
const smoeNames = ['sixty', 'tom', 'jim', 'junny', 'jack']

console.log('开始添加元素');
smoeNames.map(name => hashTable.put(name))

console.log('当前散列表:');
hashTable.showDistro()


