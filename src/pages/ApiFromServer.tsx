import { MainApi } from "http/MainApi";
import { useEffect, useState } from "react";
import { IApiData } from "types";
import { GetComponents } from 'common/GetComponents';
import { Box } from "@chakra-ui/react";

const ApiFromServer = () => {
    const [data, setData] = useState<IApiData>();
    const config = data?.config

    useEffect(() => {
        MainApi.getInstance().getApi().then(({ data }) => { setData(data) })
    }, [])

    console.log(data)

    return (
        <Box bgColor="grey" {...config}>
            {data &&
                data.content.body.map(block => GetComponents(block))
            }
        </Box>
    );
};

export default ApiFromServer;








