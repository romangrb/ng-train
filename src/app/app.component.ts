import { Component } from '@angular/core';
import { formsModule } from '@angular/forms'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
        username ='';
        
        isInputDisabled = true;
        
        checkValidate(){
            this.isInputDisabled = (this.username=='') true : false;
        }
        
        onSubmit(){
            this.username = '';
        }
    }
  
}
