function nextInLine(arr, item) {
    // Only change code below this line
    // 1º Push the item with the .push() function(which will be assign when we call the function down below)
    arr.push(item);
    // This part i didnt got yet, but im assuming stuff
    // since we need to return the value which was removed from our array, i must assign that value from the function  .shift() to a variable.
    const item = arr.shift();
  
    // For last, return the value assigned to the variable
    return item; 
    // Only change code above this line
  }
  
  // Setup bs
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code other bs
  console.log("Before:" + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After:" + JSON.stringify(testArr));
  