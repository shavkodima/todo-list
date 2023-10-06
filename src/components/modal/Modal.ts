import {Modal} from 'antd'

const ModalSuccess = (message:string = '') => {
  
    Modal.success({
      content: message 
    })
  
};

export default ModalSuccess;