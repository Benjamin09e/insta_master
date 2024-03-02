export function additem(token){
    window.localStorage.setItem("stringToken", token)
}

export function removeitem(){
    window.localStorage.removeItem("stringToken")
}

export function getitem(){
    return window.localStorage.getItem("stringToken")
}


