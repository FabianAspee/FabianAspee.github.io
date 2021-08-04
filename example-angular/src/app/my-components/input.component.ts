import { Component, Input } from "@angular/core";

@Component({
    selector:'custom-input',
    templateUrl:'../my-template/input.template.html',
    styleUrls: ['../my-style/input.style.css']
})

export class InputComponent { 
    @Input() name = '';
  }