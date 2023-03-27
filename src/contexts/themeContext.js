import { createContext, useState } from "react";
import imgLight from '../imagens/FundoClaro.png'
import imgDark from '../imagens/FundoEscuro.png'
import { faSun , faMoon } from '@fortawesome/free-solid-svg-icons'


export const themes = {
    light:{
        primaryColor:"#000",
        secundaryColor:"#5569dc",
        themeIcon: faSun,
        primaryBackgroundColor: "#5569dc",
        secundaryBackgroundColor: "#e1e3fb",
        tercearyBackgroundColor: "#fff",
        headerImg: imgLight

    },
    dark:{
        primaryColor:"#fff",
        secundaryColor:"#7d8aec",
        themeIcon: faMoon,
        primaryBackgroundColor: "#020d3f",
        secundaryBackgroundColor: "#0a2d6c",
        tercearyBackgroundColor: "#1b1e23",
        headerImg: imgDark
    }
}

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {

    const [theme,setTheme] = useState(themes.light)

    return(
        <ThemeContext.Provider value ={{theme,setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
