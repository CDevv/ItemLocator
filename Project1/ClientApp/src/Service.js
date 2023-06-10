const URL = "/api"

export function Get(service) {
    return fetch(`${URL}/${service}`, {
        method: "GET",
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

export function GetById(service, id) {
    return fetch(`${URL}/${service}/${id}`, {
        method: "GET",
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

export function Add(service, data) {
    return fetch(`${URL}/${service}`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
}

export function Delete(service, id) {
    return fetch(`${URL}/${service}/${id}`, {
        method: "DELETE",
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

export function Update(service, id, data) {
    return fetch(`${URL}/${service}/${id}`, {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
}