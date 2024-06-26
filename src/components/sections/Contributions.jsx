import React from 'react'
import GitHubCalendar from 'react-github-calendar';


export default function Contributions() {
  const currentYear = new Date().getFullYear();

  return (
    <div id="contributions">
        <GitHubCalendar 
          username="alberto-sclocchi" 
          year={currentYear} 
          fontSize={20} 
          colorScheme="dark" 
          blockSize={17}
          // theme={{
          //   dark: ['#333', 'rgba(255, 255, 255, 0.906)']    
          // }}
          labels={{
            totalCount: `Contributions in {{year}}`
          }}
        />
    </div>
  )
}
