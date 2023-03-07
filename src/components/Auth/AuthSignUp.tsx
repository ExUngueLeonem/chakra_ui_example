import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

import { Button, Input, InputGroup, InputRightElement, Stack, Text } from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

interface IInputs {
    login: string;
    password: string;
    retryPassword: string;
}

const schema = yup.object({
    login: yup.string().email("не корректный email").required("обязательное поле"),
    password: yup.string().required("обязательное поле"),
    retryPassword: yup.string().required("обязательное поле"),
}).required();

const AuthSignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<IInputs>({
        resolver: yupResolver(schema)
    });
    const onSubmit: SubmitHandler<IInputs> = data => console.log("formData", data)

    const [showPass, setShowPass] = useState(false);

    const hangleShowPass = () => setShowPass(!showPass);

    console.log(watch("login"))

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <Stack spacing={3}>
                <Text> Введите email {errors.login && <span> -- {errors.login.message}</span>} </Text>

                <Input {...register("login")}
                    placeholder="Введите email"
                    isInvalid={errors.password && true}
                />
                <Text> Введите пароль {errors.password && <span> -- {errors.password.message}</span>}</Text>
                <InputGroup>
                    <Input {...register("password")}
                        placeholder="Введите пароль"
                        type={showPass ? "text" : "password"}
                        isInvalid={errors.password && true}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={hangleShowPass}>
                            {showPass ? <ViewOffIcon /> : <ViewIcon />}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                <Button colorScheme="green" type="submit">
                    Зарегистрироваться
                </Button>
            </Stack>
        </form>
    );
};

export default AuthSignUp;