export interface IPopupData {
    formType: "" | "product";
    payload: any;
}

export interface IApiData {
    name: string,
    created_at: string | null,
    published_at: string | null,
    alternates: [],
    id: number | null,
    uuid: string | null,
    content: {
        _uid: string | null,
        body: IApiContent[];
        component: string;
    },
    slug: string,
    full_slug: string,
    default_full_slug: string | null,
    sort_by_date: string | null,
    position: number | null,
    tag_list: [],
    is_startpage: boolean | null,
    parent_id: number | null,
    meta_data: string | null,
    group_id: string | null,
    first_published_at: string | null,
    release_id: string | null,
    lang: string | null,
    path: string | null,
    translated_slugs: []
}

export interface IApiContent {
    _uid: string | null,
    headline: string | null,
    component: string | null,
}

