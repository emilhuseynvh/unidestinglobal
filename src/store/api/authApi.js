import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

function buildFormData(data, formData = new FormData(), parentKey = "") {
  if (data === null || data === undefined) {
    if (parentKey) formData.append(parentKey, "")
    return formData
  }
  if (data instanceof File) {
    formData.append(parentKey, data)
    return formData
  }
  if (Array.isArray(data)) {
    if (data.length === 0) {
      formData.append(parentKey, "")
      return formData
    }
    data.forEach((item, i) => {
      buildFormData(item, formData, `${parentKey}[${i}]`)
    })
    return formData
  }
  if (typeof data === "object" && !(data instanceof Date)) {
    Object.keys(data).forEach((key) => {
      buildFormData(data[key], formData, parentKey ? `${parentKey}[${key}]` : key)
    })
    return formData
  }
  formData.append(parentKey, String(data))
  return formData
}

export const authApi = createApi({
  reducerPath: "authApi",
  tagTypes: ["Profile"],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.token
      if (token) headers.set("Authorization", `Bearer ${token}`)
      headers.set("Accept", "application/json")
      return headers
    },
  }),
  endpoints: (builder) => ({
    sendOtp: builder.mutation({
      query: (body) => ({ url: "/otp/send", method: "POST", body }),
    }),
    resendOtp: builder.mutation({
      query: (body) => ({ url: "/otp/resend", method: "POST", body }),
    }),
    verifyOtp: builder.mutation({
      query: (body) => ({ url: "/otp/verify", method: "POST", body }),
    }),
    register: builder.mutation({
      query: (data) => {
        const formData = buildFormData(data)
        return { url: "/register", method: "POST", body: formData }
      },
    }),
    updateProfile: builder.mutation({
      query: (data) => {
        const formData = buildFormData(data)
        formData.append("_method", "PUT")
        return { url: "/profile", method: "POST", body: formData }
      },
      invalidatesTags: ["Profile"],
    }),
    login: builder.mutation({
      query: (body) => ({ url: "/login", method: "POST", body }),
    }),
    getTutorStatus: builder.query({
      query: () => "/tutor/status",
    }),
    getMe: builder.query({
      query: () => "/me",
      providesTags: ["Profile"],
    }),
  }),
})

export const {
  useSendOtpMutation,
  useResendOtpMutation,
  useVerifyOtpMutation,
  useRegisterMutation,
  useUpdateProfileMutation,
  useLoginMutation,
  useGetTutorStatusQuery,
  useGetMeQuery,
} = authApi
