import { ResolveFn } from "@angular/router";


export const UserResolver: ResolveFn<any> = (route,state)=> {
    const userObj = {
        name: "saurabh",
        state: "uttar pradesh",
        city: "lucknow"
    }

    return userObj;
}