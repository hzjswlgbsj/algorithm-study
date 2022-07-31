import Node, { INode } from "./Node";
interface IBST {
  root: any;
  insert: (data: any) => void; // 向二叉查找树中插入值
  inOrder: (node: null | Node, cb?: (node: Node) => void) => void; // 中序遍历
  preOrder: (node: null | Node, cb?: (node: Node) => void) => void; // 先序遍历
  postOrder: (node: null | Node, cb?: (node: Node) => void) => void; // 后序遍历
  showTree: () => void;
  getMin: () => any;
  getMax: () => any;
  find: (value: any) => Node | null;
  remove: (node: Node) => void;
  removeNode: (node: Node, data: any) => void;
  min: (node: Node) => Node | null; // 查找某个节点最小的后代节点
  max: (node: Node) => Node | null; // 查找某个节点最大的后代节点
  updateCount: (node: Node) => Node | null; // 更新某个节点
}

// 二叉查找树
export class BST implements IBST {
  public root: any = null;

  public showTree() {
    console.log("当前树结构", this.root);
  }
  public insert(data: any) {
    const node = new Node(data, null, null);
    if (this.root == null) {
      this.root = node;
    } else {
      let current = this.root;
      let parent;
      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          if (current == null) {
            parent.left = node;
            break;
          }
        } else {
          current = current.right;
          if (current == null) {
            parent.right = node;
            break;
          }
        }
      }
    }
  }

  // 中序遍历
  public inOrder(node: null | Node, cb?: (node: Node) => void) {
    if (!(node === null)) {
      this.inOrder(node.left, cb);
      // node.show();
      if (cb && typeof cb === "function") {
        cb(node);
      }
      this.inOrder(node.right, cb);
    }
  }

  // 前序遍历
  public preOrder(node: null | Node, cb?: (node: Node) => void) {
    if (!(node === null)) {
      // node.show()
      if (cb && typeof cb === "function") {
        cb(node);
      }
      this.preOrder(node.left, cb);
      this.preOrder(node.right, cb);
    }
  }

  // 后序遍历
  public postOrder(node: null | Node, cb?: (node: Node) => void) {
    if (!(node === null)) {
      this.postOrder(node.left, cb);
      this.postOrder(node.right, cb);
      // node.show()
      if (cb && typeof cb === "function") {
        cb(node);
      }
    }
  }

  public getMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  }
  public getMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }

    return current.data;
  }

  // 使用已经实现的 中序、先序、后序遍历会多执行遍历次数，
  // 无论什么时候找到对应节点都会将整棵树遍历一遍
  // public find(data: any) {
  //   let findNode = null;
  //   this.inOrder(this.root, (node: Node) => {
  //     if (data === node.data) {
  //       findNode = node
  //     }
  //   })

  //   return findNode;
  // }

  // 这种方式可自己控制跳出遍历的时机
  public find(data: any): INode | null {
    var current = this.root;
    while (current != null) {
      if (current.data == data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  // 从 BST 中删除节点的第一步是判断当前节点是否包含待删除的数据，如果包含，则删除该节点；
  // 如果不包含，则比较当前节点上的数据和待删除的数据。如果待删除数据小于当前 节点上的数据，
  // 则移至当前节点的左子节点继续比较；如果删除数据大于当前节点上的数 据，则移至当前节点的右子节点继续比较。

  // 如果待删除节点是叶子节点（没有子节点的节点），那么只需要将从父节点指向它的链接指向 null。
  // 如果待删除节点只包含一个子节点，那么原本指向它的节点久得做些调整，使其指向它的子节点。

  // 最后，如果待删除节点包含两个子节点，正确的做法有两种：要么查找待删除节点左子树上的最大值，
  // 要么查找其右子树上的最小值。这里我们选择后一种方式。
  public remove(data: any) {
    this.removeNode(this.root, data);
  }

  public removeNode(node: null | Node, data: any) {
    if (node === null) {
      return null;
    }

    if (node.data === data) {
      // 没有子节点的节点
      if (!node.left && !node.right) {
        return null;
      }
      // 没有左子节点的节点
      if (!node.left) {
        return node.right;
      }
      // 没有右子节点的节点
      if (!node.right) {
        return node.left;
      }
      // 有两个子节点的节点
      const tempNode = this.min(node.right);
      if (tempNode) {
        node.data = tempNode.data;
        node.right = this.removeNode(node.right, tempNode.data);
        return node;
      }
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else {
      node.right = this.removeNode(node.right, data);
      return node;
    }

    return null;
  }

  public min(node: INode): INode | null {
    if (node.left) {
      return this.min(node.left);
    }
    return null;
  }
  public max(node: INode): INode | null {
    if (node.right) {
      return this.max(node.right);
    }
    return null;
  }
  public updateCount(data: any): INode | null {
    const node = this.find(data);
    if (node) {
      node.count++;
    }
    return node;
  }
}
