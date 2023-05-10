import React from "react";
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  Title,
  Text,
  Flex,
} from "@mantine/core";
import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const formSchema = yup.object({
  username: yup.string().required(),
  phone: yup
    .string()
    .required()
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      "Phone no. not valid"
    ),
  email: yup.string().required().email("Email not valid"),
  password: yup.string().min(6),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "password must match"),
});

const MyForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  console.log(errors);

  const formSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      p={10}
      miw="90vw"
      style={{ borderRadius: "8px", backgroundColor: "#ffffff" }}
    >
      <Title>Signup</Title>
      <Text size="sm" color="dimmed">
        Your data privacy is our main priority
      </Text>
      <form onSubmit={handleSubmit(formSubmit)}>
        <Box>
          <Input
            id="userName"
            placeholder="Enter Name"
            label="Username"
            type="text"
            register={{ ...register("username") }}
            errorMessage={errors.username?.message}
          />
        </Box>
        <Box>
          <Input
            id="email"
            placeholder="Enter Email"
            label="Email"
            type="string"
            register={{ ...register("email") }}
            errorMessage={errors.email?.message}
          />
        </Box>
        <Box>
          <Input
            id="phoneNumber"
            placeholder="Enter Phone No."
            label="PhoneNo."
            type="text"
            register={{ ...register("phone") }}
            errorMessage={errors.phone?.message}
          />
        </Box>
        <Box>
          <Input
            id="password"
            placeholder="Enter Password"
            label="Password"
            type="password"
            register={{ ...register("password") }}
            errorMessage={errors.password?.message}
          />
        </Box>
        <Box>
          <Input
            id="confirmPassword"
            placeholder="Enter Password"
            label="Confirm Password"
            type="password"
            register={{ ...register("confirmPassword") }}
            errorMessage={errors.confirmPassword?.message}
          />
        </Box>
        <Flex justify="flex-end">
          <Button type="submit">Register</Button>
        </Flex>
      </form>
    </Box>
  );
};

export default MyForm;
