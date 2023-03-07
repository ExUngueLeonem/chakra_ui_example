import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

import { Button,  Stack } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import CustomFormControl from "components/form/formComponents/CustomFormControl";

interface IInputs {
    login: string;
    password: string;
}

const schema = yup.object({
    login: yup.string().email("не корректный email").required("обязательное поле"),
    password: yup.string().required("обязательное поле"),
}).required();

const AuthSignIn = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<IInputs>({
        resolver: yupResolver(schema)
    });
    const onSubmit: SubmitHandler<IInputs> = data => {
        console.log("formData", data);
        navigate("/home");
    }

    const navigate = useNavigate();

    console.log(watch("login"))

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <Stack spacing={3}>
                <CustomFormControl
                    errors={errors}
                    register={register}
                    name="login"
                    placeholder="Введите email"
                    label="Введите email"
                />

                <CustomFormControl
                    errors={errors}
                    register={register}
                    name="password"
                    placeholder="Введите пароль"
                    label="Введите пароль"
                    type="password"
                />

                <Button colorScheme="green" type="submit">
                    Войти
                </Button>
            </Stack>
        </form>
    );
};

export default AuthSignIn;