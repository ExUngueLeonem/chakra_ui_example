import React from 'react';
import { IPopupData } from 'types/index';

const ShowForm = ({ popupData }: { popupData: IPopupData }) => {
    const { formType, payload } = popupData;


    switch (formType) {
        case "product": return <></>;

        default: return <>Некорректный formType</>;
    }
};

export default ShowForm;