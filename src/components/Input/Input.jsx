import React from "react";
import { TextInput, Button, Box, Text, Flex } from "@mantine/core";

const Input = ({ id, placeholder, label, type, register, errorMessage }) => {
  return (
    <Flex direction="column" m="1rem 0rem" gap={3}>
      <Text>{label}</Text>
      <TextInput
        type={type}
        id={id}
        placeholder={placeholder}
        {...register}
      ></TextInput>
      <Text size="sm" color="red">
        {errorMessage}
      </Text>
    </Flex>
  );
};

export default Input;
