import { Component, OnInit, Renderer } from '@angular/core';
import { Router } from '@angular/router';

@Component({
selector: 'app-list-task',
templateUrl: './list-task.component.html',
styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

dtOptions: DataTables.Settings = {};
tasks =[
{
"id":1,
"title":"my Task 12",
"dueDate":"12-12-2012",
"priority":"LOW"
},
{
"id":2,
"title":"my Task 12",
"dueDate":"12-12-2012",
"priority":"LOW"
},
];

constructor(private renderer: Renderer, private router: Router) { }

ngOnInit() {
  let token=localStorage.getItem('token');
  this.dtOptions = {
    'ajax':{
      url:'http://localhost:8080/tasks',
      type:'GET',
      headers: {
      'Authorization': `${token}`,
      },
      dataSrc: '',
      "error": function(reason) {
      console.log("error encountered ! ");
      }
      
    },  
columns: [{title: 'ID', data: 'id'},
{title: 'Title', data: 'title'},
{title: 'Due date', data: 'dueDate' },
{title: 'Priority', data: 'priority' },
{
title: 'Action',
render: function (data: any, type: any, full: any) {
return '<button type="button" class="btn btn-primary " indexTask ="'+full.id+'" id="edit" style="margin:10px;">Edit</button><button type="button" class="btn btn-danger " indexTask ="'+full.id+'" id="delete">Delete</button><button type="button" class="btn btn-info " indexTask ="'+full.id+'" id="detail" style="margin:10px;">Detail</button>';
}
}
],
lengthChange:false,
pageLength:5
};
}

ngAfterViewInit(): void {
  this.renderer.listenGlobal('document', 'click', (event) => {
  if(event.target.attributes['id'])
  {
  if (event.target.attributes['id'].nodeValue == "edit") {
  console.log(event.target.attributes);
  this.router.navigate(["/edit/"+event.target.attributes['indexTask'].nodeValue]);
  }
  else if (event.target.attributes['id'].nodeValue == "delete") {
  console.log(event.target.attributes);
  this.router.navigate(["/delete/"+event.target.attributes['indexTask'].nodeValue]);
  }
  else if (event.target.attributes['id'].nodeValue == "detail") {
  console.log(event.target.attributes);
  this.router.navigate(["/detail/"+event.target.attributes['indexTask'].nodeValue]);
  }
  }
  });
  }
}

