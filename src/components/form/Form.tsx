import {FC, useState} from 'react';
import {Form, Input, Button} from 'antd'

const {TextArea} = Input

const Forms:FC = () => {
  const [form] = Form.useForm()
  const [title, setTitle] = useState<string>()
  const [description, setDescription] = useState<string>()

  const handleFromSubmit = (e:React.FormEvent) =>{
    e.preventDefault()    
  }

  return (
    <div>
        <Form
        form={form}
        name='control-hooks'
        layout='vertical'
        >
          <Form.Item label='Title' name={'Title'} rules={[{required:true, message:'Please enter title'}]}>
              <Input 
                type='text' 
                onChange={(e)=> setTitle(e.target.value)} 
                value={title} 
                placeholder='Enter title'
                />
          </Form.Item>
          <Form.Item label='Description' name={'Description'} rules={[{required:true, message:'Please enter description'}]}>
              <TextArea 
                rows={4}
                onChange={(e)=> setDescription(e.target.value)} 
                value={description}
                />
          </Form.Item>
          <Form.Item>
              <Button type='primary' htmlType='submit' onClick={handleFromSubmit}>Add</Button>
          </Form.Item>
        </Form>
    </div>
  );
};

export default Forms;