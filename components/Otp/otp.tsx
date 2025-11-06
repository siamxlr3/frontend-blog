"use client"

import React from "react"
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

const Otp = () => {
    const [value, setValue] = React.useState("")

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
                    <div className="flex flex-col items-center gap-6 mt-4">
                        <InputOTP
                            maxLength={6}
                            value={value}
                            onChange={(value) => setValue(value)}
                        >
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>

                        <div className="text-sm text-gray-600 text-center">
                                Enter your one-time password below.
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-3">
                    <Button
                        type="submit"
                        className="w-full bg-gray-900 hover:bg-gray-800 text-white cursor-pointer"
                    >
                        Verify OTP
                    </Button>
                    <div className="text-center text-sm text-gray-600">
                        Didn’t receive the code?{" "}
                        <Button variant="link" className="p-0 text-gray-800 font-medium hover:underline cursor-pointer">
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
