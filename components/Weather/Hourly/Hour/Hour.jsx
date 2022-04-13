import {
  Box,
  Flex,
  Heading,
  ListItem,
  Spacer,
  Text,
  useColorModeValue,
  WrapItem,
} from '@chakra-ui/react'
import Image from 'next/image'
import { isNewDay } from '../../../../utils/dateTime'
const Hour = ({ hour, isNow = false }) => {
  const dayTagBorderColor = useColorModeValue('black', 'white')
  return (
    <>
      {(isNewDay(hour.info.time) || isNow) && (
        <ListItem>
          <Flex
            p={2}
            borderTop={'1px solid'}
            borderTopColor={dayTagBorderColor}
            borderBottom={'1px solid'}
            borderBottomColor={dayTagBorderColor}>
            <Box>
              <Flex align={'center'}>
                <Heading size={'md'}>
                  {hour.info.weekday.long} - {hour.info.date}
                </Heading>
              </Flex>
            </Box>
          </Flex>
        </ListItem>
      )}
      <ListItem>
        <Flex
          p={1}
          onClick={() => {}}
          role='button'
          borderBottom={'1px solid'}
          borderBottomColor={'blackAlpha.200'}
          align={'center'}
          justify={'space-between'}>
          <Text fontWeight={'bold'}>{isNow ? 'Now' : hour.info.time}</Text>
          <Heading size={'md'}>
            {hour.weather.temp.value}
            {hour.weather.temp.unit}
          </Heading>
          <Flex align={'center'}>
            <Image
              src={hour.info.description.iconUrl}
              alt={'weather icon'}
              width={72}
              height={72}
            />
            <Text>- {hour.info.description.title}</Text>
          </Flex>
        </Flex>
      </ListItem>
    </>
  )
}

export default Hour
