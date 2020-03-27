import React, { useEffect } from 'react';
import axios from 'axios'
export default () => {
  useEffect(() => {
    (async () => {
      const resule = await axios.get('/api')
    })()
  }, [])
  return (<div>这是demo页</div>)
}