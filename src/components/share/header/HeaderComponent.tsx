import LogoBoxComponent from './LogoBoxComponent'
import NavBarComponent from './NavBarComponent'
import SubscribeBtn from './SubscribeBtn'

const HeaderComponent = () => {
  return (
    <header className='flex px-[83px] items-center py-26px sticky top-0 bg-[#232536] h-[80px]  z-50 w-full'>
      <LogoBoxComponent />
      <NavBarComponent />
      <SubscribeBtn />
    </header>
  )
}

export default HeaderComponent
