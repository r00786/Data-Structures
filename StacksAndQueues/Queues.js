class Node{
    constructor(data){
        this.data=data
        this.next=null
    }

}
class Queue {
    constructor(data){
        const node= new Node(data)
        this.first=node;
        this.last=node;
        this.length=1
    }

    print(){
        let currentNode=this.first
        while(currentNode){
            console.log(currentNode.data)
            currentNode=currentNode.next
        }
    }

    enqeue(data){
        let newNode=new Node(data)
         this.last.next=newNode
         this.last=newNode
         this.length++
    }
    deqeue(){
         this.first=this.first.next
         this.length++
    }
}
let queue =new Queue(10)
queue.print()
console.log("-0---")
queue.enqeue(20)
queue.enqeue(30)
queue.enqeue(40)
queue.enqeue(50)
queue.print()
queue.deqeue()
console.log("-0---")
queue.print()
queue.deqeue()
console.log("-0---")
queue.print()