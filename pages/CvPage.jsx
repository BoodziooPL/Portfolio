import React from 'react'
import CV from './CV'
import { motion } from 'framer-motion'

export default function CvPage() {
  return (
    <motion.section
      initial={{
        x: -300,
        opacity: 0,
        scale: 0.3,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 0.6 }}>
      <CV />
    </motion.section>
  )
}
