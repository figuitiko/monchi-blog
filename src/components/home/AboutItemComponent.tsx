interface Props {
  title: string
  heading: string
  description: string
  isReadMore?: boolean
}
const AboutItemComponent = ({ title, heading, description, isReadMore = false }: Props) => {
  return (
    <div className='flex flex-col gap-4 '>
      <span className='text-[16px] leading-5 font-semibold text-[#232536]'>{title}</span>
      <h3 className='font-sen font-bold text-[36px] leading-[48px] tracking-[-2]'>{heading}</h3>
      <p className='font-inter text-[16px] text-[#6D6E76]'>{description}</p>
      {
        isReadMore && (
          <button className='w-[108px] h-[42px] flex justify-center items-center mt-8 hover:border-2 hover:border-[#592EA9]' >
            <span className='text-[#592EA9] font-bold '>{'leer mas >'}</span>
          </button>
        )
      }
    </div>
  )
}

export default AboutItemComponent
