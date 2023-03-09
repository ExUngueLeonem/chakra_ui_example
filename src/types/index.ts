export interface IPopupData {
    formType: "" | "product";
    payload: any;
}

export interface IApiData {
    name: string,
    // id: number | null,
    // uuid: string | null,
    content: {
        _uid: string | null,
        body: IApiContent<any>[];
        component: string;
    },

    // created_at: string | null,
    // published_at: string | null,
    // alternates: [],
    // slug: string,
    // full_slug: string,
    // default_full_slug: string | null,
    // sort_by_date: string | null,
    // position: number | null,
    // tag_list: [],
    // is_startpage: boolean | null,
    // parent_id: number | null,
    // meta_data: string | null,
    // group_id: string | null,
    // first_published_at: string | null,
    // release_id: string | null,
    // lang: string | null,
    // path: string | null,
    // translated_slugs: []
}

export interface IApiContent<T> {
    _uid: string,
    component:
    "foo" |
    "bar" |
    "header",
    payload: T;
    nestedComponents: IApiContent<any>[]
}

export interface IComponents {
    foo: ({ block }: { block: IApiContent<any>; }) => JSX.Element;
    bar: ({ block }: { block: IApiContent<any>; }) => JSX.Element;
    header: () => JSX.Element;
}

export interface IComponents {
    foo: ({ block }: { block: IApiContent<any>; }) => JSX.Element;
    bar: ({ block }: { block: IApiContent<any>; }) => JSX.Element;
    header: () => JSX.Element;
}

export interface ICard {
    _uid: string;
    name: string;
    price: number;
    imageSrc: string;
}

