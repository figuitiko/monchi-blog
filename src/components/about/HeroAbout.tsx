const HeroAbout = () => {
  return (
    <section className='w-[1280px] flex gap-8 h-[260px] '>        
        <div className='w-[624px] h-[356px] flex flex-col p-[64px] gap-4 bg-white z-40 ml-[109px] '>
          <h2 className='font-inter text-[1rem] font-medium uppercase leading-5 tracking-widest'>Sobre Nosotros</h2>
          <h1 className='font-sen text-[48px] font-bold leading-[64px] '>
          Somos el impulso que necesitas para alcanzar tus metas.
          </h1>
        </div>
        <div className='flex items-center justify-center'>
          <p className='w-[477px]'>
          Nuestro blog de deporte, estilo de vida y fitness va más allá. Aquí encuentras contenido valioso y motivador para impulsar tu vida. Somos un equipo apasionado, expertos en nutrición, entrenamiento y bienestar.
          </p>
        </div>
      </section>
  )
}

export default HeroAbout