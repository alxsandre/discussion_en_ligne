import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  constructor() { }

  private socket = io(environment.SOCKET_ENDPOINT);

  sendMessage(data) {
  this.socket.emit('chat message', data );}

  newMessageReceived(){
  let observable = new Observable<{message:String}>(observer=> {
    this.socket.on('chat message', function(msg){
      observer.next(msg);
    });
  });
  return observable}

}
