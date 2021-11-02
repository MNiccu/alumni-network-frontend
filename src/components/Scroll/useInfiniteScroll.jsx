import { useState, useEffect } from 'react'


//Handles infinite scroll on feed where the feed fetches more posts everytime user scrolls to the bottom of the page
const useInfiniteScroll = (callback, lastpost) => {
  
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isFetching) return
    callback(() => {
    });
  }, [isFetching])

  function handleScroll() {
    if (!lastpost){
      let isAtBottom = document.documentElement.scrollHeight - document.documentElement.scrollTop <= document.documentElement.clientHeight
      if (isAtBottom) { 
          setIsFetching(true)
        } 
    }
    console.log("in inf")
}

  return [isFetching, setIsFetching]

}

export default useInfiniteScroll