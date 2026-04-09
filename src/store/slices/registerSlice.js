import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  role: "student",
  emailVerified: false,
  user: {
    full_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    date_of_birth: "",
    phone: "",
    phone_country_code: "",
    country: "",
    city: "",
    bio: "",
  },
  student: {
    school: "",
    grade: "",
    curriculum: "",
    parent_name: "",
    parent_email: "",
    parent_phone: "",
    interests: [],
    skills: [],
    certifications_interest: [],
  },
  tutor: {
    educations: [],
    languages: [],
    subjects: [],
    teaching_method: "",
    target_audience: "",
    hourly_rate: "",
    experience_years: "",
  },
}

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload
    },
    setEmailVerified: (state, action) => {
      state.emailVerified = action.payload
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload }
    },
    updateStudent: (state, action) => {
      state.student = { ...state.student, ...action.payload }
    },
    updateTutor: (state, action) => {
      state.tutor = { ...state.tutor, ...action.payload }
    },
    resetRegister: () => initialState,
  },
})

export const { setRole, setEmailVerified, updateUser, updateStudent, updateTutor, resetRegister } = registerSlice.actions
export default registerSlice.reducer
