import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SessionService {

    private auth : boolean = false;
    private id : string = '0';
    private name : string = 'Guest';

    public setAuth(auth: boolean){
        this.auth = auth;
        localStorage.setItem('auth', ''+auth);
    }

    getAuth(): boolean{
        return localStorage.getItem('auth')=="true";
    }

    public setId(id: string){
        this.id = id;
        console.log("ID="+id);
        localStorage.setItem('id', ''+id);
    }

    getId() : string{
        return localStorage.getItem('id');
    }

    public setName(name: string){
        this.name = name;
        //console.log("NAME="+name);
        localStorage.setItem('name', ''+name);
    }

    getName() : string{
        return localStorage.getItem('name');
    }

    logout(){
        localStorage.clear();
    }

}