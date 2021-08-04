import { Component, Input } from "@angular/core";

@Component({
    selector:'custom-text-area',
    templateUrl:'../my-template/textarea.template.html',
    styleUrls: ['../my-style/textarea.style.css']
})

export class TextAreaComponent { 
    @Input() name = '';
  }