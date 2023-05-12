'use client'

import { useState, KeyboardEvent } from "react"
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
            <h1>Finder GitHub</h1>
            <p>Procure um usuario do GitHub</p>
             <div>
                <h3>Digite um perfil existente do GiHub:</h3>
                <input type="text" placeholder="@usuario" value={userName} onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKey} />
                <button onClick={()=> loadUser(userName)}>Buscar</button>
            </div>
        </div>
    )
}