// *********datatypes******* 
// let a:String="25";
// let nambo:number=123;
// let check:boolean=true;
// console.log(check);

// let nameb=<string>"pratham";
// console.log(nameb);

// let namen:string="pratham";
// console.log(nameb);

// union type --> using multiple data type
// let surname:string | number;
// surname="newajsj"
// console.log(surname)
// surname=123;
// console.log(surname)

// const func=(n:number,m:number)=>{
//     console.log(n,m);
//     return n*m;
// }

// const func=(n:number,m:number):number=>{
//     console.log(n,m);
//     return n*m;
// }


// ********type********* 
// type UserName=string | number;
// type UserPhone=number;
// type UserEmail=string;
// type userFuncType=(n:number,m:number)=>number;

// let a:UserName="Pratham";
// console.log(a);
// a=112;
// console.log(a);

// let b:UserPhone=1233;
// console.log(b);

// let c:UserEmail="email@gmail.com";
// console.log(c);

// const func:userFuncType=(n,m)=>{
//     console.log(n,m);
//     return n*m;
// }
// console.log(func(1,2));

// *********Arrays**********

// const arr:number[]=[12,24,36,48];
// const arr2:string[]=["ab","cd","ef"];

// const arr3:Array<string>=[];

// const arr3:Array<string>=new Array(10);

// const arr4:Array<string | number>=["hello",123,"world"];

// const arr5:Array<string>=["hello","my","name","is"];
// arr5.forEach((eachEle)=>{
//   console.log(eachEle)
// })

// const arr6:[number,string,number,boolean]=[12,"hello",245,true];


//*******objects*****

// const obj:{
//     height:number,
//     width:number,
//     gender:boolean
// }={
//     height:34,
//     width:23,
//     gender:true
// }
// console.log(obj);

// Using type with object 

// type objTypes={
//     height:number,
//     width:number,
//     gender?:boolean // ? means gender property is optional
// }

// const obj:objTypes={
//     height:12,
//     width:15,
//     gender:false
// }
// console.log(obj);

// const obj:objTypes={
//     height:12,
//     width:15,
// }
// console.log(obj);


// Using interface with object 

// interface objTypes {
//     height:number,
//     width:number,
//     gender?:boolean // ? means gender property is optional
// }
// type FuncType=(n:number,m:number)=>void;
// interface NewObjType extends objTypes{
//     scolar:boolean,
//     marks:number,
//     func:FuncType;
// } 

// const newObj:NewObjType={
//     height:12,
//     width:15,
//     scolar:true,
//     marks:60,
//     func:(n,m)=>{
//         console.log(n,m);
//     }
// }
// newObj.func(20,40);
// console.log(newObj);


// **********Functions***********
// Optional Parameter 
// type FuncType=(n:number,m:number,l?:number)=>number;
// const func:FuncType=(n,m,l)=>{
//    if(typeof l==="undefined") return n*m;
//    return n*m*l  
// }
// console.log(func(1,2));


// default Parameter (make default value of some parameters if parameter is not provided)
// Syntax1)With type
// type FuncType=(n:number,m:number,l?:number)=>number;
// const func:FuncType=(n,m,l=20)=>{
//    return n*m*l  
// }
// console.log(func(1,2));
// syntax2)without type
// const func=(n:number,m:number,l:number=20):number=>{
//    return n*m*l  
// }
// console.log(func(1,2));


// Rest operator (recieving all parameters as array)
//Syntax1) Without Type 
// const func=(...m:number[]):number[]=>{
//    return m;  
// }
// console.log(func(1,2,3))
//Syntax1) With Type 
// type FuncType=(...m:number[])=>number[];
// const func:FuncType=(...m)=>{
//    return m;  
// }
// console.log(func(1,2,3))

// Without type 
// function func(n:number):number{
//     return 45;
// }
// with type 
// type FuncType=(n:number)=>number;
// const func:FuncType=function func(n){
//     return n;
// }

// function with objects 
// without type 
// const getData=(product:{name:string,stock:number,price:number,photo:string}):void=>{
//     console.log(product);
// }
// with type 
// syntax1)
// type getDataType=(product:{name:string,stock:number,price:number,photo:string})=>void;
// const getData:getDataType=(product)=>{
//     console.log(product);
// }
// const product1:{name:string,stock:number,price:number,photo:string}={
//    name:"MacBook",
//    stock:10,
//    price:100,
//    photo:"new Photo"
// };
// getData(product1);
// syntax2)
// interface Product{ // we can also use type here our choice
//    name:string,
//    stock:number,
//    price:number,
//    photo:string,
//    readonly id:string // we can not change the id
// }
// type getDataType=(product:Product)=>void;
// const getData:getDataType=(product)=>{
//     console.log(product);
// }
// const product1:Product={
//    name:"MacBook",
//    stock:10,
//    price:100,
//    photo:"new Photo",
//    id:"Product1 id"
// };
// getData(product1);

// Never Type 
// Eg1)
// (when the function throws error by default then it returns never type)
// const errorHandler=()=>{
//    throw new Error();
// } 
// Eg2)
// (when the function returns error then by default it returns Error type)
// const errorHandler=()=>{
//    return new Error();
// } 
// Eg3)
// const errorHandler=():never=>{
//    throw new Error();
// } 

// another type use case
// type themeMode="light" | "dark";
// const mode:themeMode="light";
// console.log(mode); 
// const mode2:themeMode="dark";
// console.log(mode2); 


// ***************Classes*****************
//--> by default all properties of class are public 
//--> public variables can be acces from anywhere
//--> private variables only be accessible inside the class and not accesed in subclass
// --> protected variables only be accessible inside the class or in the subclass

// Eg1)
// class Player{
//    private height=34;
//    weight=20;
//    constructor(height:number,weight:number){
//        this.height=height;
//        this.weight=weight;
//    }
//    myHeight=()=>{
//       return this.height;
//    }
// } 
// const player1=new Player(123,233);
// console.log(player1.weight)
// console.log(player1.myHeight())

// Eg2)
// class Player{
//    readonly id:string
//    constructor(private height:number,public weight:number,protected power:number){
//       this.id=String(Math.random()*100);
//    }
//    getMyHeight=()=>this.height;
// } 
// class Player2 extends Player{
//     special:boolean;
//     constructor(height:number,weight:number,power:number,special:boolean){
//        super(height,weight,power);  
//        this.special=special;
//     }
//     getMyPower=()=>this.power;
// }
// const playerObj=new Player(123,2,78);
// console.log(playerObj.weight)
// console.log(playerObj.myHeight())

// const Player2Obj=new Player2(12,34,100,true);
// console.log("SPecial :"+Player2Obj.special)
// console.log("Weight :"+Player2Obj.weight)
// console.log("Height :"+Player2Obj.getMyHeight())
// console.log("Power :"+Player2Obj.getMyPower())
// console.log("Id :"+Player2Obj.id)

// Eg3)getter and setter
// class Player{
//    readonly id:string
//    constructor(private height:number,public weight:number,protected power:number){
//       this.id=String(Math.random()*100);
//    }
//    get getMyHeight():number{
//       return this.height;
//    }
//    set changeMyHeight(val:number){
//       this.height=val;
//    }
// }
// const pratham=new Player(100,150,25);
// console.log("Before Height :",pratham.getMyHeight);
// pratham.changeMyHeight=200;
// console.log("After Height :",pratham.getMyHeight);

// Eg3)
// interface ProductType{
//    name:string,
//    price:number,
//    stock:number,
//    getId:()=>string,
//    offer?:boolean
// }
// interface giveId{
//    getId:()=>string
// }
// class Product implements ProductType,giveId{
//    private id:string=String(Math.random()*1000);
//    constructor(public name:string,public price:number,public stock:number){}
//    getId=()=>this.id;
// }
// const product1=new Product("Laptop",1000,12);
// console.log(product1.getId());
// console.log(product1.name)
// console.log(product1.price)
// console.log(product1.stock)


// Type Assertion 
// method1)
// const btn=document.getElementById("btn") as HTMLElement;
// method2)
// const btn=<HTMLElement>document.getElementById("btn");
// method3)
// const btn=document.getElementById("btn")!; // ! used so that to make sure btn is not null

// get img element
// syntax1)Gives error when try to acces img attributes or properties becouse typescript doesnot 
// recognize that this element is img element 
// const img=document.getElementById("myimg")!;
// img.src // gives error
// syntax2)to solve above problem we use 
// const img=document.getElementById("myimg") as HTMLImageElement;
// img.src  // here we easily acces image properties
// syntax3)using query selector
// const img=document.querySelector("img")!;
// img.src

// const form=document.getElementById("myform") as HTMLFormElement;
// const myInput=document.querySelector("form>input") as HTMLInputElement;
// form.onsubmit=(e:SubmitEvent)=>{
//     e.preventDefault();
//     const h2=document.createElement("h2");
//     const num=Number(myInput.value);
//     const body=document.querySelector("body")!;
//     h2.textContent=String(num+20);
//     body.appendChild(h2);
// }

// Eg1)
// interface Person{
//     [key:string]:string
// }
// const myObj:Person={
//     name:"Pratham",
//     email:"email@gmail.com"
// }
// const getName=():string=>{
//     return myObj["name"];
// }
// const getEmail=():string=>{
//     return myObj["email"];
// }
// const getData=(key:string)=>{
//     return myObj[key];
// }
// console.log(getData("name"));
// console.log(getData("email"));
// console.log(getData("abc"));
// Eg2)
// interface Person{
//     name:string,
//     email:string
// }
// const myObj:Person={
//     name:"Pratham",
//     email:"email@gmail.com"
// }
// const getName=():string=>{
//     return myObj["name"];
// }
// const getEmail=():string=>{
//     return myObj["email"];
// }
// const getData=(key:keyof Person)=>{
//     return myObj[key];
// }
// console.log(getData("name"))
// console.log(getData("email"))

// Eg3)
// interface Person{
//     name:string,
//     email:string
// }
// const myObj:Person={
//     name:"Pratham",
//     email:"email@gmail.com"
// }
// let key="name";
// if we have given Person type interface 
// console.log(myObj[key as keyof Person])
// if we have not given Person type interface 
// console.log(myObj[key as keyof typeof myObj])


// ******************TypeUtility*****************

// Partial<Type>
// Required<Type>
// Readonly<Type>
// Record<Keys, Type>
// Pick<Type, Keys>
// Omit<Type, Keys>
// Exclude<Type, ExcludedUnion>
// Extract<Type, Union>
// NonNulLable<Type>
// Parameters<Type>
// ConstructorParameters<Type>
// ReturnType<Type>
// InstanceType<Type>


//Type1) Partial<Type> --> used to make the fields optional
// type User={
//    name:string,
//    email:string, 
// }
// Meth1)Here name and email is optional using ?
// type User2={
//    name?:string,
//    email?:string, 
// }
// Meth2)here name and email is optional using Partial<Type>
// type User2=Partial<User>;

// Type2) Required<Type> --> make the fields as required fields
// type User={
//    name?:string,
//    email:string, 
// }
// syntax1)
// type User2=Required<User>;
// syntax2)
// const user:Required<User>={
//    name:"pratham",
//    email:"pratham@gmail.com"
// }

// Type3)Readonly<Type> -->(makes every field read only) with this we can 
// only read the field we can't change the fields
// type User={
//    name:string,
//    email:string, 
// }
// type User2=Readonly<User>;
// const user:User2={
//     name:"pratham",
//     email:"pratham@gmail.com"
// }
// user.name="new name"; // gives error becouse we can only read the fields not change

// Type4)Record<Keys, Type>

//-->Without Record 
// type User={
//     name:string,
//     email:string, 
// }

//-->With Record 
// Eg1)
// type User2=Record<"name"|"email"|"gender",string>

// Eg2)
// interface UserInfo{
//     age:number
// }
// type UserName="john"|"andrew"|"elon"|"jack";
// const users:Record<UserName,UserInfo>={
//     john:{age:34},
//     andrew:{age:2},
//     elon:{age:23},
//     jack:{age:56},
// }
// console.log(users)

// Pick<Type, Keys>
// interface OrderInfo{
//    readonly id:string,
//    user:string,
//    city:string,
//    state:string,
//    country:string,
//    status:string   
// }
// type ShippingInfo=Pick<OrderInfo,"city"|"state"|"country">

// Omit<Type, Keys> 
// interface ShippingInfo{
//     city:string,
//     state:string,
//     country:string,
// }
// type Random=Omit<ShippingInfo,"country">

// Exclude<Type, ExcludedUnion>
// type MyUnion=string | number | boolean;
// type random=Exclude<MyUnion,number>; //exclude number from string,number or boolean so random have type string  or boolean
// type random2=Exclude<MyUnion,number | string>; //exclude number,string from string,number or boolean so random have type boolean

// Extract<Type, Union>
// type MyUnion=string | number | boolean;
// type random=Extract<MyUnion,number>;
// type random2=Extract<MyUnion,boolean>;

// NonNulLable<Type> --> removes null,undefined 
// type MyUnion=string | number | boolean | null | undefined;
// type random=NonNullable<MyUnion>;
// type random2=Exclude<MyUnion,null | undefined>;

// Parameters<Type> --> tells type of parameters of function
// const myfunc=(a:number,b:string)=>{
//     console.log(a+b)
// }
// type random=Parameters<typeof myfunc>        

// ConstructorParameters<Type>-->tells type of parameters of class constructor
// class SampleClass{
//     constructor(public s:string,public t:string){}
// }
// type random=ConstructorParameters<typeof SampleClass>        

// ReturnType<Type>
// const myfunc=(a:number,b:string):string=>{
//     console.log(a+b)
//     return a+b;
// }
// type FuncReturnType=ReturnType<typeof myfunc>

// InstanceType<Type>
// class SampleClass{
//     constructor(public s:string,public t:string){}
// }
// type Random=InstanceType<typeof SampleClass> 
// const user:Random={
//    s:"dhhd",
//    t:"jdjd"
// }  


// *******************Generics********************* 
// -->generic means common

// Eg1)
// const func=<CustomType>(n:CustomType):CustomType=>{
//     let text:CustomType;
//     return n;
// }
// const ans=func(20);
// const ans2=func("20");
// const ans3=func(true);

// Eg2)
// type Person={
//     name:string,
//     age:number
// }
// const func=<T>(n:T):T=>{
//     return n;
// }
// const person1:Person={
//    name:"pratham",
//    age:12
// }
// const ans=func<Person>(person1);
// console.log(ans)

// also this Array is implemented using generics 
// const arr:number[]=[];
// const arr2:Array<number>=[];

// Eg3)
// const func=<T,U>(n:T,o:U):{n:T,o:U}=>{
//     return {n,o};
// }
// const ans=func<number,string>(20,"hello");
// console.log(ans)

// Eg4)
// type Person={
//     name:string,
//     age:number
// }
// type Person2={
//     name:string,
//     age:number,
//     email:string
// }
// const user:Person={
//     name:"name1",
//     age:12
// }
// const user2:Person2={
//     name:"name2",
//     age:277,
//     email:"email@gmail.com"
// }
// const func=<T,U extends T>(n:T,o:U):{n:T,o:U}=>{
//     return {n,o};
// }
// const ans=func<Person,Person2>(user,user2);
// console.log(ans)

// Eg5)
type Person={
    name:string,
    age:number
}
const users:Person[]=[
    { name:"name1",age:12},
    { name:"name2",age:13},
    { name:"name3",age:14},
    { name:"name4",age:15}
]
const filterByPeoples=<T,U extends keyof T>(arr:T[],property:U,value:T[U]):T[]=>{
    return arr.filter((item)=>item[property]===value);
}
const filteredPeopleByName=filterByPeoples(users,"name","name1");
const filteredPeopleByAge=filterByPeoples(users,"age",15);
console.log(filteredPeopleByName);
console.log(filteredPeopleByAge)
