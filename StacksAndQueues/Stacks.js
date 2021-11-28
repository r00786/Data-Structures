class Node{
    constructor(data){
        this.data=data
        this.next=null
    }

}
class Stack {
    constructor(data){
        const node= new Node(data)
        this.top=node;
        this.bottom=node;
        this.length=1
    }

    print(){
        let currentNode=this.top
        while(currentNode){
            console.log(currentNode.data)
            currentNode=currentNode.next
        }
    }

    push(data){
        let newNode=new Node(data)
         newNode.next=this.top
         this.top=newNode
         this.length++
    }
    pop(){
         this.top=this.top.next
         this.length++
    }
}
let stack =new Stack(10)
stack.print()
console.log("-0---")
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.print()
stack.pop()
console.log("-0---")
stack.print()
stack.pop()
console.log("-0---")
stack.print()