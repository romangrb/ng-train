import {Component, ViewChild} from '@angular/core';
import {ngForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions = ['Basic', 'Advantage', 'Pro'];
  selectedSubscription = 'Advanced';
  @ViewChild('signupForm') sgnForm:ngForm;
  onSubmit(){
    console.log(this.sgnForm.value);
  }
}
