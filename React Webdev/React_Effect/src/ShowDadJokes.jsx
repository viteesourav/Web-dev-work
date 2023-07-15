import { useEffect, useState } from "react"

const fetchNewJoke = async () => {
    const jokeResp = await fetch("https://icanhazdadjoke.com/", 
    {
        method: "GET",
        headers: {
            Accept: "application/json"
          },
    });
    const jokeMsg = await jokeResp.json();
    return jokeMsg.joke != undefined ? jokeMsg.joke : "No Jokes";
}

export default function ShowDadJokes() {
    const [joke, setJoke] = useState("");
    const [isLoading , setIsLoading] = useState(true);

    useEffect(()=> {
        fetchNewJoke().then((msg)=> {
            setJoke(msg);
            setIsLoading(false);
        })
    }, []);

    const handleOnClick = () => {
        setIsLoading(true);
        fetchNewJoke().then((msg) => {
            setJoke(msg);
            setIsLoading(false);
        })
    }

    return (
        <div>
            <span style={{
                display: "block",
                margin: "1.5rem",
                opacity: `${isLoading ? 1 : 0}`,
                transition: "opacity 1s ease-out"
            }}>Loading....</span>
            <button onClick={handleOnClick}>Fetch New Joke</button>
            <h2>{joke}</h2>
        </div>
    )
}