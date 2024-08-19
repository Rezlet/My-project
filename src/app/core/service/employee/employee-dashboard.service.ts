import { Injectable } from '@angular/core';
import { MasterService } from '../master/master.service';
import { environment } from '../../../../environments/environment';
import { APIConstants } from '../../constant/APIConstants';

@Injectable({
  providedIn: 'root'
})
export default class EmployeeDashboardService {

  constructor(private master: MasterService) { }

  getAllEmployee() {
    this.master.get(environment.api + APIConstants.user.getAllUsers).subscribe((data) => {
      console.log(data)
    })
  }
}
