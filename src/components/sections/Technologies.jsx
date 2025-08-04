
import TechInfoBox from './TechInfoBox'
import { technologiesData } from './data/TechnologiesData'

export default function Technologies({ isDarkMode}) {

  const displayTech = () => {
    return technologiesData.map((tech, i) => {
      // console.log(tech)
      return <TechInfoBox {...tech} key={i}/>
    })
  }

  return (
    <div id="skills" className={`${isDarkMode ? "dark-mode-section-1" : "light-mode-section-1"}`}>
      <ul className="scroller-list" data-animated="true">
        {displayTech()}
      </ul>
      <ul className="scroller-list" data-animated="true">
        {displayTech()}
      </ul>
    </div>
  )
}
