'use client';
import { error } from 'console';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form,    FormItem,    FormLabel,    FormControl,    FormMessage,    FormField,  } from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import { Button } from '@/components/ui/button';
import { LoadingSwap } from '@/components/ui/loading-swap';


const passwordSchema = z.string()
  .min(8, "Password must be at least 8 characters long")
  .regex(/[!@#$%^&*]/, "Password must contain a special character (!@#$%^&*)")
  .regex(/[0-9]/, "Password must contain a number")
  .regex(/[a-zA-Z]/, "Password must contain a letter");

const signUpSchema = z.object({
    name:z.string().min(4, "Username mst of be length least 4 character").max(20,"Usernaem can't exceed 20 characters"),
    email: z.email({ pattern: z.regexes.email }).min(14),
    password:passwordSchema
})


type SignUpForm = z.infer<typeof signUpSchema>;



export default function SignUp(){
    const form = useForm<SignUpForm>({
        resolver: zodResolver(signUpSchema),
        defaultValues:{
            name:"dave",
            email:"example12@yourmail.com",
            password:" ",
        },
    })
    
    const {isSubmitting} = form.formState;

    function handleSignUP(data:SignUpForm){
        console.log(data)

    }
    return <Form {...form}>
        <form className='sapce-y-4' onSubmit={form.handleSubmit(handleSignUP)} >
            <FormField control={form.control} name='name' render={({field})=>(

                <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Input type='name' {...field} />
                    </FormControl>

                </FormItem>
            )}/>
        {/**email */}
             <FormField control={form.control} name='email' render={({field})=>(
            <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
                <Input type="email" {...field} />
            </FormControl>

        </FormItem>
        )}/>

         {/**password */}
        <FormField control={form.control} name='password' render={({field})=>(

        <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
                <PasswordInput {...field} />
            </FormControl>

        </FormItem>
        )}/>

        <Button type='submit' disabled={isSubmitting} className='w-full'><LoadingSwap isLoading={isSubmitting}> SSign Up</LoadingSwap></Button>
        </form>
    </Form>;
}