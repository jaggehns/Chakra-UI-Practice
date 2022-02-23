import {
  Button,
  Container,
  Heading,
  Input,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import "./App.css";

function App() {
  const { toggleColorMode } = useColorMode();
  return (
    <Container maxW="md" height="100vh">
      <Button
        onClick={toggleColorMode}
        pos="absolute"
        inset="0 0 auto auto"
        m="2"
      >
        ?
      </Button>
      <VStack justify="center" height="100%" spacing="4">
        <Heading textAlign="center">Log In</Heading>
        <Input placeholder="Enter username" />
        <Input placeholder="Enter password" type="password" />
        <Button colorScheme="blue" variant="outline" width="100%">
          Submit
        </Button>
      </VStack>
    </Container>
  );
}

export default App;
