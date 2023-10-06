import {FC} from 'react';
import { Skeleton } from 'antd'

const SkeletonComponent:FC<{row:number}> = ({row}) => {
  return (
    <Skeleton paragraph={{ rows: row }} />
  );
};

export default SkeletonComponent;