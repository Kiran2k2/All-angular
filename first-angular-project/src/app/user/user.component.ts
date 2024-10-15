import { Component,computed,EventEmitter,input,Input,output,Output,signal } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";
const randomUser=Math.floor(Math.random()*DUMMY_USERS.length)

type User={
    id:string,
    name:string,
    avatar:string
};

@Component({
    selector:"app-user",
    standalone:true,
    templateUrl:"./user.component.html",
    styleUrl:"./user.Component.css"
})
export class UserComponent{

//  selectedUser=signal(DUMMY_USERS[randomUser])
// //  get imagePath(){
// //     return 'assets/users/'+ this.selectedUser.avatar
// //  }

// imagePath=computed(()=>'assets/users/'+ this.selectedUser().avatar)
//! another way input decorator................................................................................

// @Input ({required:true}) id!:string
// @Input ({required:true})avatar!:string
// @Input({required:true})name!:string


// @Input({required:true}) user!:{
//     id:string,
//     name:string,
//     avatar:string
// }

@Input({required:true}) user!:User
@Input({required:true}) selectd !:boolean







//? output method....................................................................................................................
// @Output() select = new EventEmitter()
//! output functon..................................................................
select=output<string>()

//  avatar=input .required <string>()
//  name=input.required<string>()
// imagePath=computed(()=>{
//     return 'assets/users/'+ this.avatar()
// })





get imagePath(){
         return 'assets/users/'+ this.user.avatar
     }

 onSelectUser(){
// const randomUser=Math.floor(Math.random()*DUMMY_USERS.length);
// //  this.selectedUser=DUMMY_USERS[randomUser]
// this.selectedUser.set(DUMMY_USERS[randomUser])


this.select.emit(this.user.id)

 }


} 