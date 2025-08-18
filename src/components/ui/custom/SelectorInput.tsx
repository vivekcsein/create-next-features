import * as React from "react";
import { Controller, Control } from "react-hook-form";
import { BioDataFormInputs } from "@/components/context/biodata/biodata.form";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/shadcn/select";

interface SelectorInputProps {
  name: string;
  options: { label: string; value: string }[];
  placeholder?: string;
  control: Control<BioDataFormInputs>; // You can replace `any` with a specific form type
}

const SelectorInput: React.FC<SelectorInputProps> = ({
  name,
  options,
  placeholder,
  control,
}) => {
  return (
    <Controller
      name={name as keyof BioDataFormInputs}
      control={control}
      render={({ field }) => (
        <Select value={field.value} onValueChange={field.onChange}>
          <SelectTrigger className="min-w-[200px]lg:w-fit">
            <SelectValue placeholder={placeholder || "Select an option"} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="focus:text-white"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  );
};

export default SelectorInput;
