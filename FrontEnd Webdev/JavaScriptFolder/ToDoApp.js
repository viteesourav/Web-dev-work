const listOfContent = [];
console.log("Welcome to the To Do List");
let appLogOut = false;
let action = prompt("Enter What you want to Do ? ");

while(!appLogOut) {
    if(action.toLocaleLowerCase() === "quit") {
        appLogOut = true;
        break;
    } else {   
        if(action.toLocaleLowerCase() === "new") {
            let newItem = prompt("Enter what's on your mind ? ");
            listOfContent.push(newItem);
            console.log(`New Item: ${newItem} Inserted in the TO DO List`);
            action = prompt("New Item Inserted !! Now what you want to Do ?");
        } else if(action.toLocaleLowerCase() === "view") {
            alert("Open the console Tab to see the List of To Do's");
            console.log("******************************************");
            if(listOfContent.length > 0) {
                for(let element of listOfContent) {
                    console.log(`${listOfContent.indexOf(element)+1} :: ${element}`);
                }
            } else {
                console.log("The List is empty ! Please add something !!!");
            }
            console.log("******************************************");
            action = prompt("Now what you want to Do ?");
        } else if(action.toLocaleLowerCase() === "delete") {
           let delItem = [];
           let delElement = prompt("Enter the Index or the Item You want to Delete !");
           if(parseInt(delElement)) {
               let eleIndex = parseInt(delElement)-1;
               if(eleIndex < 0 || eleIndex > listOfContent.length-1) {
                console.log("Invalid Index !!");
                action = prompt("Invalid Index Provided ! What you want to Do Next ? ");
               } else {
                   delItem = listOfContent.splice(eleIndex,1);
                   console.log(`your Item: ${delItem[0]} is deleted from the Index Successfully !!`);
                   action = prompt("Delete SuccessFull ! What you want to Do Next ? ");    
               }
           } else {
               if(listOfContent.includes(delElement)) {
                   delItem = listOfContent.splice(listOfContent.indexOf(delElement),1);
                   console.log(`your Item: ${delItem[0]} is deleted from the TO Do List Successfully !!`);
                   action = prompt("Delete SuccessFull ! What you want to Do Next ? ");
               } else {
                console.log("Element Not Found !!");
                action = prompt("Invalid Input String Provided ! What you want to Do Next ? ");
               }
           }
        } else {
            action = prompt("InValid Operation !! Please Type what you want to Do ?");
        }
    }
}
console.log("App Closed. Thank you For using !");