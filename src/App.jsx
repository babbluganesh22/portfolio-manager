import { useRef } from 'react'
import EditorChrome from './components/EditorChrome'
import TabBar from './components/TabBar'
import Gutter from './components/Gutter'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const contentRef = useRef(null)

  return (
    <>
      <EditorChrome>
        <TabBar />
        <div className="pane">
          <Gutter contentRef={contentRef} />
          <div className="content" ref={contentRef}>
            <Hero />
            <div style={{ height: '64px' }} />
            <Skills />
            <div style={{ height: '64px' }} />
            <Projects />
            <div style={{ height: '64px' }} />
            <Contact />
          </div>
        </div>
      </EditorChrome>
      <footer className="site-footer">built with too much coffee — © 2026 ganesh bompelly</footer>
    </>
  )
}

export default App