'use client'

import { useState } from "react"
import { UserName } from "../UserName/page"
import { UserProps, ReposProps } from "@/components/Types/types"
import { Users } from "./users"
import { Error } from "@/components/Error/page"



export const Profile = () => {

    const [user, setUser] = useState< UserProps | null >(null)
    const [dataRepos, setDataRepos] = useState<ReposProps | null>(null)
    const [error, SetError] = useState<boolean>(false)

    
    const handleSubmit = async ( userName: string) => {

        SetError(false);
        setUser(null);

        const response = await fetch(`https://api.github.com/users/${userName}`, {
                next: {
                    revalidate: 60
                }
            })
        const userProfile = await response.json();
        if (response.status === 404){
            SetError(true)
            return;
        };
        const {name, location, followers, following, avatar_url, login} = userProfile;
        const userData: UserProps = {
            name,
            followers, 
            following, 
            avatar_url,
            location, 
            login,
        }; 
        setUser(userData);
    }

    return (
        <div>
            <UserName loadUser={handleSubmit}/>  
            {user && <Users {...user}/>}
            {error && <Error/>}
        </div>
    )
}