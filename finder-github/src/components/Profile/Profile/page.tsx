'use client'

import { useState } from "react"
import { UserName } from "../UserName/page"
import { UserProps } from "@/components/Types/types"
import { Users } from "./users"
import { Error } from "@/components/Error/page"
import styles from './profile.module.css'


export const Profile = () => {

    const [user, setUser] = useState< UserProps | null >(null)
    const [error, SetError] = useState<boolean>(false)

    
    const handleSubmit = async ( userName: string) => {

        SetError(false);
        setUser(null);

        const response = await fetch(`https://api.github.com/users/${userName}`, {
                next: {
                    revalidate: 60
                }
            })
        const repos = await response.json();
        if (response.status === 404){
            SetError(true)
            return;
        };
        const {name, location, followers, following, avatar_url, login} = repos;
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
        <div className={styles.info}>
            <UserName loadUser={handleSubmit}/>  
            {user && <Users {...user}/>}
            {error && <Error/>}
        </div>
    )
}