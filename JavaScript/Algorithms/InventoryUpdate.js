// Inventory Update
// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
    let index;
    const arrCurInvName = [];
    const arrNewInvName = [];
 
    arr1.forEach( item1 => {
        arr2.forEach ( item2 => {
            if ( item1[1] === item2[1]) {
                item1[0] = item1[0] + item2[0]
            }
        })
    })
    
    // Get item's name for new inventory
    arr2.forEach(item => {
       arrNewInvName.push(item[1])
    })
 
    // Get item's name for current inventory
    arr1.forEach(item => {
       arrCurInvName.push(item[1])
    })
 
    // Add new inventory items to current inventory
     arrNewInvName.forEach( item => {
         if(arrCurInvName.indexOf(item) === -1){
             index = arrNewInvName.indexOf(item)
             arr1.push(arr2[index])
         }
     })
    // Sort the array alphabetically using the second element of the array as base.
    arr1.sort((currItem, nextItem)=> {
        return currItem[1] > nextItem[1] ? 1 : -1
    })
    return arr1;
 }
 
 // Example inventory lists
 var curInv = [
     [21, "Bowling Ball"],
     [2, "Dirty Sock"],
     [1, "Hair Pin"],
     [5, "Microphone"]
 ];
 
 var newInv = [
     [2, "Hair Pin"],
     [3, "Half-Eaten Apple"],
     [67, "Bowling Ball"],
     [7, "Toothpaste"]
 ];
 
 updateInventory(curInv, newInv);