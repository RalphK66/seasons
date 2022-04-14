import {
  Box,
  Flex,
  Heading,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useContext } from 'react'
import { RiCelsiusFill, RiFahrenheitFill } from 'react-icons/ri'
import { UNIT } from '../../../constants/weather'
import { UnitContext } from '../../../context/UnitContext'

const WeatherModal = ({ day, isOpen, onClose, isToday = false, isTomorrow = false }) => {
  const { unit, toggleUnit } = useContext(UnitContext)
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={'xl'}
      closeOnOverlayClick={false}
      scrollBehavior={'inside'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex align={'center'}>
            <Image
              src={day.info.description.iconUrl}
              alt={'weather icon'}
              layout={'intrinsic'}
              width={96}
              height={96}
            />
            <Flex flexDir={'column'}>
              <Heading size={'lg'}>
                {isToday ? 'Today' : isTomorrow ? 'Tomorrow' : day.info.weekday.long}
              </Heading>
              <Heading size={'sm'} m={1}>
                {day.info.date}
              </Heading>
            </Flex>
            <Spacer />
            <Flex>
              <IconButton
                onClick={toggleUnit}
                icon={unit === UNIT.metric ? <RiFahrenheitFill /> : <RiCelsiusFill />}
              />
            </Flex>
            <Spacer />
          </Flex>
        </ModalHeader>
        <ModalCloseButton size={'lg'} color={'red.500'} />
        <ModalBody p={[1, 2, 3, 4]}>
          <TableContainer mb={4}>
            <Table variant='simple' size={['sm', 'sm', 'md']}>
              <Tbody>
                {Object.values(day.weather).map((el, idx) => {
                  return (
                    <Tr key={idx}>
                      <Td>
                        <Flex gap={5} align={'center'}>
                          {el.icon}
                          <Text fontSize={['sm', 'md']}>{el.name}</Text>
                        </Flex>
                      </Td>
                      <Td>
                        <Flex gap={1} align={'center'}>
                          <Spacer />
                          <Text fontSize={['sm', 'md']}>{el.value}</Text>
                          <Text fontSize={['sm', 'md']}>{el.hasOwnProperty('unit') ? el.unit : ''}</Text>
                        </Flex>
                      </Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default WeatherModal
