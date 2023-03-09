import { Card, CardBody, Image } from '@chakra-ui/react';
import { ICard } from 'types';

const CardItem = ({ item }: { item: ICard }) => {
    return (
        <Card>
            <CardBody>
                <Image
                    src={item.imageSrc}
                /> 
            </CardBody>
        </Card>
    );
};

export default CardItem;