class HashTable {
    constructor(size){
      this.data = new Array(size);
    }

    set(key ,value){
        let index=this._hash(key)
        if(!this.data[index]){
          this.data[index]=[]
        }
        this.data[index].push([key,value])
    }
    get(key){
     let arr= this.data[this._hash(key)]
         if(arr){
           if(arr[0][0]==key){
             return arr[0][1]
           }
           for(let i=0;i<arr.length;i++){
             let currentObj=arr[i];
             if(currentObj[0]==key){
               return currentObj[1]
             }
           }
         }

        return undefined 
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    keys(){
      const keyArray=[]
      for(let i=0;i<this.data.length;i++){
        if(this.data[i]){
             for(let j=0;j<this.data[i].length;j++){
               keyArray.push(this.data[i][j][0])
             }
        
        }
      }

return keyArray
    }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000)
  myHashTable.set('grapes', 10001)
  console.log(myHashTable.get('grapes'))
  myHashTable.set('apples', 9)
  console.log(myHashTable.get('apples'))

  
  console.log(myHashTable.keys())
  