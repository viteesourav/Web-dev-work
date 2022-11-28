// //Here is how we make an httpRequest via XMLHttpRequest

// //we will first define the object
// const req = new XMLHttpRequest();

// //now you have to open it and send it.
// req.open("GET", "https://swapi.dev/api/people/10/");
// req.send();

// //on success it will run this eventListener
// req.onload = function() {
//     console.log("It Loaded !!!");
//     const data = JSON.parse(this.responseText);
//     console.log(data);
// }
// //on Failure it will run this eventListener
// req.onerror = function() {
//     console.log("Error !!!");
//     console.log(this);
// }


//how to make the Fetch API calls...
// fetch("https://swapi.dev/api/people/10/")
//     .then((resp) => {
//         console.log("Data Fetched !!", resp);
//         //we wont be able to see the body so we need to parse it.
//         return resp.json();  //this also returns promise so we will parse it.
//     })
//     .then((resp)=> {
//         console.log("The data received: ", resp);
//     })
//     .catch((err) => {
//         console.log("Shitt !! Caught an error !!", err);
//     })


//using aync function to write the above call in a clean way...
//here we are making 2 sequential call...
const loadStarWarPeeps = async() => {
    try{
    const resp1 = await fetch("https://swapi.dev/api/people/10/");
    const  resp1Data = await resp1.json();
    console.log("response1 Data: ", resp1Data);
    const resp2 = await fetch("https://swapi.dev/api/people/11/");
    const  resp2Data = await resp2.json();
    console.log("response2 Data: ", resp2Data);
    } 
    catch(err) {
        console.log("Error Caught", err);
    }
}

//loadStarWarPeeps();

//Using Axios lib for writing much simple and understandable code.
// axios.get("https://swapi.dev/api/people/10/")
//     .then((resp) => {
//         console.log("response Received: ", resp); //here we have data that already is parsed in JSON.
//     })
//     .catch((err) => {
//         console.log("Error: ", err);
//     })


//using the above logic in an async function.
const giveStarPeepsInfo = async (id) => {
    try {
        const resp1 = await axios.get(`https://swapi.dev/api/people/${id}/`);  //axios retuns a promise so we can await.
        console.log("Response Recived: ", resp1.data);
    }
    catch(e) {
        console.log("Shit Caught Error: ", err);
    }
}

//calling the function above and passing random argument between 1 to 50.
const peepId = Math.floor(Math.random() * 50) + 1; //this will generate random number btw 1 to 50.
giveStarPeepsInfo(peepId)
    .then(()=>{
        console.log(`Response received for peepId: ${peepId}`);
    })


//how to send Request headers using axios.
const getDadJokes = async () => {
    try{
        const config = {
            headers : {Accept : 'application/json'}  //header is case-sensative. (Imp)
        };
        const resp = await axios.get("https://icanhazdadjoke.com/", config); //without proper header this particualr call returns HTML.
        console.log("From Server Dad JOke Alert !! :>");
        console.log(resp.data.joke);
        return resp.data.joke;
    }
    catch(err) {
        console.log("Shit error Encountered in service call !");
        return 'Errror Fetching Jokes';
    }
}

const jokeBtn = document.querySelector('#jokeBtn');
const displayJoke = document.querySelector('#displayJoke');

//adding a async function..
const addNewJokes = async () => {
    const resp = await getDadJokes();
    const newJoke = document.createElement('LI');
    newJoke.innerText = resp;
    displayJoke.append(newJoke);
}

//calling..
jokeBtn.addEventListener('click', addNewJokes);  //calling the above function by refernece.