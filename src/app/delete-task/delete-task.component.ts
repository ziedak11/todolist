import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent implements OnInit {
  taskId;
  task;
  errorMessage:String;
  constructor(private taskService:TaskService,private route:ActivatedRoute,private router: Router) { }
  ngOnInit() {
    this.taskId=this.route.snapshot.params["indexTask"];
    this.taskService.getTaskById(this.taskId).subscribe(data => this.task=data,error => this.errorMessage=error);  
  }
  deleteTask(){
    this.taskService.deleteTask(this.taskId).subscribe(data => {this.task=data;
      this.router.navigate(["/list"]);
      }
      ,error => this.errorMessage=error);
      
  }
  cancelTask(){
  this.router.navigate(["/list"]);
  }
  }
  
