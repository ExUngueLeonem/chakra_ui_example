import { Grid } from '@chakra-ui/react';
import { MainApi } from 'http/MainApi';
import React, { useEffect, useState } from 'react';
import { IApiContent, ICard } from 'types';
import CardItem from './CardItem';

const CardList = ({ block }: { block: IApiContent<any> }) => {
    const [cards, setCards] = useState<ICard[]>([]);
    const config = block.payload?.config

    useEffect(() => {
        MainApi.getInstance().getCards().then(({ data }) => setCards(data));
    }, [])

    console.log("CardList config", config)

    return (
        <Grid
            gridTemplateColumns={"repeat(auto-fill, minmax(300px, 1fr))"}
            gridGap={40}
            {...config}
        >
            
            {cards.map(item => <CardItem key={item._uid} item={item} />)}
        </Grid>
    );
};

export default CardList;