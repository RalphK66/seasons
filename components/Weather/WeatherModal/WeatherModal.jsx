import {
  Flex,
  Heading,
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

const WeatherModal = ({ day, isOpen, onClose, isToday = false, isTomorrow = false }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={'xl'}
      blockScrollOnMount={false}
      closeOnOverlayClick={false}
      scrollBehavior={'inside'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
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
          </Flex>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TableContainer>
            <Table variant='simple' size={['sm', 'md']}>
              <Tbody>
                {Object.values(day.weather).map((el, idx) => {
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
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default WeatherModal
