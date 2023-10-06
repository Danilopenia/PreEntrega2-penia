import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'


const Navbar = () => {
  return (
    <>


    <Flex>
  <Box>
  <h1>POLDBRAN</h1>
  </Box>
  <Spacer/>
  <Box>
  <Menu>
  <MenuButton>
    Categorias
  </MenuButton>
  <MenuList>
    <MenuItem>CategoriaA</MenuItem>
    <MenuItem>Categoria B</MenuItem>
    <MenuItem>Categoria C</MenuItem>
  </MenuList>
</Menu>
  </Box>

  <Spacer />
  <Box p='4' bg='green.400'>
  <CartWidget></CartWidget>
  </Box>
</Flex>
    
    </>
  )
}

export default Navbar