interface Props {
  subHeading: string
  heading: string
}

const SinglePostHeading = ({ subHeading, heading}: Props) => {
  return (
    <div className='flex flex-col pt-[32px] pl-[32px] hover:bg-[#FBF6EA] cursor-pointer hover:transform matrix(-1, 0, 0, 1, 0, 0)'>
      <small className='font-inter text-[14px] leading-5 font-normal '>
        {subHeading}
      </small>
      <h4 className='font-sen font-bold text-[24px] '>
        {heading}
      </h4>
    </div>
  )
}

export default SinglePostHeading