// 测试第四章的Stack数据结构
import { Stack } from './Stack';

console.log('开始测试Stack数据结构');
const stack = new Stack();

console.log('开始添加元素');
stack.push('a');
stack.push('b');
stack.push('c');
stack.push('d');
stack.push('e');

console.log('当前栈元素数量', stack.length());

// 栈顶的值
console.log('栈顶当前的值', stack.peek());

// 弹出栈顶当前的值并返回
console.log('弹出前栈顶当前的值', stack.peek());
console.log('弹出前栈中元素的数量', stack.length());
const popElement = stack.pop()
console.log('被弹出的元素', popElement);
console.log('弹出后栈顶当前的值', stack.peek());
console.log('弹出后栈中元素的数量', stack.length());

console.log('----------------接下来测试用栈来实现进制转化-----------------')
// 只实现2 -9 进制
function mulBase(number: number, base: number) {
  let res = '';
  const stack = new Stack();
  do {
    stack.push(number % base)
    number = Math.floor(number / base);
  } while(number > 0);
  
  while(stack.length() > 0) {
    res += stack.peek();
    stack.pop()
  }
  return res;
}
console.log('进制转换函数实现为\n', mulBase)
console.log('十进制数字5转二进制:', mulBase(5, 2));
console.log('十进制数字10转二进制:', mulBase(10, 2));
console.log('十进制数字10转八进制:', mulBase(10, 8));

console.log('----------------接下来测试用栈来实现递归-----------------')

function factorial(num: number): number {
  if (num > 0) {
    return num * factorial(num - 1)
  }
  return 1;
}

console.log('递归实现阶乘\n', factorial, '\n', factorial(5));

function stackFactorial(n: number) {
  let stack = new Stack()
  let res = 1;
  // for (let i = 1; i <= n; i++) {
  //   stack.push(i)
  // }
  while (n > 1) {
    stack.push(n--);
  }
  while (stack.length() > 0) {
    res *= stack.pop();
  }

  return res;
}

console.log('用栈实现阶乘\n', stackFactorial, '\n', stackFactorial(5));