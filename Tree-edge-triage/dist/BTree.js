"use strict";
/**
 *  In this file I want to build a binary tree with labeled edges based on a probability p.
 *  We will have two parameters N given the levels and probability P.
 *
 *
 *  The actual question: A loses if there is no path in N levels that has At least one A in each level.
 *  Propability that A wins = 1 - Prob(B wins)
 *
 * Beren wins. can we fins a path where in N levels there is no
 * Aaron wins if there is no level of
 *
 *
 */
class BTree {
    constructor(levels, prob) {
        this.levels = levels;
        this.prob = prob;
        this.root = this.buildTree();
    }
    buildTree() {
        let levels = this.levels;
        const root = new BTreeNode();
        const buildLevel = (node, level) => {
            if (level === 0) {
                return;
            }
            // creating the new Nodes
            node.leftChild = new BTreeNode();
            node.rightChild = new BTreeNode();
            // creating and labeling the Edges
            const labelRight = this.decideEdge();
            const labelLeft = this.decideEdge();
            const leftEdge = new BTreeEdge(node, node.leftChild, labelRight);
            const rightEdge = new BTreeEdge(node, node.rightChild, labelLeft);
            // referencing the right nodes for the edges
            node.edgeLeft = leftEdge;
            node.edgeRight = rightEdge;
            // recursive call
            buildLevel(node.leftChild, level - 1);
            buildLevel(node.rightChild, level - 1);
        };
        buildLevel(root, levels);
        return root;
    }
    decideEdge() {
        if (Math.random() >= this.prob) {
            return "A";
        }
        else {
            return "B";
        }
    }
    printTree(node) {
        console.log("Root");
        function printRecursive(node, level) {
            if (node) {
                if (node.edgeLeft && node.edgeRight)
                    console.log(`Level ${level}: ${node.edgeLeft} ${node.edgeRight}`);
            }
            else {
                return;
            }
            printRecursive(node.leftChild, level + 1);
            printRecursive(node.rightChild, level + 1);
        }
        //return this.printTree(node.leftChild) + node.edgeLeft + "" +  node.edgeRight + this.printTree(node.rightChild);
        printRecursive(node, 1);
    }
}
class BTreeNode {
    constructor(leftChild, rightChild) {
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }
}
class BTreeEdge {
    constructor(s, t, v) {
        this.sourceNode = s;
        this.targetNode = t;
        this.value = v;
    }
    toString() {
        return this.value;
    }
}
// create the Tree
const tree = new BTree(3, 0.5);
tree.printTree(tree.root);
