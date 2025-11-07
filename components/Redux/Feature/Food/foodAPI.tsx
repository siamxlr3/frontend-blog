import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseURL } from "@/components/Utilitis/getBaseURL";

interface PaginationParams {
    page?: number;
    limit?: number;
}

const foodAPI = createApi({
    reducerPath: "foodAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: `${getBaseURL()}/food`,
        credentials: "include",
    }),
    tagTypes: ["Food"],

    endpoints: (builder) => ({
        fetchAllFood: builder.query<any, PaginationParams | void>({
            query: (params={}) => {
                const { page = 1, limit } = params as PaginationParams;

                const queryParams = new URLSearchParams({
                    page: page.toString(),
                    take: limit ? limit.toString() : '',
                });

                return `/?${queryParams}`;
            },
            providesTags: ["Food"],
        }),

        fetchFoodByID: builder.query<any, number>({
            query: (id) =>{
                return `/${id}`
            },
            providesTags: ["Food"],
        }),

        searchFood: builder.query<any, string>({
            query: (keyword) => `/search?keyword=${keyword}`,
            providesTags: ["Food"],
        }),

        createFood: builder.mutation<any, FormData>({
            query: (formData) => ({
                url: "/create",
                method: "POST",
                body: formData,
            }),
            invalidatesTags: ["Food"],
        }),

        updateFood: builder.mutation<any, { id: number; data: FormData }>({
            query: ({ id, data }) => ({
                url: `/${id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Food"],
        }),

        deleteFood: builder.mutation<any, number>({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Food"],
        }),
    }),
});

export const {
    useFetchAllFoodQuery,
    useFetchFoodByIDQuery,
    useSearchFoodQuery,
    useCreateFoodMutation,
    useUpdateFoodMutation,
    useDeleteFoodMutation,
} = foodAPI;

export default foodAPI;
