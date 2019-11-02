import { Constraints } from "../enums/index";

export class TracksModel {
    id: number | string;
    name: string;
    artistName: string;
    popularity: number;
    total?: number;
    imageUrl: string;

    constructor(data?: TracksModel) {
        this.id = data.id || '';
        this.name = data.name || '';
        this.popularity = data.popularity || 0;
        this.total = data.total || 0;
        this.imageUrl = data.imageUrl || '';
    }

    public static deserialize(apiData: any): TracksModel {
        debugger;
        const data = {
            id: apiData.id,
            name: apiData.name,
            popularity: apiData.popularity,
            imageUrl: apiData.preview_url || Constraints.imagePlaceHoder,
            artistName: apiData.artists.length ? apiData.artists[0].name : ''
        }

        return new TracksModel(data);
    }

    public static deserializeList(data: any[]): TracksModel[] {
        return data && data.map(x => TracksModel.deserialize(x.track))
    }

}