import Link from 'next/link';

const NavBarComponent: React.FC = () => {
  return (
    <nav className='flex gap-4 ml-auto text-white items-center'>
      <div>
        <Link href='/'>Inicio</Link>
      </div>
      <div>
        <Link href='/blog'>blog</Link>
      </div>
      <div>Sobre Nosotros</div>
      <div>Contactenos</div>
    </nav>
  )
}

export default NavBarComponent