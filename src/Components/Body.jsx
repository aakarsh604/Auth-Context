import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Text,
  Radio,
  RadioGroup,
  HStack,
  Box,
  Button,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Body = () => {
  const { login } = useContext(AuthContext);
  const [form, setform] = useState({});

  const onChange = (e) => {
    let { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      login(form.email, form.password);
  }
  
 return  (
    <div>
      <Box mt="40px">
        <Text fontSize="2xl" as="b">
          LOGIN DETAILS
        </Text>
        <FormControl w="40%" m="auto">
          <FormLabel htmlFor="email" mt="40px">
            Email address
          </FormLabel>
          <Input name="email" type="email" onChange={onChange} />
          <FormHelperText>We'll never share your email.</FormHelperText>
          <FormLabel htmlFor="email">Password</FormLabel>
          <Input name="password" type="password" onChange={onChange} />
          <RadioGroup defaultValue="Itachi">
            <FormLabel htmlFor="gender" mt="20px">
              Gender
            </FormLabel>
            <HStack spacing="24px">
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
            </HStack>
          </RadioGroup>
          <Button
            mt={4}
            colorScheme="teal"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </FormControl>
      </Box>
    </div>
  );
};

export default Body;
