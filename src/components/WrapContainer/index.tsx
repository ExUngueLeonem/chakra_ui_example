import { Container } from "@chakra-ui/react";
import { GetComponents } from "common/GetComponents";
import { IApiContent } from "types";

export const WrapContainer = ({ block }: { block: IApiContent<any> }) => {
    const config = block.payload.config

    return (
        <Container {...config} >
            {block.nestedComponents.map((item: IApiContent<any>) => GetComponents(item))}
        </Container>
    );
};

export default Container;