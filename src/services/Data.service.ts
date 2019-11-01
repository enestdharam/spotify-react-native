import { Http } from './Api.service';
import { url } from './ApiEndPoints';

export const dataService = {
  getPlayLists,
};

async function getPlayLists() {
  try {
    const response = await new Http({}).get(url.getPlayLists);
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
