
import TechInfoBox from './TechInfoBox'
import { technologiesData } from './data/TechnologiesData'

export default function Technologies() {

  const displayTech = () => {
    return technologiesData.map((tech, i) => {
      // console.log(tech)
      return <TechInfoBox {...tech} key={i}/>
    })
  }

  return (
    <div id="skills">
      <ul className="scroller-list" data-animated="true">
        {displayTech()}
      </ul>
      <ul className="scroller-list" data-animated="true">
        {displayTech()}
      </ul>
    </div>
  )
}
