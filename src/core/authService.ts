

import http from "@/core/http";

export function sendFormData(data:{
    email:string,
    password:string
}){
    return http.post("/auth/register",data).then(({data})=>data);
}