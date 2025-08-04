export default function DarkMode({ isDarkMode, setIsDarkMode }) {
  const handleClick= () => {
      setIsDarkMode(!isDarkMode);
  } 


  return (
    <div className={`dark-mode-toggle ${!isDarkMode && "toggled-div"}`}>
        <button onClick={handleClick} className={`toggle-button ${!isDarkMode && "toggled"}`}>{!!isDarkMode ? "Light" : "Dark"}</button>
    </div>
  )
}
