import { parseDate } from "./parseDate"


class CreateTodoClass {
   id:number = Date.now()
   title:string = ''
   description:string = ''
   isActiv:boolean = false
   date = parseDate()
  constructor(title:string = '', description:string = ''){
    this.title = title
    this.description = description
  }


}


export default CreateTodoClass;