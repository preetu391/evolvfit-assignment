import React from 'react';
import Tooltip from '@mui/material/Tooltip';

const ToolTip = () => {

  const MyComponent = React.forwardRef(function MyComponent(props, ref) {
    return <div {...props} ref={ref}></div>
  });
  
  return (
    <div>
      <Tooltip title="Add" arrow placement='bottom-end' >
        <MyComponent/>
      </Tooltip>
    </div>
  )
}

export default ToolTip