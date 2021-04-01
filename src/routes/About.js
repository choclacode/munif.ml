import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { useFetch } from '../hooks'

const About = () => {
  const [about, setAbout] = useState([])
  const [ab] = useFetch('about')

  useEffect(() => {
    const arr = []
    for (const key in ab) arr.push([key, ab[key]])
    setAbout(arr)
  }, [ab])

  return (
    <>
      <h2>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut' }}
        >
          About Me
        </motion.span>
      </h2>
      <section className='about'>
        <motion.table
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', delay: 0.2 }}
        >
          {about.map(([key, value], i) => (
            <motion.tr
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeInOut', delay: 0.2 + 0.1 * i }}
            >
              <td className='key'>{key}</td>
              <td className='value'>{value}</td>
            </motion.tr>
          ))}
        </motion.table>
      </section>
    </>
  )
}

export default About
