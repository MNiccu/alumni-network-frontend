import { useState, useEffect } from 'react'

const useInfiniteScroll = (callback, lastpost) => {
  
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isFetching) return
    callback(() => {
      console.log('called back')
    });
  }, [isFetching])

  function handleScroll() {
    if (!lastpost){
      let isAtBottom = document.documentElement.scrollHeight - document.documentElement.scrollTop <= document.documentElement.clientHeight
      if (isAtBottom) { 
          console.log("Bottom")
          setIsFetching(true)
        } 
    }
    console.log("in inf")
}

  return [isFetching, setIsFetching]

}

export default useInfiniteScroll