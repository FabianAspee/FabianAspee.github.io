import { Injectable, OnInit } from "@angular/core";
import { Stomp } from "@stomp/stompjs";

@Injectable()
export class Receiver implements OnInit{
    ws = new WebSocket('ws://127.0.0.1:5672/ws');
    client = Stomp.over(this.ws);  
    
    on_connect = () => console.log('connected');
    
    on_error =  () => console.log('error');
    

    ngOnInit(){ 
        console.log(1111)
        this.client.connect('guest', 'guest', this.on_connect, this.on_error, '/demo-rabbitmq'); 
        this.client.onreceive = x => console.log(x);
    }

} 