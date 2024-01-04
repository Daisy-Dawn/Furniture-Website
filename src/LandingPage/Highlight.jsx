import React from 'react'
import HighlightComp from '../components/HighlightComp'
import { chair7, homeDesk } from '../assets'

const Highlight = () => {
  return (
    <div className='flex px-[5rem] items-center py-[5rem] gap-5'>
    <HighlightComp image={chair7} heading="Comfortable Chair " paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since." button="Shop Now" />
    <HighlightComp image={homeDesk} heading="Modern Flower Vase" paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since." button="Shop Now" />

    </div>
  )
}

export default Highlight