import React, { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

function App() {
  const [items, setItems] = useState(
    Array.from({ length: 5 }, (_, idx) => idx + 1)
  )
  const [hasMore, setHasMore] = useState(true)

  const loadMoreItems = () => {
    if (!hasMore) return
    const newItems = items.length + 5
    if (newItems >= 37) {
      setItems(
        items.concat(
          Array.from(
            { length: 37 - items.length },
            (_, idx) => idx + items.length + 1
          )
        )
      )
      setHasMore(false)
    } else {
      setItems(
        items.concat(
          Array.from({ length: 5 }, (_, idx) => idx + items.length + 1)
        )
      )
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        loadMoreItems()
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [items, hasMore])

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {items.map((image, index) => {
        const formattedIndex = image < 10 ? `0${image}` : image
        return (
          <Image key={index} index={index} formattedIndex={formattedIndex} />
        )
      })}
    </div>
  )
}

const Image = ({ index, formattedIndex }) => {
  const ref = useRef()
  const inView = useInView(ref, {
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.img
      ref={ref}
      src={`/images/_NOIVAS_2024_VIERT_page-00${formattedIndex}.jpg`}
      alt={`Imagem ${index + 1}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      style={{
        width: "100vw",
        flexShrink: 0,
        aspectRatio: "0.75",
      }}
    />
  )
}

export default App
