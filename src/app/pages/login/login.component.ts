import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  masterSer = inject(MasterService);
  router = inject(Router)

  loginObj:any ={
     "emailId":"",
     "password":""
  }
 constructor(){}

 ngOnInit(): void {
   this.onLogin();
 }
  onLogin(){
    if(this.loginObj.emailId == "admin@gmail.com" && this.loginObj.password == "112333" ){
      alert("Login Successfully");
      this.router.navigateByUrl("/dashboard");
    }else{
      alert("Invalid Credentials")
    }
    // this.masterSer.login(this.loginObj).subscribe((result:any)=>{
    //   if(result.res){
    //     localStorage.setItem('ticketUser', JSON.stringify(result.data));
    //     this.router.navigateByUrl("/dashboard")
    //   }else{
    //     alert(result.message)
    //   }
    // })
  }
}
