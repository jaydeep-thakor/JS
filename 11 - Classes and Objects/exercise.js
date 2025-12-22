let DATA = "secret information";

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log(DATA)
    }
}

class Admin extends User{

    constructor(name, email){
        super(name, email)
    }

    editData(){
        DATA = "some new value";
    }
}

class Student extends User{
    constructor(name, email, rollNo){
        super(name, email);
        this.rollNo = rollNo;
    }

    submitAssignment(){
        console.log(`name : ${this.name}, Roll no : ${this.rollNo} has submitted assignment`)
    }

}

class Teacher extends User{
constructor(name, email, subject){
        super(name, email)
        this.subject = subject;
    }

    gradeAssignment() {
        console.log(`${this.name} graded the assignment.`);
    }

}

let admin1 = new Admin("admin", "admin@college.com")

let student1 = new Student("Jaydeep", "j@email.com");
let student2 = new Student("august", "a@email.com", 7);

let teacher1 = new Teacher("dean", "dean@college.com")
let teacher2 = new Teacher("smith", "smith@college.com", "java programming")

