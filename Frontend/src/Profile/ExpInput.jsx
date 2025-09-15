import React, { useEffect, useState } from "react";
import SelectInput from "./SelectInput";
import fields from "../Data/ProfileData";
import { Button, Checkbox, Textarea } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import { useDispatch, useSelector } from "react-redux";
import { isNotEmpty, useForm } from "@mantine/form";
import { successNotification } from "../Services/NotificationService";
import { changeProfile } from "../Slices/ProfileSlice";

const ExpInput = (props) => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const parseDate = (date) => {
    return date && !isNaN(new Date(date).getTime()) ? new Date(date) : null;
  };

  const form = useForm({
    initialValues: {
      title: "",
      company: "",
      location: "",
      description: "",
      startDate: new Date(),
      endDate: new Date(),
      working: false,
    },
    validate: {
      title: isNotEmpty("Title is required"),
      company: isNotEmpty("Company is required"),
      location: isNotEmpty("Location is required"),
      description: isNotEmpty("Description is required"),
    },
  });

  useEffect(() => {
    if (!props.add) {
      form.setValues({
        title: props.title || "",
        company: props.company || "",
        location: props.location || "",
        description: props.description || "",
        startDate: parseDate(props.startDate) || new Date(),
        endDate: parseDate(props.endDate) || new Date(),
        working: !!props.working,
      });
    }
  }, [props]); // Dependency added to ensure correct updates

  const handleSave = () => {
    const validation = form.validate();
    if (validation.hasErrors) return;

    let exp = [...profile.experiences];

    if (props.add) {
      const newExp = form.getValues();
      newExp.startDate = newExp.startDate.toISOString();
      newExp.endDate = newExp.endDate ? newExp.endDate.toISOString() : null;
      exp.push(newExp);
    } else {
      const updatedExp = form.getValues();
      updatedExp.startDate = updatedExp.startDate.toISOString();
      updatedExp.endDate = updatedExp.endDate ? updatedExp.endDate.toISOString() : null;
      exp[props.index] = updatedExp;
    }

    let updatedProfile = { ...profile, experiences: exp };
    props.setEdit(false);
    dispatch(changeProfile(updatedProfile));
    successNotification("Success", `Experience ${props.add ? "Added" : "Updated"} Successfully`);
  };

  return (
    <div className="flex flex-col gap-3 ">
      <div className="text-lg font-semibold">{props.add ? "Add" : "Edit"} Experience</div>
      <div className="flex gap-10 my-3 [&>*]:w-1/2  xs-mx:[&>*]:w-full  xs-mx:flex-wrap  md-mx:gap-5">
        <SelectInput form={form} name="title" {...fields[0]} />
        <SelectInput form={form} name="company" {...fields[1]} />
      </div>
      <SelectInput form={form} name="location" {...fields[2]} />
      <Textarea
        {...form.getInputProps("description")}
        withAsterisk
        label="Summary"
        autosize
        minRows={3}
        placeholder="Enter Summary"
      />

      <div className="flex gap-10 [&>*]:w-1/2 my-3 xs-mx:[&>*]:w-full  xs-mx:flex-wrap  md-mx:gap-5 ">
        <MonthPickerInput
          {...form.getInputProps("startDate")}
          withAsterisk
          maxDate={form.values.endDate || undefined}
          label="Start date"
          placeholder="Pick date"
          value={form.values.startDate}
          onChange={(date) => form.setFieldValue("startDate", date)}
        />
        <MonthPickerInput
          {...form.getInputProps("endDate")}
          withAsterisk
          disabled={form.values.working}
          maxDate={new Date()}
          minDate={form.values.startDate || undefined}
          label="End date"
          placeholder="Pick date"
          value={form.values.endDate}
          onChange={(date) => form.setFieldValue("endDate", date)}
        />
      </div>

      <Checkbox
        {...form.getInputProps("working")}
        autoContrast
        label="Currently working here"
        checked={form.values.working}
        onChange={(e) => form.setFieldValue("working", e.currentTarget.checked)}
      />

      <div className="flex gap-5">
        <Button onClick={handleSave} color="green.8" variant="light">
          Save
        </Button>
        <Button onClick={() => props.setEdit(false)} color="red.8" variant="light">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ExpInput;
