//TREE TRAVERSAL

// class node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const node = function(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

let one = new node(1);
let two = new node(2);
let three = new node(3);
let four = new node(4);
let five = new node(5);
let six = new node(6);
let seven = new node(7);

one.left = two;
one.right = three;

two.left = four;
two.right = five;

three.left = six;
three.right = seven;

console.log(
  `
           1
         /   \\
        2      3 
      /  \\   /  \\
     4   5  6    7 
    `
);

// left node right --> [4,2,5,1,6,3,7]
const inorder = (head) => {
  let res = [];

  const search = (node) => {
    if (!node) return;
    search(node.left);
    res.push(node.val);
    search(node.right);
  };

  search(head);
  return res;
};

console.log("inorder", inorder(one));

//node left right -->[1,2,3,4,5,6,7]
const preorder = (head) => {
  let res = [];

  const search = (node) => {
    if (!node) return;
    res.push(node.val);
    search(node.left);
    search(node.right);
  };

  search(head);
  return res;
};

console.log("preorder traversal", preorder(one));

const levelOrder = (head) => {
  if (!head) return [];
  let res = [];
  let q = [head];

  while (q.length) {
    const node = q.shift();
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
    res.push(node.val);
  }

  return res;
};

console.log("level order traversal", levelOrder(one));

//left right node [4,5,2,6,7,3,1]
const postorder = (head) => {
  let res = [];
  const search = (node) => {
    if (!node) return;
    search(node.left);
    search(node.right);
    res.push(node.val);
  };

  search(head);
  return res;
};

console.log("postorder", postorder(one));
