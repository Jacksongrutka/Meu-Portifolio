import styled from "styled-components"
import { breakpoint } from "../breakpoints"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const ThemeButton = (props) => {

    

    return(
        <A href="#" {...props}><FontAwesomeIcon icon={props.theme.themeIcon} className="icon" /></A>
    )
}

const A = styled.a`
    width: 100px;
    height: 50px;
    .icon{
        width: 3rem;
        height: 3rem;
        color: #fff;
    }
`