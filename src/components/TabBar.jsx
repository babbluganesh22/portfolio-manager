import { useEffect, useState } from 'react'
import { navItems } from '../data/navigation'
import './TabBar.css'

function TabBar() {
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )

    navItems.forEach((item) => {
      const section = document.getElementById(item.id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
  <div className="tabbar">
    {navItems.map((item) => (
      <a
        key={item.id}
        href={`#${item.id}`}
        className={`tab ${activeId === item.id ? 'active' : ''}`}
      >
        <span className="dotc" style={{ background: item.color }}></span>
        {item.label}
      </a>
    ))}
  </div>
)
}

export default TabBar