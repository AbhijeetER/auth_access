import {betterAuth} from "better-auth";
import {db} from '../drizzle/db';
import {drizzleAdapter} from 'better-auth/adapters/drizzle';
import { nextCookies } from "better-auth/next-js";

//here we define the type of auth and its properties and work alongside auth-client
export const auth = betterAuth({
    emailAndPassword:{// email based auth has been enabled 
        enabled:true
    },
    session:{ //we have create a session here that last for 3 minutes
        cookieCache:{
            enabled:true,
            maxAge:60*3,
        }
    },
    plugins:[nextCookies()],
    database:drizzleAdapter(db,{//this tells that the db ishandled by drizzle orm and db is postgres, {bitch you might think its ai its not i add comments because i forget easily}
        provider:"pg",
    }),
    
});