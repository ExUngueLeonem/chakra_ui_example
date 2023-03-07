import { MainApi } from "http/MainApi";
import { useEffect, useState } from "react";
import { IApiData } from "types";

const ApiFromServer = () => {
    const [data, setData] = useState<IApiData>();
    useEffect(() => {
        MainApi.getInstance().getApi().then(({ data }) => { setData(data) })
    }, [])

    console.log(data)

    return (
        <div>
            {/* {data &&
                JSON.stringify(data)
            } */}
            ApiFromServer
        </div>
    );
};

export default ApiFromServer;