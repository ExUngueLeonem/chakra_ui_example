import CardList from "components/CardList";
import Header from "components/Header";
import { WrapContainer } from "components/WrapContainer";
import React from "react";
import { IApiContent } from "types";

const Components: any = {
    header: Header,
    cardList: CardList,
    wrapContainer: WrapContainer,
}

export const GetComponents = (block: IApiContent<any>) => {
    console.log("block", block)
    if (typeof Components[block.component] !== "undefined") {
        return React.createElement(Components[block.component], {
            key: block._uid,
            block: block
        });
    }
    return React.createElement(
        () => <div>The component <span style={{ color: "red" }}> {block.component}</span> has not been created yet.</div>,
        { key: block._uid }
    );
};