import { CArray } from './CArray';

const numElements = 100
const myNums = new CArray(numElements)
myNums.setData()
console.log(myNums.toString())

// 测试排序
// myNums.bubbleSort() // 冒泡
// myNums.selectionSort() // 选择
// myNums.insertionSort() // 选择
// myNums.shellSort() // 希尔
const res = myNums.mergeSort(myNums.dataStore) // 归并
console.log(res)
// console.log(myNums.toString())