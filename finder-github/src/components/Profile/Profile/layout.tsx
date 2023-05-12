import { ReactNode } from "react"

interface ProfileProps{
    children: ReactNode
}

export default function ProfileLayout({children}:ProfileProps){
    return(
        <div>
            {children}
        </div>
        
    )
}