import { useState } from 'react'
import { Button, Flex, Box, Spacer, Badge }  from '@chakra-ui/react'
import {AddIcon, MinusIcon} from '@chakra-ui/icons'



const ItemCount = () => {
    const [count, setCount] = useState(0)

    const mostrar  = () => {
        alert (`vas a agregar ${count} productos al carrito`)
    }

  return (
    <Flex>
        <Box>
            <Button variant='outline' colorScheme='teal' onClick={() => setCount(count - 1)}
             m={1}
            
            >

                <MinusIcon/>
            </Button>
            <Badge ml='2x1' fontSize='1.5rem' colorScheme='green' variant='outline'>
                  <p>{count}</p>
             </Badge>
            <Button variant='outline' colorScheme='teal' onClick={() => setCount(count + 1)} m={1}>
                <AddIcon/>
            </Button>
        </Box>
        <Spacer/>
        <Box m={1}>
            <Button onClick={mostrar}>
                add to cart
            </Button>
        </Box>
    </Flex>
  )
}

export default ItemCount