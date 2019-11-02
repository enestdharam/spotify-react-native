import { observable, action } from 'mobx';
import { PlayListModel, TracksModel } from '../models/index';

export class UserStore {
  @observable
  playlists: PlayListModel[] = [];

  @observable
  trackslists: TracksModel[] = [];

  @action
  setPlayList(playlists: PlayListModel[]): void {
    this.playlists = playlists;
  }

  @action
  setTrackslists(trackslists: TracksModel[]): void {
    this.trackslists = trackslists;
  }

}
