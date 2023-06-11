import LogoBoxComponent from "./LogoBoxComponent"
import NavBarComponent from "./NavBarComponent"
import SubscribeBtn from "./SubscribeBtn"

const HeaderComponent = () => {
  return (
    <section id='hero' className='flex px-[83px] items-center py-26px bg-[#232536] h-[80px]  fixed z-50 w-full'>
      <LogoBoxComponent />
      <NavBarComponent />
      <SubscribeBtn />
    </section>
  )
}

export default HeaderComponent