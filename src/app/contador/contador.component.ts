import { Component, Input, OnInit } from '@angular/core';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
})
export class ContadorComponent implements OnInit {

  @Input() Id: number;
  @Input() Name: number;
  @Input() Score: number;

  increment() {
    this.Score++;
  }

  decrecrement() {
    this.Score--;
  }

  constructor() { }

  ngOnInit() {}

}
