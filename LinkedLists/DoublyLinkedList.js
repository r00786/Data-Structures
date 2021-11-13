class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev=null
    }
}
class DoublyLinkedList {
    constructor(initialValue) {
        this.head = new Node(initialValue);
        this.tail = this.head;
        this.length = 1
    }
    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        newNode.prev=this.tail
        this.tail = newNode
        this.length++

    }
    prepend(value) {
        const newNode = new Node(value)
        newNode.prev=null
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
      printReverseList() {
        const array = [];
        let currentNode = this.tail;
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.prev
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
        const leader = this.traverseToIndex(index - 1)
        const newNode = new Node(value)
        const follower = leader.next;
        leader.next=newNode
        follower.prev=newNode
        newNode.prev=leader
        newNode.next=follower
        return this
    }
    delete(index){
        if(index==0){
            this.head=this.head.next
            this.head.prev=null
            return
        }else if(index>=(this.length-1)){
              this.tail=this.tail.prev
              this.tail.next=null
              return
        }
        const leader = this.traverseToIndex(index - 1)
        const unwantedNode=leader.next;
        leader.next=unwantedNode.next;
        unwantedNode.next.prev=leader
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

}
const linkedList = new DoublyLinkedList(10)
linkedList.append(20)
linkedList.append(7)
linkedList.prepend(1)
linkedList.prepend(2)
linkedList.insert(3, 99);
linkedList.printList().forEach(ele=> console.log(ele))
console.log("----")
linkedList.delete(1);
linkedList.printList().forEach(ele=> console.log(ele))
console.log("----")
linkedList.delete(4);
linkedList.printList().forEach(ele=> console.log(ele))
linkedList.delete(3);
console.log("----")
linkedList.printList().forEach(ele=> console.log(ele))

console.log("----")
linkedList.printReverseList().forEach(ele=> console.log(ele))