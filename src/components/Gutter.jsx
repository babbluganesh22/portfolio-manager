import { useEffect, useRef, useState } from 'react'
import './Gutter.css'

function Gutter({ contentRef }) {
  const [lineCount, setLineCount] = useState(0)
  const LINE_HEIGHT = 22 // approx px per line, matches body line-height

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const updateLineCount = () => {
      setLineCount(Math.ceil(el.offsetHeight / LINE_HEIGHT))
    }

    updateLineCount()

    const resizeObserver = new ResizeObserver(updateLineCount)
    resizeObserver.observe(el)

    return () => resizeObserver.disconnect()
  }, [contentRef])

  return (
    <div className="gutter">
      {Array.from({ length: lineCount }, (_, i) => (
        <div key={i}>{i + 1}</div>
      ))}
    </div>
  )
}

export default Gutter