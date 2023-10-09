import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import Swal from "sweetalert2";
@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  openSweetAlert(sweetAlertIcon: any, sweetAlertMsg: any) {
    Swal.fire({
      title: '',
      text: sweetAlertMsg,
      icon: sweetAlertIcon,
    });
  }

  openSnackBar(message: string, duration?: number, horizontal?: MatSnackBarHorizontalPosition, vertical?: MatSnackBarVerticalPosition) {
    this._snackBar.open(message, 'X', {
      duration: duration ? duration : 2000,
      horizontalPosition: horizontal ? horizontal : 'center',
      verticalPosition: vertical ? vertical : 'bottom',
    });
  }
}
