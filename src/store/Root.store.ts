import { UserStore } from './User.store';

export class RootStore {
  public userStore: UserStore;
  constructor() {
    this.userStore = new UserStore();
  }
}
