'use client'

import { useState, KeyboardEvent } from "react"
import {FiGithub} from 'react-icons/fi'
import styles from '../Profile/profile.module.css'

type UserNameProps ={
    loadUser : (userName: string) => Promise<void>
}

export const UserName = ({loadUser}: UserNameProps) =>{

    const [userName, setUserName] = useState<string>('')

    const handleKey = (e: KeyboardEvent) => {
        if(e.key === 'Enter'){
            loadUser(userName)
        }
    }

    return(
        <div className={styles.info}>
            <h1>Finder GitHub <FiGithub/></h1>
            <p>Visualize Users E Repósitorios</p>
             <div className="users_info">
                <h3>Digite um perfil existente do GitHub:</h3>
                <input type="text" placeholder="Digite o usuário" value={userName} onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKey} />
                <button onClick={()=> loadUser(userName)}>Buscar</button>
            </div>
        </div>
    )
}