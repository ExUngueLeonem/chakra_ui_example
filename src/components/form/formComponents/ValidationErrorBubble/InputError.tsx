import { WarningIcon } from '@chakra-ui/icons';
import { Text } from '@chakra-ui/react';
import React from 'react';
import { palette } from 'styles/consts';

import styles from './InputError.module.scss';

const InputError = ({ message }: { message?: string }) => {
    
    return (
        <div className={styles.wrapper}>
            <WarningIcon color={palette.error} />
            <div className={styles.bubble}>
                <Text
                    borderRadius={5}
                    color={palette.errorText}
                    backgroundColor={palette.error}
                    p={0.5} pr={2} pl={2}
                >
                    {message}
                </Text>
            </div>
        </div>
    );
};

export default InputError;