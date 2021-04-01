import { useEffect, useState } from 'react'

const useFetch = (resource) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const abort = new AbortController()

    ;(async () => {
      try {
        const res = await fetch('/data.json', { signal: abort.signal })
        const data = await res.json()

        setData(data[resource])
      } catch {
        setData(null)
      }
    })()

    return () => abort.abort()
  }, [data])

  return [data]
}

export default useFetch
