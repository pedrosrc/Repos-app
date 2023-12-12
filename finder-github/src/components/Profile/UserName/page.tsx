'use client'

import { useState, KeyboardEvent, ChangeEvent } from "react"
import { FiGithub } from 'react-icons/fi'
import styles from './page.module.css'

type UserNameProps = {
    loadUser: (userName: string) => Promise<void>
}

export const UserName = ({ loadUser }: UserNameProps) => {

    const [userName, setUserName] = useState<string>('')

    const handleKey = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            loadUser(userName)
        }
    }

    const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        setUserName(value)
    }

    return (
        <section className={styles.info}>
            <div className={styles.logo}>
                <h1>Finder GitHub <FiGithub /></h1>
                <p>Visualize Users e Repósitorios de uma forma diferente</p>
            </div>
            <div className={styles.user_info}>
                <h3>Digite um perfil existente do GitHub:</h3>
                <input type="text" placeholder="Digite o usuário" value={userName} onChange={handleChange} onKeyDown={handleKey} />
                <button onClick={() => loadUser(userName)}>Buscar</button>
            </div>
        </section>
    )
}