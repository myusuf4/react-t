import React from "react";
import { Container,Links } from "./style";


const Navbar=()=>{
  return(
    <Container>
      
      <Links activeStyle={{color:"red"}} exact to={"/"}>Logo</Links>
      <Links activeStyle={{color:"red"}}  to={'/home'}>Home</Links>
      <Links activeStyle={{color:"red"}}  to={'/templates'}>Templates</Links>
      <Links activeStyle={{color:"red"}}  to={'pages'}>Pages</Links>
      <Links activeStyle={{color:"red"}}  to={'elements'}>Elements</Links>
    </Container>
  )
}
export default Navbar