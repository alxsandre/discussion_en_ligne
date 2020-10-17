import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SocketioService } from '../socketio.service';



@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit{

    messageArray = [];
    listeFont = false;

  constructor(private socketService: SocketioService) {

    this.socketService.newMessageReceived()
    .subscribe( msg=>this.messageArray.push(msg.message));

}

  onSubmit(form: NgForm) {
    this.socketService.sendMessage({message:form.value['mess']})
    form.setValue({mess: ''});

  }

  onClickMenuFont(){
    this.listeFont = !this.listeFont;
      }
  




  ngOnInit(): void {


  }

}
