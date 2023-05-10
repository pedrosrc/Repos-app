'use client'

import { useState } from "react"
import styles from './profile.module.css'

export async function Profile() {

    const [user, setUser] = useState<string>('pedrosrc')
    const [infoUser, setInfoUser] = useState<UserProps | any>({})


    interface UserProps{
        name: string,        
        location: string, 
        followers: number, 
        following: number, 
        avatar_url: string,
    }

    async function handleSubmit(e: any) {
        e.preventDefault();
        if (user === '') {
            alert('Digite um user valido')
        } else {
            console.log(user)
            const response = await fetch(`https://api.github.com/users/${user}`, {
                next: {
                    revalidate: 60
                }
            })
            const repos = await response.json();
            const {name, location, followers, following, avatar_url} = repos;
            const userData : UserProps = {
                name,
                location, 
                followers, 
                following, 
                avatar_url
            }
            setInfoUser(userData);
            console.log(userData)
            
        }     
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.formUser}>
                <h3>Digite um perfil existente do GiHub:</h3>
                <input type="text" placeholder="@usuario" value={user} onChange={(e) => setUser(e.target.value)} />
                <button type="submit">Buscar</button>
            </form>
            <div className={styles.info}>
                <h1>Name {infoUser.name}</h1>
                
            </div>
        </div>
    )
}