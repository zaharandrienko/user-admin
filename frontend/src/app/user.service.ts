import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class User {

    
    firstname: string
    id:number 
    age : number

}

@Injectable({
    providedIn: 'root'
  })
export class UserService{
    constructor(private httpClient: HttpClient){}

    private userUrl = 'http://localhost:8000/users';

    getUsersByFirstName(firstname : string) : Observable<User[]>{
        return this.httpClient.get<User[]>(this.userUrl + "?firstname=" + firstname);
    }

    getUsers(): Observable<User[]>{
        return this.httpClient.get<User[]>( this.userUrl )
    }

    getUser(id : string) : Observable<User>{
        return this.httpClient.get<User>(this.userUrl + "/" + id);
    }


    addUser( user : User){
        return this.httpClient.post<User>(this.userUrl, user);
    }

    deleteUser(id:number){
        return this.httpClient.delete(this.userUrl + "/" + id)
    }

    putUser(id:number, user:User){
        return this.httpClient.put(this.userUrl + "/" + id, user)
    }
}