export class User {
    userName?: string;  
    password?: string;
    name?: string;      
    projectName?: string;   
    role?: string;   
    fullName?: string;   

    constructor() {
        this.userName = ""
        this.password = ""
        this.name = ""
        this.projectName = ""
        this.role = ""
        this.fullName = ""
    }
} 