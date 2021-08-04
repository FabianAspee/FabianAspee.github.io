import { Component, Input } from "@angular/core";

@Component({
    selector:'custom-button',
    templateUrl:'../my-template/button.template.html',
    styleUrls: ['../my-style/button.style.css']
})

export class ButtonComponent { 
    @Input() name = '';
  }