"use client"

import React, {useState} from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {useLoginUserMutation} from "@/components/Redux/Feature/User/userAPI";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import Loader from "@/components/Loader/loader"

const UserLogin = () => {

    const [loginUser,{isLoading }]=useLoginUserMutation()
    const navigate=useRouter()

    const [input, setInput] = useState({
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
            const data={
                email:input.email,
                password:input.password,
            }

            await loginUser(data)
            toast.success("otp send successfull.")
            navigate.push(`/otp?email=${input.email}`);
        }catch(e){
            toast.error("failed.")
            console.log(e)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <Card className="w-full max-w-md bg-white shadow-lg rounded-2xl border border-gray-300">
                <CardHeader className="text-center">
                    <CardTitle className="text-start text-2xl font-bold text-gray-900">Login to your account</CardTitle>
                    <CardDescription className="text-start text-gray-500">
                        Enter your email below to login to your account
                    </CardDescription>
                    <CardAction className="mt-3">
                        <Link href='/signup'>
                            <Button variant="ghost" className="bg-gray-200 text-gray-700 cursor-pointer">Sign Up</Button>
                        </Link>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleOnSubmit}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email" className="text-gray-700">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    onChange={handleOnChange}
                                    value={input.email}
                                    placeholder="m@example.com"
                                    required
                                    className="border-gray-300 focus:ring-gray-500 focus:border-gray-500"
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password" className="text-gray-700">Password</Label>
                                    <Link
                                        href="/recoveremail"
                                        className="ml-auto text-sm text-gray-600 hover:underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={handleOnChange}
                                    value={input.password}
                                    required
                                    className="border-gray-300 focus:ring-gray-500 focus:border-gray-500"
                                />
                            </div>

                            <div className="mt-4">
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full text-white flex justify-center items-center gap-2 cursor-pointer
              ${isLoading ? 'bg-gray-900' : 'bg-gray-900 hover:bg-gray-800'}
              disabled:bg-gray-900 disabled:opacity-100`}
                                >
                                    {isLoading ? <Loader /> : "Login"}
                                </Button>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default UserLogin;
