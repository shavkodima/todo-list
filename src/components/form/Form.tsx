import {FC} from 'react';
import {Form, Input, Button} from 'antd'
import ModalSuccess from '../modal/Modal';


const {TextArea} = Input

interface IPropsForm{
  flagEdit?:boolean
  handler:()=>void
  setTitle:(value:string)=> void
  setDescription:(value:string)=>void
  title:string
  description:string
}

const Forms:FC<IPropsForm> = ({flagEdit=false, handler, setTitle, setDescription, title, description}) => {
  const [form] = Form.useForm()
  


  const handleFormSubmit = (e: React.MouseEvent<HTMLElement>) =>{    
    handler()
    if(!flagEdit){
      form.resetFields();   
    }
    ModalSuccess(flagEdit ? 'Todo Save' : 'Todo added')
  }

  return (
    <div>
        <Form
        form={form}
        layout='vertical'
        name='hooks'
        onFinish={handleFormSubmit}
        initialValues={flagEdit ? {title, description}: {title:'', description:''}}
      >
          <Form.Item id='1' label='Title' name={'title'} rules={[{required:true, message:'Please enter title'}]}>
              <Input 
                type='text' 
                onChange={(e)=> setTitle(e.target.value)} 
                value={title} 
                placeholder='Enter title'
                />
          </Form.Item>
          <Form.Item label='Description' name={'description'} rules={[{required:true, message:'Please enter description'}]}>
              <TextArea 
                rows={4}
                onChange={(e)=> setDescription(e.target.value)} 
                value={description}
                placeholder='Enter description'

                />
          </Form.Item>
          <Form.Item>
              <Button type='primary' htmlType='submit' >{flagEdit ? 'Save' : 'Add'}</Button>
          </Form.Item>
        </Form>
    </div>
  );
};

export default Forms;