import { z } from "zod"

export const studentDetailsSchema = z.object({
  full_name: z.string().min(2, "Full name must be at least 2 characters").max(255),
  date_of_birth: z.string().min(1, "Date of birth is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Phone number must be at least 7 digits").max(20).or(z.literal("")),
  password: z.string().min(6, "Password must be at least 6 characters"),
  password_confirmation: z.string().min(1, "Please confirm your password"),
}).refine((d) => d.password === d.password_confirmation, {
  message: "Passwords don't match",
  path: ["password_confirmation"],
})

export const tutorDetailsSchema = z.object({
  full_name: z.string().min(2, "Full name must be at least 2 characters").max(255),
  date_of_birth: z.string().min(1, "Date of birth is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Phone number must be at least 7 digits").max(20).or(z.literal("")),
  password: z.string().min(6, "Password must be at least 6 characters"),
  password_confirmation: z.string().min(1, "Please confirm your password"),
}).refine((d) => d.password === d.password_confirmation, {
  message: "Passwords don't match",
  path: ["password_confirmation"],
})

export const otpSchema = z.object({
  code: z.string().length(6, "Verification code must be 6 digits"),
})

export const parentSchema = z.object({
  parent_name: z.string().min(2, "Full name must be at least 2 characters").or(z.literal("")),
  parent_email: z.string().email("Please enter a valid email").or(z.literal("")),
  parent_phone: z.string().min(7, "Phone must be at least 7 digits").or(z.literal("")),
})

export const tutorEducationSchema = z.object({
  degree: z.string().min(1, "Degree is required"),
  field_of_study: z.string().min(1, "Field of study is required"),
  institution: z.string().min(1, "Institution is required"),
  education_start_date: z.string().min(1, "Start date is required"),
  education_end_date: z.string().optional(),
})

export const tutorTrainingSchema = z.object({
  languages: z.array(z.string()).min(1, "Select at least one language"),
  subjects: z.array(z.string()).min(1, "Select at least one subject"),
  teaching_method: z.enum(["online", "in_person", "both"], { required_error: "Select a teaching method" }),
  target_audience: z.enum(["children", "adults", "both"], { required_error: "Select a target audience" }),
})

export function validateField(schema, data, field) {
  const result = schema.safeParse(data)
  if (result.success) return null
  const err = result.error.issues.find((i) => i.path[0] === field)
  return err ? err.message : null
}

export function validateAll(schema, data) {
  const result = schema.safeParse(data)
  if (result.success) return {}
  const errors = {}
  result.error.issues.forEach((i) => {
    if (!errors[i.path[0]]) errors[i.path[0]] = i.message
  })
  return errors
}
