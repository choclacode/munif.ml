import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import marked from 'marked'

import { useFetch } from '../../hooks'

const Articles = () => {
  const [search, setSearch] = useState('')
  const [articles] = useFetch('articles')

  return (
    <section className='articles'>
      <h1>Articles</h1>
      <input
        type='text'
        placeholder='Enter Search Term'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {articles &&
          articles
            .filter(({ title }) =>
              title.toLowerCase().includes(search.toLowerCase().trim())
            )
            .map(({ title, body, slug, author }, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut',
                  delay: 0.1 * i,
                }}
              >
                <Link to={`/articles/${slug}`} className='article-link'>
                  <h3>{title}</h3>
                  <span>{author}</span>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: marked(`${body[0].substring(0, 75)}...`),
                    }}
                  ></p>
                </Link>
              </motion.li>
            ))}
      </ul>
    </section>
  )
}

export default Articles
