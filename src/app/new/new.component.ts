import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverDesc: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverDesc: string}>();

  // newServerName = '';
  // newServerDesc = '';
  // Using ViewChild 
  @ViewChild('serverDescInput',{ static: true}) serverDescInput: ElementRef;
  
  @Input('servElement') server : { type: string, name: string, desc: string}
  constructor() { }
  
  ngOnInit(): void {
  }

  onServerAdded(nameServerInput: HTMLInputElement)
  {
    console.log(this.serverDescInput.nativeElement.value);
    this.serverCreated.emit({ 
      serverName: nameServerInput.value, 
      serverDesc: this.serverDescInput.nativeElement.value
    });
  }

  onBlueprintAdded(nameServerInput: HTMLInputElement)
  {
    this.blueprintCreated.emit({ 
      serverName: nameServerInput.value, 
      serverDesc: this.serverDescInput.nativeElement.value
     });  
  }

}
