/*
    interface: giao diện
    dùng để định nghĩa các thuộc tính và phương thức các lớp con
    kế thừa bắt buộc phải triển khai
    ==> cũng giống như abstract
    - có những điểm j khác nhau so với abstract
    - để tạo abstract thì dùng từ khóa abstract
    - để tạo interface thì dung từ khóa interface
    - đối với interface thì ko thể dùng kiểu kết hợp (union và intersection)
    đc như đối với type
    -có thể khởi tạo đối tượng từ interface ko?
    ==> ko thể khởi tạo đối tượng từ interface
    -interface sinh ra nhằm mục đính j?
    interface là 1 cái khuôn mẫu cho các class khác kế thừa phải tuân theo
    -các class con khi kế thừa interface bắt buộc phải tuân phải triển khai tất cả các
    thuộc tính và phương thức của interface (implemets)
    -1 class có thể triển khai nhiều interface dc ko?
    ==>1 class có thể triển khai nhiều interface đc
    -interface có thể kế thừa  interface đc ko ?
    ==> interface có thể kế thừa interface
    trong interface thì ko thể đặt access modifier đc

 */
interface Sales{
    name:string;
    sale():string;
    sale1():void;
}
interface Sales1{
    name:string;
    address:string;
}
interface Sales3 extends Sales1{
    age:number;
}
class Person implements Sales,Sales1{
    name: string;
    address: string;
    constructor(name:string,address:string){
        // ko cần dùng super
        this.name = name
        this.address = address
    }
    sale():string{
        return "giảm giá 5%";
    }
    sale1(): string {
        return "giảm giá 15%"
    }
}
