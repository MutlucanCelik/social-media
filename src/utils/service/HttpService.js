export const getWithAuth = (url,token) => {
 
    return fetch(`http://127.0.0.1:8000/api/${url}`,  {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : token,
        },
      }).then((response) => {
        if (!response.ok) {
          console.log('Kullanıcı Bilgisi Getirilemedi')
          return
        }
        return response.json()
      })
      .catch((error) => {
        console.error('Bir sorun oluştu:', error)
      })
}



export const getWithoutAuth = (url) => {

    var request = fetch(url,  {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

    return request
}


export const postWithAuth = (url, body,token) => {
    var request = fetch(`http://127.0.0.1:8000/api/${url}`,  {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "Authorization" : token,
        },
        body : JSON.stringify(body),
      }).then((response) => {
        if (!response.ok) {
          console.log('Kullanıcı Bilgisi gönderilmedi')
          return
        }
        return response.json()
      })
      .catch((error) => {
        console.error('Postta Bir sorun oluştu:', error)
      })

    return request
}
export const updateUser = (url, formData, token) => {
  return fetch(`http://127.0.0.1:8000/api/${url}`, {
    method: "POST",
    headers: {
      "Authorization": token,
    },
    body: formData,
  })
  .then((response) => {
    if (!response.ok) {
      console.log('Kullanıcı Bilgisi gönderilmedi')
      return;
    }
    return response.blob();
  }).then(blob => console.log(blob))
  .catch((error) => {
    console.error('Postta Bir sorun oluştu:', error);
  });
};
export const postItems = (url, token) => {
  var request = fetch(`http://127.0.0.1:8000/api/${url}`,  {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "Authorization" : token,
      }
    }).then((response) => {
      if (!response.ok) {
        console.log('Kullanıcı Bilgisi gönderilmedi')
        return
      }
      return response.json()
    })
    .catch((error) => {
      console.error('Postta Bir sorun oluştu:', error)
    })

  return request
}


export const PostWithoutAuth = (url, body) => {

    var request = fetch(url,  {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify(body),
      })

    return request
}

export const putWithAuth = (url, body) => {
  
    var request = fetch("/api"+url,  {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : localStorage.getItem("tokenKey"),
        },
        body : JSON.stringify(body),
      })

    return request
}


export const deleteWithAuth = (url) => {

    var request = fetch("/api"+url,  {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : localStorage.getItem("tokenKey"),
        },
      })

    return request
}