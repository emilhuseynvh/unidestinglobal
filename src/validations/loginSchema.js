import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
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
