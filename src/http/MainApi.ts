import { IApiData, ICard } from "types";
import { apiConfig } from "./config";
import { HttpClient } from "./HttpClient";

export class MainApi extends HttpClient {
    private static classInstance?: MainApi;

    public constructor() {
        super(apiConfig.baseUrl);
    }

    public static getInstance() {
        if (!this.classInstance) {
            this.classInstance = new MainApi();
        }

        return this.classInstance;
    }

    public getApi = () => this.instance.get<IApiData>('/story')
    public getCards = () => this.instance.get<ICard[]>('/cards')
}