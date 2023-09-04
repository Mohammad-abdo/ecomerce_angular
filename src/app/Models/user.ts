export interface User {
  id:number,
  firstName:string,
  lastName:string,
  email:string,
  password:string,
  gender:string,
  address?:string,
  birthDate?:string,
  postCode?:number,
  phoneNumber?:number
}
