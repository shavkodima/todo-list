import {FC} from 'react';
import {useParams} from 'react-router-dom'



const Edit:FC = () => {
  const params= useParams()
  
  return (
    <div>
      Edit
    </div>
  );
};

export default Edit;