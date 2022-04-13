import {
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
import { RiCelsiusFill, RiFahrenheitFill } from 'react-icons/ri'
import Image from 'next/image'
import { useContext } from 'react'
import { UnitContext } from '../../../context/UnitContext'
import { UNIT } from '../../../constants/weather'

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
        <ModalHeader p={0} mt={4} pr={4}>
          <Flex align={'center'}>
            <Image
              src={day.info.description.iconUrl}
              alt={'weather icon'}
              width={128}
              height={128}
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
          </Flex>
        </ModalHeader>
        <ModalCloseButton size={'lg'} color={'red.500'} />
        <ModalBody>
          <TableContainer mb={4}>
            <Table variant='simple' size={'md'}>
              <Tbody>
                {Object.values(day.weather).map((el, idx) => {
                  return (
                    <Tr key={idx}>
                      <Td>
                        <Flex gap={5} align={'center'}>
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
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default WeatherModal
