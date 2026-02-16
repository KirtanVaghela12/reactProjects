import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Container } from "./Container";
import {
  Controller,
  useFieldArray,
  useForm,
  useWatch,
  type FieldErrors,
  type SubmitHandler,
} from "react-hook-form";
import { type FormSchema, formSchema, formDefaultValues } from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddCircleRounded, DeleteForeverRounded } from "@mui/icons-material";
import { useEffect } from "react";
function App() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues,
  });

  const { fields, replace, append, remove } = useFieldArray({
    control,
    name: "languages",
  });

  const hasWorkExperience = useWatch({ control, name: "hasWorkExperience" });
  const knowsOtherLanguages = useWatch({
    control,
    name: "knowsOtherLanguages",
  });
  const educationLevel = useWatch({control , name:"educationLevel"})

  useEffect(() => {
    if (knowsOtherLanguages) {
      replace([{ name: "" }]);
    }
  }, [knowsOtherLanguages, replace]);

  const fullErrors: FieldErrors<
    Extract<FormSchema, { hasWorkExperience: true }>> &
      FieldErrors<Extract<FormSchema, { knowsOtherLanguages: true }>>&
        FieldErrors<Extract<FormSchema, { educationLevel:"noFormalEducation" }>>&
          FieldErrors<Extract<FormSchema, { educationLevel:"highSchoolDiploma"}>>&
            FieldErrors<Extract<FormSchema, { educationLevel:"bachelorsDegree"}>>
  = errors;

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <Container>
      {/* Person Name */}
      <TextField
        {...register("fullName")}
        label="Full Name"
        helperText={fullErrors.fullName?.message}
        error={!!fullErrors.fullName}
      />

      {/* Has Work Experience */}

      <FormControlLabel
        {...register("hasWorkExperience")}
        label="Word Experience?"
        control={<Checkbox />}
      />
      {hasWorkExperience && (
        <TextField
          {...register("companyName")}
          label="Company Name"
          helperText={fullErrors.companyName?.message}
          error={!!fullErrors.companyName}
        />
      )}

      {/* Knows Other languages */}

      <FormControlLabel
        {...register("knowsOtherLanguages")}
        label="Knows Other Languages?"
        control={<Checkbox />}
      />
      {knowsOtherLanguages && (
        <>
          {fields.map((field, index) => (
            <div key={field.id}>
              <TextField
                sx={{ width: "100%" }}
                {...register(`languages.${index}.name`)}
                label="Language Name"
                helperText={fullErrors.languages?.[index]?.name?.message}
                error={!!fullErrors.languages?.[index]?.name}
              />
              <IconButton
                disabled={fields.length === 1}
                onClick={() => remove(index)}
                color="error"
              >
                <DeleteForeverRounded />
              </IconButton>
            </div>
          ))}
          <IconButton
            sx={{ width: "fit-content" }}
            onClick={() => append({ name: "" })}
            color="success"
          >
            <AddCircleRounded />
          </IconButton>
        </>
      )}

      {/* Education level */}
      <FormControl>
        <FormLabel>Education level</FormLabel>
        <Controller
          control={control}
          name="educationLevel"
          render={({ field }) => (
            <RadioGroup {...field}>
              <FormControlLabel
                value="noFormalEducation"
                control={<Radio />}
                label=" No Formal Education"
              />
              <FormControlLabel
                value="highSchoolDiploma"
                control={<Radio />}
                label=" High School Diploma"
              />
              <FormControlLabel
                value="bachelorsDegree"
                control={<Radio />}
                label=" Bachelors Degree"
              />
            </RadioGroup>
          )}
        ></Controller>
      </FormControl>
          {educationLevel === "highSchoolDiploma" && (
            <TextField 
              {...register("schoolName")}
              label="School Name"
              helperText={fullErrors.schoolName?.message}
              error={!!fullErrors.schoolName?.message} 
              />
            )}
          {educationLevel === "bachelorsDegree" && (
            <TextField 
              {...register("universityName")}
              label="University Name"
              helperText={fullErrors.universityName?.message}
              error={!!fullErrors.universityName?.message} 
              />
            )}

        {/* Submit button */}

        <Button variant="contained" onClick={handleSubmit(onSubmit)}>
          Submit
        </Button>
    </Container>
  );
}

export { App };
