import BtnLinkComponent from "../share/BtnLinkComponent"

const HeroContentComponent = () => {
  return (
    <div className='flex flex-col'>
      <h4 className='text-white font-inter mb-6'>Analiza, pronostica, triunfa en el deporte</h4>
      <h1 className='text-white font-sen font-bold text-[56px] mb-12'>Desafía tus límites, analiza tus jugadas, pronostica tu éxito</h1>
      <BtnLinkComponent url='/subscribe' text='Suscríbete' />     
    </div>
  )
}

export default HeroContentComponent