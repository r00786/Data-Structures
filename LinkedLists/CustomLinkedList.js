class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor(initialValue) {
        this.head = new Node(initialValue);
        this.tail = this.head;
        this.length = 1
    }
    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++

    }
    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode
        this.length++

    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array;
      }
    insert(index, value) {
        if(index==0){
            this.prepend(value)
            return this
        }else if(index>=this.length){
            this.append(value)
            return this
        }
        const nodeToInsertAfter = this.traverseToIndex(index - 1)
        const newNode = new Node(value)
        const holder = nodeToInsertAfter.next;
        nodeToInsertAfter.next = newNode
        newNode.next = holder;
        return this
    }
    delete(index){
        if(index==0){
            this.head=this.head.next
            return
        }
        const nodeToInsertAfter = this.traverseToIndex(index - 1)
        const unwantedNode=nodeToInsertAfter.next;
        nodeToInsertAfter.next=unwantedNode.next;
        this.length--;
    }

    traverseToIndex(index) {
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentIndex !== index&&currentNode.next!=null) {
            currentNode = currentNode.next;
            currentIndex++
        }
        return currentNode;

    }
    reverse(){
        if(!this.head.next){
            return this.head
        }
        let first = this.head;
        let second =this.head.next;
        this.tail=this.head;
        while(second){
            let temp=second.next;
            second.next=first;
            first=second;
            second=temp;
        }
        this.head.next=null;
        this.head=first;
        return this.printList();
    }
   

}
const linkedList = new LinkedList(10)
linkedList.prepend(20)
linkedList.insert(0, 99);
linkedList.insert(1, 88);
linkedList.printList().forEach(ele=> console.log(ele))
console.log("---")
linkedList.reverse().forEach(ele=> console.log(ele))