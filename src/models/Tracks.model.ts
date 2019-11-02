import { Constraints } from "../enums/index";

export class TracksModel {
    id: number | string;
    name: string;
    artistName: string;
    popularity: number;
    total?: number;
    imageUrl: string;
    durationInMs: number;
    albumName: string;

    constructor(data?: TracksModel) {
        this.id = data.id || '';
        this.name = data.name || '';
        this.popularity = data.popularity || 0;
        this.durationInMs = data.durationInMs || 0;
        this.total = data.total || 0;
        this.albumName = data.albumName;
        this.artistName = data.artistName;
        this.imageUrl = data.imageUrl || '';
    }

    public static deserialize(apiData: any): TracksModel {
        const data = {
            id: apiData.id,
            name: apiData.name,
            popularity: apiData.popularity,
            durationInMs: apiData.duration_ms,
            imageUrl: apiData.album.images[0].url || Constraints.imagePlaceHoder,
            artistName: apiData.artists.length ? apiData.artists[0].name : '',
            albumName: apiData.album.name || 'No name '
        }
        return new TracksModel(data);
    }

    public static deserializeList(data: any[]): TracksModel[] {
        return data && data.map(x => TracksModel.deserialize(x.track))
    }

}