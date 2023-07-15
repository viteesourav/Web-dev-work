import { useEffect, useState } from "react";
import GitProfileFrm from "./GitProfileFrm";

const fetchGitProfile = async (userName) => {
    const gitHubApi = await fetch(`https://api.github.com/users/${userName}`);
    const resp = await gitHubApi.json();
    console.log(resp);
    return resp;
}

export default function FetchGitProfile() {
    const[profileId, setProfileId] = useState("");
    const[profileInfo, setProfileInfo] = useState({profileData: "", isLoading: false});

    useEffect(()=>{
        if(profileId.length != 0) {
            fetchGitProfile(profileId)
                .then(data => {
                    setProfileInfo(profileInfo => {
                        return {
                            ...profileInfo, 
                            profileData: data, 
                            isLoading: false
                        }
                    })
                })
        }
    }, [profileId]);
    
    const searchProfile = (profileId) => {
        setProfileInfo({profileData: "", isLoading: true});
        setProfileId(profileId);
    }

    return(
        <div>
            <h1>Git Profile Search</h1>
            <GitProfileFrm onProfileIdUpdate={searchProfile} />
            <span style={{
                    fontSize: "1.5rem",
                    opacity: profileInfo.isLoading ? "1" : "0",
                    transition: "opacity 2s ease-out"
                }}>Loading Profile...</span>
            {profileId.length != 0 && !profileInfo.isLoading &&
            <div style={{display: "flex", flexDirection: "column"}}>
                <img style={{
                    height: "70vh",
                    width: "400px",
                    border: "2px solid black",
                    borderRadius: "40px",
                    margin: "1.2rem",
                    padding: "0.4rem"
                }} 
                src={`${profileInfo.profileData.avatar_url}`} 
                alt="SomeRandomImg" />
                <a style={{
                    border: "2px solid grey",
                    padding: "0.2rem",
                    fontSize: "1.7rem",
                    width: "150px",
                    borderRadius: "30px",
                    cursor: "pointer",
                    marginLeft: "8rem" 
                }} 
                href={`${profileInfo.profileData.html_url}`}
                target="_blank"
                >{`${profileInfo.profileData.login}`}</a>
            </div>}
        </div>
    )
}