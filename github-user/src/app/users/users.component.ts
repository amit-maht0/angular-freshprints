import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  gitHubData: any[] = [];

  ngOnInit() {
    const storedData = localStorage.getItem('gitHubHistory');
    if (storedData) {
      let parsedData = JSON.parse(storedData);
      console.log(parsedData);
      this.gitHubData = parsedData;
    }
  }

  clearLocalStorage() {
    localStorage.clear();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Data removed from local storage',
      showConfirmButton: false,
      timer: 1500,
    });
    window.location.reload();
  }
}
