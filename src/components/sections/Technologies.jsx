
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
    <div className="section" id="skills">
      <h2 className="section-title">Tech Skills</h2>
      
      <div className="cards">{displayTech()}</div>
    </div>
  )
}
