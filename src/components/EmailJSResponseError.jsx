import React from 'react'
import { Warning } from './icons'
import { AnimatePresence, motion } from 'framer-motion'

const EmailJSResponseError = ({errorMsg,isVisible}) => {
  return (
    <AnimatePresence>
        {isVisible && <motion.div 
            initial={{ opacity: 0, y: 35}}
            animate={{ opacity: 1, y: 0}}
            transition={{duration: .8 }}
            exit={{ opacity: 0, y:35}}
            className='w-full h-[35px] font-medium text-red-600 fixed bg-red-100 bottom-0 left-0 transform -translate-x-100 -translate-y-100 flex items-center justify-center p-5'>
            <Warning className={''}/>
            <p className='pl-1 sm:text-xs'>
                {errorMsg === ''? 'Something went wrong, Please try again later!': errorMsg}
            </p>
        </motion.div>}
    </AnimatePresence>
  )
}

export default EmailJSResponseError