import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'custom-button',
    templateUrl:'../my-template/button.template.html',
    styleUrls: ['../my-style/button.style.css']
})

export class ButtonComponent { 
    @Input() name = ''; 
    @Output() click_event = new EventEmitter();
    call_parent = () => this.click_event.emit();
  }