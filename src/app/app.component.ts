import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'Test',content:'hello form server'},{type:'blueprint',name:'Arul',content:'This is by Arul'}];
  serverAdded(data:{name:string,content:string}) {
    this.serverElements.push({
      type: 'server',
      name: data.name,
      content: data.content
    });
  }

  blueprintAdded(data:{name:string,content:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: data.name,
      content: data.content
    });
  }
}
