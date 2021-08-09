import { Injectable, OnInit } from "@angular/core";
import { Stomp } from "@stomp/stompjs";

let myFunction : (x:string)=>string;
@Injectable()
export class Receiver{
    ws = new WebSocket('ws://localhost:15674/ws');
    client = Stomp.over(this.ws);  
    
    connect=(f:(input:string)=>string)=> { 
        myFunction = f; 
        this.client.connect('guest', 'guest', this.on_connect, this.on_error, '/'); 
    } 

    on_connect = () => this.client.subscribe("/queue/demo-rabbitmq", (d) =>
         myFunction(d.body));
    
    on_error =  (x:any) => console.log('error',x);
    

    

} 