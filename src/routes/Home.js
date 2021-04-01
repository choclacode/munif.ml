import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className='home'>
      <div className='me'>
        <motion.span
          className='design'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut' }}
        >
          Muhammad Munif
        </motion.span>
      </div>
      <div className='text'>
        I'm Muhammad Munif, a 9th grader from Bangladesh.
      </div>
    </div>
  )
}

export default Home
