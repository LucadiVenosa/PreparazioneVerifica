import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-ris-component',
  templateUrl: './ris-component.component.html',
  styleUrls: ['./ris-component.component.css']
})
export class RisComponentComponent implements OnInit {

  @Input() risultato : Number;

  constructor() { }

  ngOnInit() {
  }

}
