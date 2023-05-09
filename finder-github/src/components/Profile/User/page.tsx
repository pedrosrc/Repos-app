'use client'

import { useEffect, useState } from "react"

export async function Profile(){

    const [user, setUser] = useState<string>('pedrosrc')
    const [infoUser, setInfoUser] = useState<any[]>([])

    async function handleSubmit(e: any) {
        e.preventDefault();
        console.log(user)
    }

    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                <h3>Digite um perfil existente do GiHub:</h3>
                <input type="text" placeholder="@usuario" value={user} onChange={(e)=> setUser(e.target.value)}/>
                <button type="submit">Buscar</button>
                </form>
            </div>
            <div>
                {infoUser.map((item)=>{
                    return(
                        <div>
                            <h2>{item.name}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}