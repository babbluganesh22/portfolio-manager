import './EditorChrome.css'

function EditorChrome({ children }) {
  return (
    <div className="editor">
      <div className="titlebar">
        <div className="dots">
          <div className="dot red"></div>
          <div className="dot gold"></div>
          <div className="dot green"></div>
        </div>
        <div className="titlebar-label">Ganesh Bompelly — portfolio — ~/site</div>
      </div>

      {children}
    </div>
  )
}

export default EditorChrome