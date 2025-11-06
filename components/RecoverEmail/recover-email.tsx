import React from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import Link from "next/link";

const RecoverEmail = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <Card className="w-full max-w-md bg-white shadow-lg rounded-2xl border border-gray-300">
                <CardHeader className="text-center">
                    <CardTitle className="text-start text-2xl font-bold text-gray-900">Recover Your Password</CardTitle>
                    <CardDescription className="text-start text-gray-500">
                        Enter your email below to recover your password
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email" className="text-gray-700">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    className="border-gray-300 focus:ring-gray-500 focus:border-gray-500"
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                    <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white cursor-pointer">
                        <Link href="/recoverotp">
                            Submit
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default RecoverEmail;