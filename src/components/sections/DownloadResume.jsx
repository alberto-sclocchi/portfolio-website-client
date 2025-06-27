import React from 'react'

export default function DownloadResume() {

const handleClick = () => {
    // const pdfUrl = "http://localhost:3000/alberto-sclocchi-resume.pdf"
    const pdfUrl = "https://alberto-sclocchi-portfolio.netlify.app/alberto-sclocchi-resume.pdf"
    const fileName = pdfUrl.split('/').pop();
    const link = document.createElement("a");
    link.setAttribute('href', pdfUrl);
    link.setAttribute('download', fileName); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <button onClick={handleClick} className='button-link'>Resume</button>
  )
}
