import { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import marked from 'marked'

import { useFetch } from '../../hooks'

const Details = () => {
  const [article, setArticle] = useState({
    title: '',
    body: [],
    slug: '',
    author: '',
  })
  const [__html, set__html] = useState('<p></p>')
  const [articles] = useFetch('articles')
  const { slug } = useParams()
  const router = useHistory()

  useEffect(() => {
    const targetArticle = articles?.find((a) => a.slug == slug) ?? article
    if (!targetArticle) return router.push('/articles')

    setArticle(targetArticle)
    const html = marked(targetArticle.body.join('\n\n'))
    set__html(html)
  }, [articles])

  return (
    <div className='article'>
      <motion.h2
        className='title'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.2, delay: 0.2 }}
      >
        {article.title}
      </motion.h2>
      <motion.article
        dangerouslySetInnerHTML={{ __html }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.2, delay: 0.4 }}
      ></motion.article>
      <motion.p
        className='author'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.2, delay: 0.6 }}
      >
        Author: {''}
        <span className='design'>{article.author}</span>
      </motion.p>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.2, delay: 0.8 }}
      >
        <Link to='/articles' className='btn'>
          Back
        </Link>
      </motion.span>
    </div>
  )
}

export default Details
