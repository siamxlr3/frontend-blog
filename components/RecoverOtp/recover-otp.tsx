"use client"

import React, {useState} from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {InputOTP, InputOTPGroup, InputOTPSlot} from "@/components/ui/input-otp";
import {Button} from "@/components/ui/button";
import {useRecoverOtpMutation} from "@/components/Redux/Feature/User/userAPI";
import {useRouter, useSearchParams} from "next/navigation";
import toast from "react-hot-toast";
import Loader from "@/components/Loader/loader";

const RecoverOtp = () => {

    const navigate=useRouter()
    const [recoverOtp,{isLoading}]=useRecoverOtpMutation()
    const searchParams = useSearchParams()
    const email=searchParams.get("email")

    const [otp, setOtp] =useState("")

    const handleOnSubmit=async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try {
            await recoverOtp({otp,email}).unwrap()
            toast.success("Otp verified successfully.")
            navigate.push(`/recoverpassword?email=${email}&otp=${otp}`)
        }catch (e){
            toast.error("something went wrong.")
            console.log(e)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <Card className="w-full max-w-md bg-white shadow-lg rounded-2xl border border-gray-300">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-gray-900">
                        Verify OTP
                    </CardTitle>
                    <CardDescription className="text-gray-500">
                        Enter the 6-digit code sent to your email
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleOnSubmit}>
                        <div className="flex flex-col items-center gap-6 mt-4">
                            <InputOTP
                                maxLength={6}
                                value={otp}
                                onChange={(value) => setOtp(value)}
                            >
                                <InputOTPGroup>
                                    <InputOTPSlot index={0}/>
                                    <InputOTPSlot index={1}/>
                                    <InputOTPSlot index={2}/>
                                    <InputOTPSlot index={3}/>
                                    <InputOTPSlot index={4}/>
                                    <InputOTPSlot index={5}/>
                                </InputOTPGroup>
                            </InputOTP>

                            <div className="text-sm text-gray-600 text-center">
                                Enter your one-time password below.
                            </div>

                            {/*<Button*/}
                            {/*    type="submit"*/}
                            {/*    className="w-full bg-gray-900 hover:bg-gray-800 text-white cursor-pointer"*/}
                            {/*>*/}
                            {/*    Verify OTP*/}
                            {/*</Button>*/}
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full text-white flex justify-center items-center gap-2 cursor-pointer
              ${isLoading ? 'bg-gray-900' : 'bg-gray-900 hover:bg-gray-800'}
              disabled:bg-gray-900 disabled:opacity-100`}
                            >
                                {isLoading ? <Loader /> : "Verify OTP"}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default RecoverOtp;