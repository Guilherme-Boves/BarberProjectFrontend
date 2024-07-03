import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  userRegisterForm = this.formBuilder.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  handleSubmitLogin(): void {
    if (!this.userRegisterForm.valid || !this.userRegisterForm.value) {
      this.toastr.warning("Credenciais Inválidas", "Aviso", {
        timeOut: 5000,
        closeButton: true
      });
    }
  }
}
