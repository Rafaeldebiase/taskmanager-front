import { Injectable } from '@angular/core';

import { STORAGE_KEYS } from '../config/storage_keys.config';
import { ILocalUser } from '../models/dto/localuser.Dto';



@Injectable()
export class StorageService {

    public getLocalUser(): ILocalUser {
        const user = localStorage.getItem(STORAGE_KEYS.localUser);
        if (user === null) {
            return null;
        } else {
            return JSON.parse(user);
        }
    }

    public setLocalUser(obj: ILocalUser) {
        if (obj === null) {
            localStorage.removeItem(STORAGE_KEYS.localUser);
        } else {
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    }
}
