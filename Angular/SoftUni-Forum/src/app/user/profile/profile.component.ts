import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {

  showEdit: boolean = false;
  userData = {
    username: 'John',
    tel: '0789288828',
    email: 'john.doe@gmail.com'
  }

  toggleEdit() {
    this.showEdit = !this.showEdit;
  };

  onEdit(form: NgForm){
    this.userData.username = form.value['username'];
    this.userData.tel = form.value['tel'];
    this.userData.email = form.value['email'];

    this.showEdit = !this.showEdit;
  };

  onCancel(){
    this.showEdit = !this.showEdit;
  };
}
