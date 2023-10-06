

class CreateTodoClass {
   id:number = Date.now()
   title:string = ''
   description:string = ''
   isActiv:boolean = false
   date = new Date().toString()
  constructor(title:string = '', description:string = ''){
    this.title = title
    this.description = description
  }


}


export default CreateTodoClass;