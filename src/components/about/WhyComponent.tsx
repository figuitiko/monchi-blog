import WhyItemComponent from "./WhyItemComponent"


const WhyComponent = () => {
  return (
    <section className='flex flex-col w-[1280]'>
      <WhyItemComponent 
          haveShape = {true} 
          heading='Our team of creatives' 
          subHeading='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
           excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."
          />
      <WhyItemComponent 
        isRight={true}     
        heading='Our team of creatives'
        subHeading='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."
      />
    </section>
  )
}

export default WhyComponent