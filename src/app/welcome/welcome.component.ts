
//import java.io.*
import { Component, OnInit } from '@angular/core';
//if we want to use a file from different module then do like this
//import { AppComponent } from '../app.component'   // no need to write .ts extension
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

// below we are having a decorator where we are initializing some attributes similiar to 
//annotations in java
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = "Some Welcome Message"
 
  welcomeMessageFromService : string
  name = ''

  // here export means i want to use this class outside the boundry of this particular module or file

  // ActivatedRoute
  constructor(private route: ActivatedRoute, private service: WelcomeDataService) { }

  ngOnInit() {

    //console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSucessfulResponse(response),
      error=> this.handleErrorResponse(error));

      console.log("last line of get welcome message")
     

    // this.service.executeHelloWorldBeanService().subscribe();
    // this.service.executeHelloWorldBeanService().subscribe();
      
    //console.log("Get Welcome Message");
  }
  handleSucessfulResponse(response)
  { 
    this.welcomeMessageFromService = response.message
    //console.log(response.message);
  }

handleErrorResponse(error){
   console.log(error);
   console.log(error.error);
   console.log(error.message);
  this.welcomeMessageFromService = error.error.message
  
  
}

}
export class class1 {


}