'use client'

import { useState, KeyboardEvent } from "react"
import {FiGithub} from 'react-icons/fi'

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
        <div>
            <h1>Finder GitHub <FiGithub/></h1>
            <p>Encontre um perfil do GitHub</p>
             <div className="users_info">
                <h3>Digite um perfil existente do GitHub:</h3>
                <input type="text" placeholder="Digite o usuário" value={userName} onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKey} />
                <button onClick={()=> loadUser(userName)}>Buscar</button>
            </div>
        </div>
    )
}