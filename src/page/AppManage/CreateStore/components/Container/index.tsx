import React, { FC } from 'react';
import './index.less'

interface IContainerProps {
}

const Container: FC<IContainerProps> = (props) => {
  return (
      <div className='container_tel'>
        <div className='tel_top'></div>
        <div className='tel_header mb20'>
            <div className='left'></div>
            <div className='right'></div>
        </div>
        <div className='content mb20'>

        </div>
        <div className='tel_bottom'></div>
      </div>
  );
};

export default Container;