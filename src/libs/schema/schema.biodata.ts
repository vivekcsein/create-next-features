import z from "zod";
import {
  dateRules,
  emailRules,
  fullnameRules,
  heightRules,
} from "@/libs/configs/config.schema";

export const personalInfoSchema = z
  .object({
    fullname: fullnameRules,
    dateOfBirth: dateRules,
    age: z.string().min(1, "Age is required"),
    // height: z.string().min(1, "Height is required"),
    height: heightRules.optional(),
    weight: z.string().min(1, "Weight is required").optional(),
    complexion: z.string().min(1, "Complexion is required").optional(),
    bloodGroup: z.string().min(1, "Blood Group is required").optional(),
    maritalStatus: z.string().min(1, "Marital Status is required").optional(),
    religion: z.string().min(1, "Religion is required").optional(),
    caste: z.string().min(1, "Caste is required").optional(),
    motherTongue: z.string().min(1, "Mother Tongue is required").optional(),
    nationality: z.string().min(1, "Nationality is required").optional(),
  })
  .describe("Personal Info");

export const contactInfoSchema = z
  .object({
    address: z.string().min(1, "Address is required").optional(),
    city: z.string().min(1, "City is required").optional(),
    state: z.string().min(1, "State is required").optional(),
    pincode: z.string().min(1, "Pincode is required").optional(),
    phone: z.string().min(1, "Phone is required").optional(),
    email: emailRules.optional(),
  })
  .refine(
    (data) => Object.values(data).some((v) => v !== undefined && v !== ""),
    {
      message: "Please fill at least one contact field",
    }
  )
  .describe("Contact form");

export const familyInfoSchema = z
  .object({
    fatherName: fullnameRules,
    motherName: fullnameRules,
    fatherOccupation: z
      .string()
      .min(1, "Father's Occupation is required")
      .optional(),
    motherOccupation: z
      .string()
      .min(1, "Mother's Occupation is required")
      .optional(),
    siblings: z.string().min(1, "Siblings is required").optional(),
    familyType: z.string().min(1, "Family Type is required").optional(),
    familyValues: z.string().min(1, "Family Values is required").optional(),
  })
  .describe("Family Info");

export const educationandCareerInfoSchema = z
  .object({
    education: z.string().min(1, "Education is required").optional(),
    college: z.string().min(1, "College is required").optional(),
    occupation: z.string().min(1, "Occupation is required").optional(),
    company: z.string().min(1, "Company is required").optional(),
    income: z.string().min(1, "Annual Income is required").optional(),
    workLocation: z.string().min(1, "Work Location is required").optional(),
  })
  .describe("Education Info");

export const partnerPreferencesInfoSchema = z
  .object({
    partnerAge: z.string().min(1, "Preferred Age is required").optional(),
    partnerHeight: heightRules.optional(),
    partnerEducation: z
      .string()
      .min(1, "Preferred Education is required")
      .optional(),
    partnerOccupation: z
      .string()
      .min(1, "Preferred Occupation is required")
      .optional(),
    partnerLocation: z
      .string()
      .min(1, "Preferred Location is required")
      .optional(),
  })
  .describe("Partner Info");

export const additionalInfoSchema = z
  .object({
    hobbies: z.string().min(1, "Hobbies & Interests is required").optional(),
    aboutMe: z.string().min(1, "About Me is required").optional(),
  })
  .describe("Additional Info");
