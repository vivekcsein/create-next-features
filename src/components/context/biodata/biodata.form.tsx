"use client";
import z from "zod";
import { useEffect } from "react";

import clsx from "clsx";
import { Label } from "@/components/ui/shadcn/label";
import { Input } from "@/components/ui/shadcn/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/shadcn/button";
import Lucid_Icon from "@/components/ui/helper/Lucid_Icon";
import { Textarea } from "@/components/ui/shadcn/textarea";
import InputSelect from "@/components/ui/inputs/InputSelect";
import InputCalender from "@/components/ui/inputs/InputCalender";
import InputPassword from "@/components/ui/inputs/InputPassword";

import {
  Control,
  FieldErrors,
  useForm,
  UseFormRegister,
} from "react-hook-form";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";

import BiodataForm, {
  FormInputType,
  FormListType,
} from "@/libs/forms/form.biodata";

import {
  familyInfoSchema,
  contactInfoSchema,
  personalInfoSchema,
  additionalInfoSchema,
  educationandCareerInfoSchema,
  partnerPreferencesInfoSchema,
} from "@/libs/schema/schema.biodata";

type PersonalInfoInputs = z.infer<typeof personalInfoSchema>;
type ContactInfoInputs = z.infer<typeof contactInfoSchema>;
type FamilyInfoInputs = z.infer<typeof familyInfoSchema>;
type EducationInfoInputs = z.infer<typeof educationandCareerInfoSchema>;
type PartnerInfoInputs = z.infer<typeof partnerPreferencesInfoSchema>;
type AdditionalInfoInputs = z.infer<typeof additionalInfoSchema>;

export type BioDataFormInputs = PersonalInfoInputs &
  ContactInfoInputs &
  FamilyInfoInputs &
  EducationInfoInputs &
  PartnerInfoInputs &
  AdditionalInfoInputs;

interface BiodataFullFormProps {
  setFormIsEmpty: React.Dispatch<React.SetStateAction<boolean>>;
  setFormData: React.Dispatch<React.SetStateAction<BioDataFormInputs | null>>;
  setShowPreview: React.Dispatch<React.SetStateAction<boolean>>;
}
export const BiodataFullForm = ({
  setFormIsEmpty,
  setFormData,
  setShowPreview,
}: BiodataFullFormProps) => {
  const {
    register,
    handleSubmit,
    getValues,
    control,
    formState: { errors, isSubmitting },
  } = useForm<BioDataFormInputs>({
    resolver: zodResolver(
      z.object({
        ...personalInfoSchema.shape,
        ...contactInfoSchema.shape,
        ...educationandCareerInfoSchema.shape,
        ...familyInfoSchema.shape,
        ...partnerPreferencesInfoSchema.shape,
        ...additionalInfoSchema.shape,
      })
    ),
    defaultValues: {
      ...BiodataForm.personalInfo.formInputs.reduce(
        (acc, curr) => {
          acc[curr.id] = "";
          return acc;
        },
        {} as Record<string, string>
      ),
      ...BiodataForm.contactInfo.formInputs.reduce(
        (acc, curr) => {
          acc[curr.id] = "";
          return acc;
        },
        {} as Record<string, string>
      ),
      ...BiodataForm.educationandCareerInfo.formInputs.reduce(
        (acc, curr) => {
          acc[curr.id] = "";
          return acc;
        },
        {} as Record<string, string>
      ),
      ...BiodataForm.familyInfo.formInputs.reduce(
        (acc, curr) => {
          acc[curr.id] = "";
          return acc;
        },
        {} as Record<string, string>
      ),
      ...BiodataForm.partnerPreferencesInfo.formInputs.reduce(
        (acc, curr) => {
          acc[curr.id] = "";
          return acc;
        },
        {} as Record<string, string>
      ),
      ...BiodataForm.additionalInfo.formInputs.reduce(
        (acc, curr) => {
          acc[curr.id] = "";
          return acc;
        },
        {} as Record<string, string>
      ),
    },
    mode: "onChange",
    reValidateMode: "onChange",
    shouldFocusError: false,
    shouldUnregister: false,
  });

  useEffect(() => {
    const checkFormIsEmpty = () => {
      const fullname = getValues("fullname");
      const isEmpty = !fullname || fullname.trim() === "";
      setFormIsEmpty(isEmpty);
    };

    checkFormIsEmpty();
  }, [getValues, setFormIsEmpty]);

  const onSubmit = (data: BioDataFormInputs) => {
    console.log("Form submitted:", data);
    setFormData(data);
    setShowPreview(true);
    // You can route, mutate, or validate further here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 my-6 px-2">
      <div className="center">
        <Button
          type="submit"
          variant={"gradient"}
          disabled={isSubmitting}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition"
        >
          Click to Preview
        </Button>
      </div>
      <FormTemplate
        formList={BiodataForm.personalInfo}
        register={register}
        control={control}
        errors={errors}
        className="mt-6"
      />
      <FormTemplate
        formList={BiodataForm.contactInfo}
        register={register}
        errors={errors}
      />
      <FormTemplate
        formList={BiodataForm.educationandCareerInfo}
        register={register}
        errors={errors}
      />
      <FormTemplate
        formList={BiodataForm.familyInfo}
        register={register}
        errors={errors}
      />
      <FormTemplate
        formList={BiodataForm.partnerPreferencesInfo}
        register={register}
        errors={errors}
      />
      <FormTemplate
        formList={BiodataForm.additionalInfo}
        register={register}
        errors={errors}
      />
    </form>
  );
};

interface FormTemplateProps {
  formList: FormListType;
  register: UseFormRegister<BioDataFormInputs>;
  control?: Control<BioDataFormInputs>;
  errors?: FieldErrors<BioDataFormInputs>;
  className?: string;
}

export const FormTemplate = ({
  formList,
  register,
  control,
  errors,
  className,
}: FormTemplateProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lucid_Icon className="h-5 w-5" iconName={formList.icon} />
          {formList.title}
        </CardTitle>
      </CardHeader>
      <CardContent className={clsx("space-y-4", className)}>
        {formList.formInputs.map((input) => (
          <div key={input.id} className="flex flex-col gap-2">
            <UniversalInputField
              input={input}
              register={register}
              control={control}
            />
            {errors &&
              errors[input.id as keyof typeof errors] &&
              typeof errors[input.id as keyof typeof errors]?.message ===
                "string" && (
                <p
                  id={`${input.id}-error`}
                  className="text-xs text-destructive py-1"
                >
                  {errors[input.id as keyof typeof errors]?.message as string}
                </p>
              )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

interface UniversalFieldProps {
  input: FormInputType;
  register: UseFormRegister<BioDataFormInputs>;
  control?: Control<BioDataFormInputs>;
}

export const UniversalInputField = ({
  input,
  register,
  control,
}: UniversalFieldProps) => {
  const type = input.type;
  const selectValue = input.options;
  const commonProps = {
    id: input.id,
    placeholder: input.placeholder,
    autoComplete: input.id,
    ...register(input.id as keyof BioDataFormInputs),
  };

  const renderInput = () => {
    switch (type) {
      case "textarea":
        return <Textarea {...commonProps} />;

      case "date":
        return control ? (
          <InputCalender<BioDataFormInputs>
            name={input.id as keyof BioDataFormInputs}
            control={control}
          />
        ) : (
          <div>Date Picker - control props not found</div>
        );

      case "select":
        return control ? (
          selectValue && (
            <InputSelect<BioDataFormInputs>
              name={input.id as keyof BioDataFormInputs}
              control={control}
              options={selectValue}
            />
          )
        ) : (
          <div>Select Picker - control props not found</div>
        );

      case "number":
        return <Input type="number" {...commonProps} />;

      case "decimal":
        return <Input type="number" step={0.1} {...commonProps} />;

      case "tel":
        return <Input type="tel" {...commonProps} />;

      case "password":
        return <InputPassword type="password" {...commonProps} />;

      default:
        return <Input type={type} {...commonProps} />;
    }
  };

  return (
    <>
      <Label htmlFor={input.id}>{input.label}</Label>
      {renderInput()}
    </>
  );
};
