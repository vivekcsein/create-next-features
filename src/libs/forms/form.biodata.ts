import { InputType } from "@/types/app";
import {
  bloodGroupOptions,
  complexionOptions,
  maritalStatusOptions,
  nationalityOptions,
  religionOptions,
} from "../data/data.form";

export interface FormInputType {
  id: string;
  label: string;
  type: InputType;
  placeholder: string;
  options?: { label: string; value: string }[];
  required: boolean;
  errorMessage: string;
}

export interface FormListType {
  title: string;
  description: string;
  icon?: string;
  formInputs: FormInputType[];
}

export interface BioDataFormType {
  personalInfo: FormListType;
  contactInfo: FormListType;
  familyInfo: FormListType;
  educationandCareerInfo: FormListType;
  partnerPreferencesInfo: FormListType;
  additionalInfo: FormListType;
}

const BiodataForm: BioDataFormType = {
  personalInfo: {
    title: "Personal Information",
    description: "Please fill in the following information",
    icon: "user",
    formInputs: [
      {
        id: "fullName",
        label: "Full Name",
        type: "text",
        placeholder: "Enter full name",
        required: true,
        errorMessage: "Please enter your full name",
      },
      {
        id: "dateOfBirth",
        label: "Date of Birth",
        type: "date",
        placeholder: "Enter date of birth",
        required: true,
        errorMessage: "Please enter your date of birth",
      },
      {
        id: "age",
        label: "Age",
        type: "number",
        placeholder: "Enter age",
        required: false,
        errorMessage: "Please enter your age",
      },
      {
        id: "height",
        label: "Height",
        type: "decimal",
        placeholder: "Enter height",
        required: true,
        errorMessage: "Please enter your height",
      },
      {
        id: "weight",
        label: "Weight",
        type: "number",
        placeholder: "Enter weight",
        required: false,
        errorMessage: "Please enter your weight",
      },
      {
        id: "complexion",
        label: "Complexion",
        type: "select",
        placeholder: "Enter complexion",
        options: complexionOptions,
        required: false,
        errorMessage: "Please enter your complexion",
      },
      {
        id: "bloodGroup",
        label: "Blood Group",
        type: "select",
        placeholder: "Enter blood group",
        options: bloodGroupOptions,
        required: false,
        errorMessage: "Please enter your blood group",
      },
      {
        id: "maritalStatus",
        label: "Marital Status",
        type: "select",
        placeholder: "Enter marital status",
        options: maritalStatusOptions,
        required: true,
        errorMessage: "Please enter your marital status",
      },
      {
        id: "religion",
        label: "Religion",
        type: "select",
        placeholder: "Enter religion",
        options: religionOptions,
        required: true,
        errorMessage: "Please enter your religion",
      },
      {
        id: "caste",
        label: "Caste",
        type: "text",
        placeholder: "Enter caste",
        required: true,
        errorMessage: "Please enter your caste",
      },
      {
        id: "motherTongue",
        label: "Mother Tongue",
        type: "text",
        placeholder: "Enter mother tongue",
        required: true,
        errorMessage: "Please enter your mother tongue",
      },
      {
        id: "nationality",
        label: "Nationality",
        type: "select",
        placeholder: "Enter nationality",
        options: nationalityOptions,
        required: true,
        errorMessage: "Please enter your nationality",
      },
    ],
  },
  contactInfo: {
    title: "Contact Information",
    description: "Please fill in the following information",
    icon: "phone",
    formInputs: [
      {
        id: "address",
        label: "Address",
        type: "text",
        placeholder: "Enter address",
        required: true,
        errorMessage: "Please enter your address",
      },
      {
        id: "city",
        label: "City",
        type: "text",
        placeholder: "Enter city",
        required: true,
        errorMessage: "Please enter your city",
      },
      {
        id: "state",
        label: "State",
        type: "text",
        placeholder: "Enter state",
        required: true,
        errorMessage: "Please enter your state",
      },
      {
        id: "pincode",
        label: "Pincode",
        type: "number",
        placeholder: "Enter pincode",
        required: true,
        errorMessage: "Please enter your pincode",
      },
      {
        id: "phone",
        label: "Phone",
        type: "text",
        placeholder: "Enter phone",
        required: true,
        errorMessage: "Please enter your phone",
      },
      {
        id: "email",
        label: "Email",
        type: "text",
        placeholder: "Enter email",
        required: true,
        errorMessage: "Please enter your email",
      },
    ],
  },
  familyInfo: {
    title: "Family Info",
    description: "Please fill in the following information",
    icon: "users",
    formInputs: [
      {
        id: "fatherName",
        label: "Father's Name",
        type: "text",
        placeholder: "Enter father's name",
        required: true,
        errorMessage: "Please enter your father's name",
      },
      {
        id: "fatherOccupation",
        label: "Father's Occupation",
        type: "text",
        placeholder: "Enter father's occupation",
        required: true,
        errorMessage: "Please enter your father's occupation",
      },
      {
        id: "motherName",
        label: "Mother's Name",
        type: "text",
        placeholder: "Enter mother's name",
        required: true,
        errorMessage: "Please enter your mother's name",
      },
      {
        id: "motherOccupation",
        label: "Mother's Occupation",
        type: "text",
        placeholder: "Enter mother's occupation",
        required: true,
        errorMessage: "Please enter your mother's occupation",
      },
      {
        id: "siblings",
        label: "Siblings",
        type: "text",
        placeholder: "Enter siblings",
        required: true,
        errorMessage: "Please enter your siblings",
      },
      {
        id: "familyType",
        label: "Family Type",
        type: "text",
        placeholder: "Enter family type",
        required: true,
        errorMessage: "Please enter your family type",
      },
      {
        id: "familyValues",
        label: "Family Values",
        type: "text",
        placeholder: "Enter family values",
        required: true,
        errorMessage: "Please enter your family values",
      },
    ],
  },
  educationandCareerInfo: {
    title: "Education Info",
    description: "Please fill in the following information",
    icon: "graduation-cap",
    formInputs: [
      {
        id: "education",
        label: "Education",
        type: "text",
        placeholder: "Enter education",
        required: true,
        errorMessage: "Please enter your education",
      },
      {
        id: "college",
        label: "College/University",
        type: "text",
        placeholder: "Enter college/university",
        required: true,
        errorMessage: "Please enter your college/university",
      },
      {
        id: "occupation",
        label: "Occupation",
        type: "text",
        placeholder: "Enter occupation",
        required: true,
        errorMessage: "Please enter your occupation",
      },
      {
        id: "company",
        label: "Company",
        type: "text",
        placeholder: "Enter company",
        required: true,
        errorMessage: "Please enter your company",
      },
      {
        id: "income",
        label: "Annual Income",
        type: "text",
        placeholder: "Enter annual income",
        required: true,
        errorMessage: "Please enter your annual income",
      },
      {
        id: "workLocation",
        label: "Work Location",
        type: "text",
        placeholder: "Enter work location",
        required: true,
        errorMessage: "Please enter your work location",
      },
    ],
  },
  partnerPreferencesInfo: {
    title: "Partner Info",
    description: "Please fill in the following information",
    icon: "heart",
    formInputs: [
      {
        id: "partnerAge",
        label: "Preferred Age",
        type: "text",
        placeholder: "18-25",
        required: true,
        errorMessage: "Please enter your preferred age",
      },
      {
        id: "partnerHeight",
        label: "Preferred Height",
        type: "text",
        placeholder: "5'4 - 5'8",
        required: true,
        errorMessage: "Please enter your preferred height",
      },
      {
        id: "partnerEducation",
        label: "Preferred Education",
        type: "text",
        placeholder: "Graduate or above",
        required: true,
        errorMessage: "Please enter your preferred education",
      },
      {
        id: "partnerOccupation",
        label: "Preferred Occupation",
        type: "text",
        placeholder: "Any",
        required: true,
        errorMessage: "Please enter your preferred occupation",
      },
      {
        id: "partnerLocation",
        label: "Preferred Location",
        type: "text",
        placeholder: "Mumbai, Delhi",
        required: true,
        errorMessage: "Please enter your preferred location",
      },
    ],
  },
  additionalInfo: {
    title: "Additional Info",
    description: "Please fill in the following information",
    icon: "info",
    formInputs: [
      {
        id: "hobbies",
        label: "Hobbies & Interests",
        type: "text",
        placeholder: "Enter hobbies & interests",
        required: true,
        errorMessage: "Please enter your hobbies & interests",
      },
      {
        id: "aboutMe",
        label: "About Me",
        type: "textarea",
        placeholder: "Enter about me",
        required: true,
        errorMessage: "Please enter your about me",
      },
    ],
  },
};

export default BiodataForm;
