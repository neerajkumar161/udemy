import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverId = 10;
  serverStatus =  'offline';
  myCustomVariable = 'Custom Variable';
  allowNewServer = false;
  serverCreationStatus = 'No server is created!';
  serverCreated = false;
  inputValue = ''; 
  // Task Variables
  username = '';
  // usernameIsEmpty: Boolean;
  serverList = ['server1', 'server2'];
  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
      setTimeout(()=>{
          this.allowNewServer = true;
      },2000)
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  getServerStatus(){
      return this.serverStatus;
  } 

  onServerCreation(){
    this.serverCreated = true;
    this.serverList.push(this.inputValue);
    this.serverCreationStatus = 'Server Created successfully! Name is '+ this.inputValue;
  }

  onInputData(event:Event){
    this.inputValue = (<HTMLInputElement>event.target).value;
    console.log(this.inputValue);
  }

  usernameIsEmpty(){
    if(this.username.length == 0){
      return false;
    }
    else
      return true;
  }
  resetValues(){
    this.username = '';
  }
  ngOnInit(): void{
    
  }

}
