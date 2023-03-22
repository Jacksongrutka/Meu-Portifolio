import { themes , ThemeContext } from "../../contexts/themeContext";
import { useContext } from "react";
import { ThemeButton } from "../themeButton";

export const ThemeButtonContext = () => {

    const {theme,setTheme} = useContext(ThemeContext)



    return(
        <ThemeButton onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)} theme={theme}/>
    )
}