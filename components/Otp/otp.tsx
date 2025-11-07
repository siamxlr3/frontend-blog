"use client"

import React, {useState} from "react"
import {useRouter, useSearchParams} from "next/navigation"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {useVerifyOTPMutation} from "@/components/Redux/Feature/User/userAPI";
import toast from "react-hot-toast";
import {useDispatch} from "react-redux";
import {setUser} from "@/components/Redux/Feature/User/authSlice";
import Loader from "@/components/Loader/loader";

const Otp = () => {

    const dispatch = useDispatch();
    const [verifyOTP,{isLoading}]=useVerifyOTPMutation()
    const navigate=useRouter()

    const searchParams = useSearchParams()
    const email = searchParams.get("email")

    const [otp, setOtp] = useState('')

    const handleOnSubmit=async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const data=await verifyOTP({otp,email}).unwrap()
            dispatch(setUser({user:data.user}));
            toast.success("Otp successfully verified")
            navigate.push("/")
        }catch (e){
            toast.error("Invalid Otp")
            console.error(e)
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

                <CardFooter className="flex flex-col gap-3">
                    <div className="text-center text-sm text-gray-600">
                        Didn’t receive the code?{" "}
                        <Button
                            variant="link"
                            className="p-0 text-gray-800 font-medium hover:underline cursor-pointer"
                        >
                            Resend
                        </Button>
                    </div>
                    <div className="text-center text-sm text-gray-600">
                        <Link href="/login" className="hover:underline">
                            Back to Login
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Otp
