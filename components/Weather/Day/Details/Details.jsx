import {
  Box,
  Flex,
  IconButton,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react'
import { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
const Details = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false)

  const toggleDetails = () => setShowDetails((prev) => !prev)
  return (
    <Box>
      <Flex justify={'end'}>
        <IconButton
          isRound
          size={'md'}
          onClick={toggleDetails}
          icon={showDetails ? <FaArrowUp /> : <FaArrowDown />}
        />
      </Flex>
      {showDetails && (
        <TableContainer>
          <Table variant='simple' size={'sm'}>
            <Tbody>
              {Object.values(data).map((el, idx) => {
                return (
                  <Tr key={idx}>
                    <Td>
                      <Flex gap={3} align={'center'}>
                        {el.icon}
                        {el.name}
                      </Flex>
                    </Td>
                    <Td>
                      <Flex gap={1} align={'center'}>
                        <Spacer />
                        <Text>{el.value}</Text>
                        <Text>{el.hasOwnProperty('unit') ? el.unit : ''}</Text>
                      </Flex>
                    </Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Box>
  )
}

export default Details
