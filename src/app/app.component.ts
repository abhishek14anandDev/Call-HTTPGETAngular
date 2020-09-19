import { Component, VERSION } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  tableData;
  constructor(private http : HttpClient){

  }

  ngOnInit(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((rec)=>this.display(rec))
  }

  display(rec){
    console.log(rec)
    this.tableData = rec;
  }
}
