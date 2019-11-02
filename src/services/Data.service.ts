import { Http } from './Api.service';
import { url } from './ApiEndPoints';
import { PlayListModel, TracksModel } from '../models/index';

export const dataService = {
  getPlayLists,
  getTracksLists,
};

async function getPlayLists(): Promise<PlayListModel[]> {
  try {
    const response = await new Http({}).get(url.getPlayLists);
    return response.data.items;
  } catch (error) {
    throw error;
  }
}


async function getTracksLists(playListId: string): Promise<TracksModel[]> {
  try {
    const response = await new Http({}).get(`${url.getPlayLists}/${playListId}/tracks`);
    return TracksModel.deserializeList(response.data.items);
  } catch (error) {
    throw error;
  }
}
