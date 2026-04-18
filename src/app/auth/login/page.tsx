import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SignUp from "./_components/sign-up-tab";
import SignIn from "./_components/sign-in-tab";

export default function LoginPage(){
    

    return <Tabs defaultValue="signin" className="max-auto w-full py-6 px-4 ">
        <TabsList>
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <Card>
            <TabsContent value="signin">
                <CardHeader className="text-2xl font-bold">
                    <CardTitle>Sign In</CardTitle></CardHeader>
                    <CardContent>
                        <SignIn />
                    </CardContent>

            </TabsContent>
            <TabsContent value="Signup">
                <CardHeader className="text-2xl font-bold">
                    <CardTitle>Signup </CardTitle></CardHeader>
                    <CardContent>
                        <SignUp />
                    </CardContent>

            </TabsContent>
        </Card>
    </Tabs>
  
}