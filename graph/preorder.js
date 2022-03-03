/*jshint esversion: 8 */

/* global console*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const traverse = function (node, array) {
    if (node) {
        array.push(node.val);
    }

    if (node && node.left) {
        traverse(node.left,
                 array);
    }

    if (node && node.right) {
        traverse(node.right,
                 array);
    }
};

const preorderTraversal = function (root) {
    const pre = [];
    traverse(root,
             pre);
    return pre;
};


const leftleft = new TreeNode(21,
                              null,
                              null);
const left = new TreeNode(2,
                          leftleft,
                          null);
const right = new TreeNode(3,
                           null,
                           null);
const root = new TreeNode(1,
                          left,
                          right);

const result = preorderTraversal(root);
console.log(result);
