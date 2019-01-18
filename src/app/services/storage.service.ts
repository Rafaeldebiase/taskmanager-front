import { Injectable } from '@angular/core';
import { LocalUser } from '../models/localuser';
import { STORAGE_KEYS } from '../config/storage_keys.config';


@Injectable()
export class StorageService {

    public getLocalUser(): LocalUser {
        const user = localStorage.getItem(STORAGE_KEYS.localUser);
        if (user === null) {
            return null;
        } else {
            return JSON.parse(user);
        }
    }

    public setLocalUser(obj: LocalUser) {
        if (obj === null) {
            localStorage.removeItem(STORAGE_KEYS.localUser);
        } else {
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    }
}
