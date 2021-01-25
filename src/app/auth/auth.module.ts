import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthViewComponent } from './auth-view/auth-view.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [AuthViewComponent],
  providers: [AuthService],
  imports: [CommonModule],
  exports: [AuthViewComponent]
})
export class AuthModule { }
