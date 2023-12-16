export const getWithAuth = (url) => {

    var request = fetch("/api"+url,  {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : localStorage.getItem("tokenKey"),
        },
      })

    return request
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


export const postWithAuth = (url, body) => {
  console.log(body)
    return fetch("http://127.0.0.1:8000/api/"+url,  {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
          "Authorization" : localStorage.getItem("tokenKey"),
        },
        body : JSON.stringify(body),
      }).then((response) => {
        if (!response.ok) {
          console.log('Kullanıcı Bilgisi Getirilemedi')
        }
        return response.json()
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error)
      })
}

export const postWithoutAuth = (url, body) => {

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


export const DeleteWithAuth = (url) => {

    var request = fetch("/api"+url,  {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : localStorage.getItem("tokenKey"),
        },
      })

    return request
}