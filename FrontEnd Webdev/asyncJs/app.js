//Example of writing callbacks and promises...

//callbacks..
//fake function to memmic server request...
//Note:
//basically here success --> ref to the callback function.
//inside based on the delay, i decide what to send as param to the callback function.
const fakeRequestCallBack = (url, success, failure)=>{
    //faking server delay
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(()=>{
        if(delay < 4000) {
            success(`Here is your fake response from server ${url}`)  //callbackFunction(callback msg)
        } else {
            failure('Server timeout error');  //callbackFunction(callback msg)
        }
    }, delay);
}

//this is how we are calling the request Function that we defined at the top.
//calling the above callback fucntion...
// fakeRequestCallBack('urrrrl.com', (msg)=>{  //actual success function
//     console.log(`Got it: ${msg}`);
// },(msg)=> { //actual failure function.
//     console.log(`OOps something failed: ${msg}`);
// })

//example of nested callbacks...
//this where 3 times we are calling the resp from server and it become too nested.
//this is known as "callback hell"
// fakeRequestCallBack('books.com', function (resp) {
//     console.log('first Call sucess'+" "+resp);
//     //second call if the first call success
//     fakeRequestCallBack('books.com/page1', function (resp) {
//         console.log('second call is success'+" "+resp);
//         //third call if the first call success
//         fakeRequestCallBack('books/page2', function (resp) {
//             console.log('third call Success'+' '+resp);
//         },
//         function(err) {
//             console.log('third call failed'+' '+err);
//         })
//     }, function (err) {
//         console.log('second call failed'+" "+err);
//     })
// }, function (err) {
//     console.log('first call failed'+" "+err);
// })



//using promises to resolve this callback hell....
//example of a fakePromise functi on making a service call...
const fakeRequestPromise = (url) => {
    return new Promise((fulfilled, reject) => {
        //memic delay from the server..
        const delay = Math.floor(Math.random() * 4500) + 500;       
        setTimeout(()=>{
            if(delay < 4000) {
                fulfilled(`Success ! Received from server ${url}`);  // have the resp from the server.
            }
            else {
                reject('Oops ! Server Timed Out');
            }
        }, delay)
    })
} 


//now calling the promise..
//we will use then() and catch() to chain the inner service call and make the whole thing less nested.
// fakeRequestPromise('books.com')
//     .then((resp)=>{
//         console.log(`First service call resp: ${resp}`);
//         //here only we can call the second service call and chain its then()
//         return fakeRequestPromise('books.com/page2');
//     }).then((resp)=>{
//         console.log(`Second Service call resp: ${resp}`);
//         //now here same way we will make the third service call and chain its then()
//         return fakeRequestPromise('books.com/page3');
//     }).then((resp)=>{
//         console.log(`Third service call resp: ${resp}`);
//     }).catch((err)=>{
//         console.log(`Error in the above service: ${err}`);
//     }) 

//Overall the structure is better than callback hells or nested callback situation


//Using async and wait make the promise syntax more easy and flat. (**Recommended**)

//defining a async function...
// const login = async (username, password) => {
//     if(!username || !password) throw "Missing Data";
//     if(username == 'bfleck' && password == 'bbfleck') return `${username}`;
//     throw "Invalid input";
// }
//the above function returns a promise object.
//if it is returning something then its resolved else it will rejected and throw the error.

//this is how you call a async function....
// login('bfleck', 'bbfleck')
//     .then((resp)=>{
//         console.log("Login successful");
//         console.log(`welcome ${resp}`);
//     })
//     .catch((err)=>{
//         console.log("Invalid input");
//         console.log(`Error: ${err}`);
//     })

//NOTE: Async functions return promise and also we can return promise object from any fucntion.
//The await is used during the call time of a async function. i.e inside async you call await.
//await basicallly waits for the resp to come from the promise object.

const makeTwoRequest = async () =>{  //this also returns a promise object.
    try{
        //this await will wait for the this fakeReq to give promise response and then move on.
        let resp1 = await fakeRequestPromise('books.com');
        console.log("First Request Passed", resp1);
        //same thing again here, it will wait for fakeReq to return a promise response and then move on.
        resp1 = await fakeRequestPromise('books.com/page1');
        console.log("second Request Passed", resp1);
    } catch(e) {
        //if any of the above promise fails then this catch will catch it. and show the proper error.
        console.log(`Error Encountered: ${e}`);
    }
}

//calling the above async function
makeTwoRequest();

    


