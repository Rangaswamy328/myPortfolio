import React from 'react'
import { CheckMark } from './icons'
import { AnimatePresence, motion } from 'framer-motion'

const EmailSuccessPopup = ({sender, isVisible}) => {

  return (
    <AnimatePresence>
        {isVisible && <motion.div 
            initial={{ opacity: 0, y: 35}}
            animate={{ opacity: 1, y: 0}}
            transition={{duration: .8 }}
            exit={{ opacity: 0, y:35}}
            className='w-full h-[35px] font-medium text-green-600 fixed bg-green-100 bottom-0 left-0 transform -translate-x-100 -translate-y-100 flex items-center justify-center p-5'>
            <CheckMark className={''}/>
            <p className='pl-1 sm:text-xs'>
              Hello 
              <span className='font-bold pl-1'>{sender}</span>
              , your mail successfully received will get back to you soon.
              </p>
        </motion.div>}
    </AnimatePresence>
  )
}

export default EmailSuccessPopup