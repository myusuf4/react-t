import  styled  from "styled-components";
import {NavLink} from "react-router-dom"

export const Container=styled.div`
  display: flex;
  align-items:center;
  justify-content:space-evenly;
  background: black

`;

export const Links=styled(NavLink)`
  font-size:24px;
  color:white;
  font-weight:600;
  text-decoration:none
`

