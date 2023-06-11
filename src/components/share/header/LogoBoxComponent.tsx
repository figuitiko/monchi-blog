import Image from 'next/image'

const LogoBoxComponent = () => {
  return (
    <picture className='flex flex-col'>
      <Image src="/logo.png" alt="Logo" width={128} height={50} />
    </picture>
  )
}

export default LogoBoxComponent