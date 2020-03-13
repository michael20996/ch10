// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Manager extends Employee{
    constructor(id, name, email, officeNo){
        super(id, name, email, officeNo);
        this.officeNo = officeNo;
    }
    getofficeNo(){
        return this.officeNo;
    }
    getRole(){
        return "Manager";
    }
}
module.exports = Manager;    