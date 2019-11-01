import { observable, action } from 'mobx';

export class UserStore {
  @observable
  playlists: any = [];

  @action
  setPlayList(playlists: any): void {
    this.playlists = playlists;
  }
}
