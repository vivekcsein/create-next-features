"use client";
import React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Controller, Control } from "react-hook-form";

import { Button } from "@/components/ui/shadcn/button";
import { Calendar } from "@/components/ui/shadcn/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/shadcn/popover";
import { BioDataFormInputs } from "@/components/context/biodata/biodata.form";

interface CalendarPickerProps {
  name: string;
  className?: string;
  control: Control<BioDataFormInputs>; // You can replace `any` with a specific form type
}

export const DataPicker = ({
  name,
  control,
  className = "",
}: CalendarPickerProps) => {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <Controller
        name={name as keyof BioDataFormInputs}
        control={control}
        render={({ field }) => {
          const date = field.value as Date;
          const setDate = (selected: Date | undefined) =>
            field.onChange(selected);

          return (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id={name}
                  className="w-48 justify-between font-normal"
                >
                  {date ? date.toLocaleDateString() : "Select date"}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  onSelect={setDate}
                />
              </PopoverContent>
            </Popover>
          );
        }}
      />
    </div>
  );
};
