import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() settings;
  @Input() data;
  @Output() delete = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteOne (e) {
    // console.log(e);
    this.delete.emit(e);
  }
}
