import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '@/app/services/user.service';

@Component({
  selector: 'app-congratulate',
  templateUrl: './congratulate.component.html',
  styleUrls: ['./congratulate.component.css']
})
export class CongratulateComponent {
  listCongratulate: any = [];
  congratulateForm = new FormGroup({
    nickName: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
  });

  constructor(userService: UserService) {
    this.listCongratulate = userService.getAllCongratulate();
  }

  onSubmitForm() {
    const { nickName, content } = this.congratulateForm.value;
    if (!nickName || !content) {
        return;
    }

    // const exitUser = await
  }
}
