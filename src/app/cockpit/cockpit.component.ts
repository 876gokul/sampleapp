import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newServerContent = '';

  @Output() sreverCreated = new EventEmitter<{name:string,content:string}>();
  @Output() blueprintCreated = new EventEmitter<{name:string,content:string}>();

  onAddServer(name:HTMLInputElement,content:HTMLInputElement) {
    this.sreverCreated.emit({name:name.value,content:content.value})
  }

  onAddBlueprint(name:HTMLInputElement,content:HTMLInputElement) {
    this.blueprintCreated.emit({name:name.value,content:content.value})
  }
}
