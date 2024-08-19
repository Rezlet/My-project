import { Injectable, inject } from '@angular/core';
import { MasterService } from '../master/master.service';
import { environment } from '../../../../environments/environment';
import { APIConstants } from '../../constant/APIConstants';
import { IUser } from '../../model/interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  master = inject(MasterService)



  onLogin(obj: IUser) {
    return this.master.post(environment.thirdApi + APIConstants.user.login, obj);
  }

  getUsers() {
    return this.master.get(environment.thirdApi + APIConstants.user.getAllUsers)
  }
}
