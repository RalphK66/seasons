import { Text, Wrap, WrapItem } from "@chakra-ui/react"


const Hourly = ({data}) => {
  return <Wrap >
    {data.map((hr, idx, arr) => 
    <WrapItem key={idx}>
      <Text>{hr.info.time}</Text>
    </WrapItem>
    )}

  </Wrap>
}

export default Hourly

