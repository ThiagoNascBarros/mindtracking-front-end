import './header.css'
import './../../styles.css'

export default function Header() {

    return (

        <header className="w-full h-20 bg-white pl-42 pr-42 flex items-center justify-between header">
            <div className="logo flex items-center gap-4">
                <img 
                    src="src/assets/Logo.svg" 
                    alt="Logo"
                    className='size-14'
                />
                <h2 className='font-semibold text-2xl '><span className='cor-azul-logo'>Mind</span>Tracking</h2>
            </div>
            <div className="nav">
                <ul className="flex xl:gap-10 md:gap-5 sm:gap-2">
                    <li><a className='cor-da-font font-normal' href="/">Inicial</a></li>
                    <li><a className='cor-da-font font-normal' href="/questionarios">Questionários</a></li>
                    <li><a className='cor-da-font font-normal' href="/mindIa">Mind IA</a></li>
                    <li><a className='cor-da-font font-normal' href="/dashboard">Dashboard</a></li>
                </ul>
            </div>
            <div className="btn-comecar">
                <button className='bg-button text-white pl-2.5 pr-2.5 pt-1.5 pb-1.5 rounded-3xl font-bold'>Comece Agora</button>
            </div>
        </header>

    )
    
}