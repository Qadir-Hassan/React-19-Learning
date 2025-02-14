import desktop_logo from '../assets/images/logo-desktop.png'
import toggle_icon from '../assets/images/menu-toggle-icon.svg'

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Services", href: "#", current: false },
  { name: "Work", href: "#", current: false },
  { name: "Process", href: "#", current: false },
  { name: "About", href: "#", current: false },
  { name: "Careers", href: "#", current: false },
];

export default function Header() {
  return (
    <header className='py-3 px-6  bg-grey-15 flex justify-between items-center lg:px-20 lg:py-5 2xl:container-2xl m-auto'>

        <div className="w-28 logo md:w-72 ">
                <img src={desktop_logo} alt={desktop_logo} />
        </div>

        <div className=" hidden  bg-grey-15 lg:flex">
                <nav className= 'flex justify-center flex-col items-center py-6 gap-y-4  text-white lg:flex-row lg:justify-start lg:gap-6 text-[16px] 2xl:text-[18px] 2xl:gap-x-8 '>
                    {navigation.map( (item)=>(
                        <a 
                        className='text-grey-90  hover:text-green-50 '
                        key={item.name}
                        
                        href={item.href}>
                            {item.name}


                        </a>
                    ))}
                </nav>
        </div>
                        {/* Mobile Menu */}
        <div className="hidden absolute w-full left-0 top-[50%] bg-grey-15">
                <nav className= 'flex justify-center flex-col items-center py-6 gap-y-4  text-white lg:flex-row'>
                    {navigation.map( (item)=>(
                        <a 
                        className='text-grey-90  hover:text-green-50  lg:text-[18px]'
                        key={item.name}
                        
                        href={item.href}>
                            {item.name}


                        </a>
                    ))}
                </nav>
        </div>

        <div className='bg-grey-15 p-2 rounded-[6px] lg:hidden'>
                    <img className='w-12' src={toggle_icon} alt={toggle_icon} />
        </div>

        

        <div className='hidden lg:block'>
            <a href="#" className="primary-btn" >Contact Us</a>
        </div>
    </header>
  )
}





{
  /* 

            <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'rounded-md px-3 py-2 text-sm font-medium',
                            )}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div> */
}
