import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .white-class{color:white}
  `]
})
export class AppComponent {
    
    is_psw_show: boolean = false;
    
    logs: Array<number> = [];
    
    private createTimestamp(){
        return Date.now() / 1000 | 0;
    }
    
    toggleSecret(){
        this.logs.push(this.createTimestamp());
        this.is_psw_show = !this.is_psw_show;
    }
}
