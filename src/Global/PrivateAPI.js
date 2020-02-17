import Cookies from 'js-cookie'

export default {
    get: (URL) => {
      return fetch(URL,{
        headers: new Headers({
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + Cookies.get('accessToken')
      })
    }).then(res => res.json());
    },

    post : (URL,formData) =>{
        fetch(URL, {
            'method': 'post',
            headers: new Headers({
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('accessToken')
            }),
    
            body: formData
        }).then(res => res.json());
    }
  }