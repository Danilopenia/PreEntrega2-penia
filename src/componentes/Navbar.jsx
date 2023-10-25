import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>


    <Flex>
  <Box>


  <Link to={"/"}>
   <h1>POLDBRAN</h1>
  </Link>


  </Box>
  <Spacer/>
  <Box>
  <Menu>
  <MenuButton>
    Categorias
  </MenuButton>
  <MenuList>
    <Link to={"/CategoriaA"}><MenuItem>CategoriaA</MenuItem></Link>
    <Link to={"/CategoriaB"}><MenuItem>CategoriaB</MenuItem></Link>
    <Link to={"/CategoriaC"}><MenuItem>CategoriaC</MenuItem></Link>
  </MenuList>
</Menu>
  </Box>

  <Spacer />
  <Box p='4' bg='green.400'>
    <Link to={"/Cart"}>
  <CartWidget></CartWidget>
  </Link>
  </Box>
</Flex>
    
    </>
  )
}

export default Navbar