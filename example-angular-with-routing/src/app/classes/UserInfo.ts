export class UserInfo{
    id:bigint;
    name:string;
    password:string;
    cellNumber:string; 
    constructor(id:bigint,name:string,password:string,cellNumber:string){
        this.id=id;
        this.name=name;
        this.password=password;
        this.cellNumber=cellNumber;
    } 
}