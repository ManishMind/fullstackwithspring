import { Component, OnInit } from '@angular/core';

//Future
// - No Navigation Menu and Footer
// - Formatting - Bootstrap
// - No Security for Menus
// - Hardcoded Logic in the TodoList and Login Components

// - Remaining Functionality - Edit, Delete, Add
// - Spring Boot
// - Spring Security

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Become an Expert at Angular', true, new Date()),
    new Todo(3, 'Visit India', false, new Date())
    // {id : 1, description : },
    // {id : 2, description : ''},
    // {id : 3, description : 'Visit India'}
  ]

  // todo = {
  //     id : 1,
  //     description: 'Learn to Dance'
  // }

  constructor() { }

  ngOnInit() {
  }

}


// import { Component, OnInit } from '@angular/core';

// export class Todo
// {
//      constructor(public id:number,
//       public description : string,
//       public done:boolean,
//       public targetDate:Date)
//      {

//      }
// }
// @Component({
//   selector: 'app-list-todos',
//   templateUrl: './list-todos.component.html',
//   styleUrls: ['./list-todos.component.css']
// })
// export class ListTodosComponent implements OnInit {
//   todos = [
//            new Todo(1,'Learn Python','false',new Date()),
//            new Todo(2,'Learn AWS','true',new Date()),
//            new Todo(3,'Learn Dockers','false',new Date())
//          ]
//   // todo={
//   //          id : 1,
//   //          description:'Learn Python'

//   }

//   constructor() { }

//   ngOnInit() {
//   }

// }
