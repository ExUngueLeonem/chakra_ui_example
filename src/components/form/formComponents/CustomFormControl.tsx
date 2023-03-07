import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import InputError from "./ValidationErrorBubble/InputError";

interface ICustomFormControlProps {
    errors?: any;
    register: UseFormRegister<any>;
    name: string;
    type?: string;
    placeholder?: string;
    label: string;
}

const CustomFormControl = ({
    errors,
    register,
    name,
    type = "text",
    placeholder,
    label,
}: ICustomFormControlProps) => {

    const [showPass, setShowPass] = useState(false);
    const handleShowPass = () => setShowPass(!showPass);

    return (
        <FormControl isInvalid={ errors && errors[name] && true}>
            <FormLabel>{label}</FormLabel>
            <InputGroup>
                {type === "password" ?
                    <Input
                        {...register(name)}
                        placeholder={placeholder}
                        type={showPass ? "text" : "password"}
                    />
                    :
                    <Input
                        {...register(name)}
                        placeholder={placeholder}
                        type={type}
                    />
                }

                <InputRightElement width='4.5rem'>
                    {errors &&
                        errors[name] && <InputError message={errors[name].message} />
                    }

                    {type === "password" &&
                        <Button h='1.75rem' size='sm' onClick={handleShowPass}>
                            {showPass ? <ViewOffIcon /> : <ViewIcon />}
                        </Button>
                    }
                </InputRightElement>
            </InputGroup>
        </FormControl>
    );
};

export default CustomFormControl;