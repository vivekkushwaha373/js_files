function treeNode(val) {
    this.value = val,
    this.left = null,
    this.right = null
}

function inorder(root)
{
    //inorder traversal in javascript
    if(root!=null)
    {
    inorder(root.left)
    console.log(root.value)
    inorder(root.right)
    }
}

const root = new treeNode(5)
root.left=new treeNode(3)
root.right = new treeNode(7)
// console.log(root.value)
// console.log(root.left.value)
// console.log(root.right.value)
inorder(root)