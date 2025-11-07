"use client"

import React, {useState} from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {useRecoverPasswordMutation} from "@/components/Redux/Feature/User/userAPI";
import {useRouter, useSearchParams} from "next/navigation";
import toast from "react-hot-toast";
import Loader from "@/components/Loader/loader";

const RecoverPassword = () => {

    const navigate=useRouter()
    const searchParams = useSearchParams()
    const email=searchParams.get("email") || ''
    const otp=searchParams.get("otp") || ''

    const [password,setPassword]=useState<string>('')

    const [recoverPassword,{isLoading}]=useRecoverPasswordMutation()

    const handleOnSubmit=async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try {
            await recoverPassword({email,otp,newPassword:password}).unwrap()
            navigate.push("/login")
        }catch(e){
            toast.error("something went wrong.")
            console.log(e)
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <Card className="w-full max-w-md bg-white shadow-lg rounded-2xl border border-gray-300">
                <CardHeader className="text-center">
                    <CardTitle className="text-start text-2xl font-bold text-gray-900">
                        Recover Your Password
                    </CardTitle>
                    <CardDescription className="text-start text-gray-500">
                        Enter your password below to recover your account.
                    </CardDescription>
                </CardHeader>


                <form onSubmit={handleOnSubmit} className="space-y-6">
                    <CardContent>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="password" className="text-gray-700">
                                    New Password
                                </Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="border-gray-300 focus:ring-gray-500 focus:border-gray-500"
                                />
                            </div>
                        </div>
                    </CardContent>

                    <CardFooter className="flex flex-col gap-3">
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full text-white flex justify-center items-center gap-2 cursor-pointer
              ${isLoading ? 'bg-gray-900' : 'bg-gray-900 hover:bg-gray-800'}
              disabled:bg-gray-900 disabled:opacity-100`}
                        >
                            {isLoading ? <Loader /> : "Submit"}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
};

export default RecoverPassword;