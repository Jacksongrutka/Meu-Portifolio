import styled from "styled-components"

export const ThemeButton = (props) => {

    const A = styled.a`
    background-color: ${props.theme.color};
    width: 100px;
    height: 50px;
    `

    return(
        <A href="#" {...props} />
    )
}
