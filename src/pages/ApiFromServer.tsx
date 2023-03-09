import React from 'react';
import { MainApi } from "http/MainApi";
import { useEffect, useState } from "react";
import { IApiContent, IApiData } from "types";
import Header from 'components/Header';

interface IFooPayloadProps {
    title: string
}

const Foo = ({ block }: { block: IApiContent<IFooPayloadProps> }) => {
    return (
        <div>
            {block.payload.title}
            {block.component}
        </div>
    );
};

interface IBarPayloadProps {
    name: string
}

const Bar = ({ block }: { block: IApiContent<IBarPayloadProps> }) => {
    return (
        <div>
            {block.payload.name}
            {block.component}
        </div>
    );
};

const Components: any = {
    foo: Foo,
    bar: Bar,
    header: Header,
}

const ApiFromServer = () => {
    const [data, setData] = useState<IApiData>();
    useEffect(() => {
        MainApi.getInstance().getApi().then(({ data }) => { setData(data) })
    }, [])

    console.log(data)

    return (
        <div>
            {data &&
                data.content.body.map(block => GetComponents(block))
            }
        </div>
    );
};

export default ApiFromServer;


const GetComponents = (block: IApiContent<any>) => {
    console.log("block", block)
    if (typeof Components[block.component] !== "undefined") {
        return React.createElement(Components[block.component], {
            key: block._uid,
            block: block
        });
    }
    return React.createElement(
        () => <div>The component {block.component} has not been created yet.</div>,
        { key: block._uid }
    );
};





