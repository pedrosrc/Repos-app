import './page.modules.css'
import {Profile} from '@/components/Profile/User/page'
export default function Home() {
  return (
    <div>
        <h1>
          Finder Profile GitHub
        </h1>
        <p>Busque um perfil do GitHub Aqui!</p>
        {/* @ts-expect-error Async Server Component */}
        <Profile/>
    </div>
  )
}
