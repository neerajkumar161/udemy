import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'my-first-app';
  // showMessage = false;
  // value = 0;
  // clickedArr = [];
  // onBtnClick(){
  //   this.showMessage = !this.showMessage;
  //   this.value++;
  //   this.clickedArr.push(new Date());
  // }

  serverList = [{ type:'Test Type', name:'New TestServer', desc:'This is a test'}];
}
