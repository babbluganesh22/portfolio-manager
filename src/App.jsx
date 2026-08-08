import { useRef } from 'react'
import EditorChrome from './components/EditorChrome'
import TabBar from './components/TabBar'
import Gutter from './components/Gutter'
import Hero from './components/Hero'

function App() {
  const contentRef = useRef(null)

  return (
    <EditorChrome>
      <TabBar />
      <div className="pane">
        <Gutter contentRef={contentRef} />
        <div className="content" ref={contentRef}>
          <Hero />
        </div>
      </div>
    </EditorChrome>
  )
}

export default App