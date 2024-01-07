import { comment } from '../assets';

const TestimonialCard = ({name, title, opinion, job, pic}) => {
  return (
    <div className='rounded-[0.625rem] w-full max-w-[47.8125rem] p-[3.125rem] bg-lynx justify-self-center'>
        <div>
            <img src={comment} alt="comment icon" />
        </div>
        <h2 className='text-[1.5625rem] font-extrabold text-lead w-full max-w-[31.875rem] my-6'>{title}</h2>
        <p className='text-lg font-normal w-full max-w-[37.625rem]'>{opinion}</p>
        <div className='mt-6 flex items-center gap-3'>
            <div className='rounded-[50%] w-[3.125rem] h-[3.125rem] overflow-hidden'>
                <img src={pic}  alt="user profile image" />
            </div>
            <div>
                <p className='text-lg font-semibold text-lead'>{name}</p>
                <p className='text-base font-normal text-bGrey'>{job}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard