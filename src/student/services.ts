import axios from 'axios';

export const studentServices = (url:any) => new Promise((resolve, reject) => {
  axios.get(url).then((response)=> {
    resolve(response)
  }).catch((error)=>{
    reject(error);
  });
})