//This is my first Express App.

//this how you require and define express
const express = require('express');
const app = express();

console.log("srever is up!!");

//to listen to a particular port
//by deafult the server location will be: localhost:port
app.listen(8080, ()=>{
    console.log('Listening on the port 8080 !!');
})

//to detect any incomming request at that port.
// app.use((req, res)=>{
//     console.log('Server is reading some incomming !!');
//     //ways we can send a httpresponse.
//     //res.send("HI there ! This is the response received !");  //text response
//     res.send({response : "This is what you received from server !"});  //Object response
//     //res.send('<h1>HI there ! This is the response received !');  //html response

// })

//For Routing we can't use app.use() as it listens to all incoming calls be it get or post.

/*for server get calls we will try to make the following

/ --> home page
/about --> about the page
/workspace --> show us a workspace
/* --> not available !!
*/

//this listens to get calls from client.
//it will try to match the path in order they are declared below.
app.get('/', (req,res)=>{
    res.send({message : "This is the home page by Sourav Mitra !"});
})

app.get('/about', (req,res)=>{
    res.send({message : "This is the About page !"});
})

app.get('/workspace', (req,res)=>{
    res.send({message : "This is your workspcae !"});
})

// * --> if other than above anyother path came then this will handle it.
// app.get('*', (req,res)=>{
//     res.send({message : "This is page path is not available !"});
// })

//example of a post request
app.post('/postSomething', (req,res)=>{
    res.send('This is a post call ! And server is responding to it !');
})


//example of request params
app.get('/r/:search', (req,res)=>{
    console.log(req.params); //retruns a obj that has info on params passed
    const{search} = req.params;
    res.send({message: `You requested to view page ${search}`});
})

//if we want to send two path params
app.get('/r/:search/:subsearch', (req,res)=>{
    console.log(req.params); //retruns a obj that has info on params passed
    const{search, subsearch} = req.params;
    res.send({message: `You want info on ${subsearch} from ${search} page`});
})

//how to handle request query
app.get('/search', (req,res)=> {
    console.log(req.query); //retruns a obj that contains all the queries passed to the url.
    const{q} = req.query;
    if(!q) {
        console.log("Nothing found if nothing searched !!");
    }else {
        res.send({message: `You are trying to seach about: ${q}`});        
    }
})

//Tip: install nodemon package globally. It look for file changes and automatically restart the server.