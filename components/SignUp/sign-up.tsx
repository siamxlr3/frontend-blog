"use client"

import React, {useState} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {useCreateUserMutation} from "@/components/Redux/Feature/User/userAPI";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignUp = () => {

    const [createUser]=useCreateUserMutation()
    const navigate=useRouter()

    const [input, setInput] = useState({
        name:"",
        email: "",
        password: ""
    });

    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput((prev) => ({ ...prev, [name]: value }));
    };

    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const newUser={
                name:input.name,
                email:input.email,
                password:input.password,
            }

            await createUser(newUser)
            toast.success("Signed up successfully.")
            navigate.push('/login')
        }catch(e){
         console.log(e)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <Card className="w-full max-w-md bg-white shadow-lg rounded-2xl border border-gray-300">
                <CardHeader className="text-center">
                    <CardTitle className="text-start text-2xl font-bold text-gray-900">Sign Up to your account</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleOnSubmit}>
                        <div className="flex flex-col gap-6">
                            {/* Name, Email, Password inputs */}
                            <div className="grid gap-2">
                                <Label htmlFor="name" className="text-gray-700">Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={input.name}
                                    onChange={handleOnChange}
                                    placeholder="Enter your name"
                                    required
                                    className="border-gray-300 focus:ring-gray-500 focus:border-gray-500"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email" className="text-gray-700">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    value={input.email}
                                    onChange={handleOnChange}
                                    placeholder="m@example.com"
                                    required
                                    className="border-gray-300 focus:ring-gray-500 focus:border-gray-500"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="password" className="text-gray-700">Password</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    value={input.password}
                                    onChange={handleOnChange}
                                    required
                                    className="border-gray-300 focus:ring-gray-500 focus:border-gray-500"
                                />
                            </div>


                            <div className="mt-4">
                                <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white cursor-pointer">
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default SignUp;