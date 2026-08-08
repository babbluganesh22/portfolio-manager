// src/components/Gutter.jsx
import { useEffect, useRef, useState } from 'react'
import './Gutter.css'

function Gutter({ contentRef }) {
  const [lineCount, setLineCount] = useState(0)
  const gutterRef = useRef(null)

  useEffect(() => {
    const contentEl = contentRef.current
    const gutterEl = gutterRef.current
    if (!contentEl || !gutterEl) return

    const updateLineCount = () => {
      const lineHeight = parseFloat(getComputedStyle(gutterEl).lineHeight)
      setLineCount(Math.ceil(contentEl.offsetHeight / lineHeight))
    }

    updateLineCount()

    const resizeObserver = new ResizeObserver(updateLineCount)
    resizeObserver.observe(contentEl)

    return () => resizeObserver.disconnect()
  }, [contentRef])

  return (
    <div className="gutter" ref={gutterRef}>
      {Array.from({ length: lineCount }, (_, i) => (
        <div key={i}>{i + 1}</div>
      ))}
    </div>
  )
}

export default Gutter