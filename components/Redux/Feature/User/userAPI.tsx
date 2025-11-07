import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseURL } from "@/components/Utilitis/getBaseURL";
import {setToken} from "@/components/Utilitis/SessionHelper";

const userAPI = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: `${getBaseURL()}/user`,
        credentials: "include",
    }),
    tagTypes: ["User"],

    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (newUser) => ({
                url: `/create`,
                method: "POST",
                body: newUser,
            }),
            invalidatesTags: ["User"],
        }),

        loginUser: builder.mutation({
            query: (data) => ({
                url: `/login`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["User"],
        }),

        logoutUser: builder.mutation({
            query: () => ({
                url: `/logout`,
                method: "POST",
            }),
            invalidatesTags: ["User"],
        }),

        getUser: builder.query({
            query: () => ({
                url: `/`,
                method: "GET",
            }),
            providesTags: ["User"],
        }),

        verifyOTP: builder.mutation({
            query: ({ email, otp }) => ({
                url: `/verify-otp/${email}`,
                method: "POST",
                body: { otp },
            }),
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    setToken(data.token);
                } catch (err) {
                   console.log(err)
                }
            }
        }),

        recoverEmail: builder.mutation({
            query: (email) => ({
                url: '/recover-email',
                method: "POST",
                body: {email}
            }),
        }),

        recoverOtp: builder.mutation({
            query: ({ email, otp }) => ({
                url: `/recover-otp/${email}`,
                method: "POST",
                body: { otp },
            }),
        }),

        recoverPassword: builder.mutation({
            query: ({ email, otp, newPassword }) => ({
                url: `/recover-password/${encodeURIComponent(email)}/${encodeURIComponent(otp)}`,
                method: "POST",
                body: { password: newPassword },
            }),
        }),
    }),
});

export const {
    useCreateUserMutation,
    useLoginUserMutation,
    useLogoutUserMutation,
    useGetUserQuery,
    useVerifyOTPMutation,
    useRecoverEmailMutation,
    useRecoverOtpMutation,
    useRecoverPasswordMutation,
} = userAPI;

export default userAPI;
