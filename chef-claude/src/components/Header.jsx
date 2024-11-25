
import logo from '/chef.jpeg'
export default function Header(){

    return (
        <header className='site-header'>
            <img src={logo} alt="logo" />
            <h3>Cheff Claude</h3>
        </header>
    )
}