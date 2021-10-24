function merge2Arrays(arr1,arr2){
    let mergedArray=[]
    let firstItem=arr1[0];
    let secondItem= arr2[0];
    let firstTraversedItem=1;
    let secondTraversedItem=1;
    while(firstItem || secondItem){
         if(!secondItem|| firstItem<secondItem){
             mergedArray.push(firstItem)
             firstItem=arr1[firstTraversedItem]
             firstTraversedItem++
         }else{
            mergedArray.push(secondItem)
            secondItem=arr2[secondTraversedItem]
            secondTraversedItem++
         }
    }
    return mergedArray;

}
console.log(merge2Arrays([1,3,5,7],[2,4,6]))