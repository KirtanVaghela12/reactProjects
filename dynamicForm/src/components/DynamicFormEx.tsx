import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";
// const dummyPeople = [
//   { name: "Kirtan Vaghela", age: "21", email: "kirtan@example.com" },
//   { name: "Savan Vaghela", age: "21", email: "savan@example.com" },
// ];

const personSchema = z.object({
  name : z 
    .string()
    .min(1,"Name is required")
    .min(2,"Name must be at least 2 characters"),
  age : z 
    .number()
    .min(1,"Age must be at least 1")
    .max(120,"Still alive?"),
  email : z 
    .string()
    .min(1,"Email is required")
    .email("Invalid email Format"),
});

const FormSchema = z.object({
  projectName: z
    .string()
    .min(1,"Project name is required")
    .min(3,"Project name must be at least 3 characters"),
    people: z.array(personSchema).min(1,"At least 1 person required"),
});

type FormData = z.infer<typeof FormSchema>;

const defaultValues:FormData = {
  projectName: "",
  people: [{ name: "", age: 0, email: "" }],
};

export default function DynamicFormEx() {
  const form = useForm({
    defaultValues,
    validators:{
      onChange: FormSchema,
    },
    onSubmit: async ({value})=>{
      await new Promise((resolve)=> setTimeout(resolve,1000));
      console.log("Form Submitted :",value);
      alert(
        `Form Submitted Successfully!\n\n${JSON.stringify(value,null,2)}`
      )
    },
  });

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Dynamic team Form</h1>
        <p className="text-muted-foreground">
          Create a project and add team memebers dynamically
        </p>
      </div>

      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        {/* Project name field */}
        <form.Field name="projectName">
          {({ state, handleChange }: { state: any; handleChange: any }) => (
            <div className="space-y-2">
              <Label htmlFor="projectName">Project Name</Label>
              <Input
                id="projectName"
                type="text"
                placeholder="Enter project name"
                value={state.value}
                onChange={(e) => handleChange(e.target.value)}
              />
              {state.meta.errors.length > 0 && state.meta.isTouched &&(
                <p className="text-sm text-red-500">
                  {state.meta.errors[0]?.message}
                </p>
              )}
            </div>
          )}
        </form.Field>

        {/* Team Members*/}
        <form.Field name="people" mode="array">
          {(field) => (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Team Members</h2>
                <Button
                  type="button"
                  className="bg-black text-white"
                  onClick={() =>
                    field.pushValue({ name: "", age: 0, email: "" })
                  }
                >
                  Add Person
                </Button>
              </div>

              <div className="space-y-4">
                {field.state.value.map((person, i) => (
                  <Card key={i}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Person{i + 1}</CardTitle>
                        {field.state.value.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => field.removeValue(i)}
                          >
                            Remove
                          </Button>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:gridcols-3 gap-4">
                        {/* Name Field */}

                        <form.Field key={i} name={`people[${i}].name`}>
                          {(subField) => (
                            <div className="space-y-2">
                              <Label htmlFor={`name-${i}`}>Name</Label>
                              <Input
                                id={`name-${i}`}
                                type="text"
                                value={subField.state.value}
                                onChange={(e) =>
                                  subField.handleChange(e.target.value)
                                }
                                defaultValue={person.name}
                                placeholder="Enter Name"
                              />
                              {subField.state.meta.errors.length > 0 && subField.state.meta.isTouched &&(
                              <p className="text-sm text-red-500">
                                {subField.state.meta.errors[0]?.message}
                              </p>
                              )}
                            </div>
                          )}
                        </form.Field>

                        {/* age field */}

                        <form.Field name={`people[${i}].age`}>
                          {(subField) => (
                            <div className="space-y-2">
                              <Label htmlFor={`age-${i}`}>Age</Label>
                              <Input
                                id={`age-${i}`}
                                type="number"
                                value={subField.state.value || ""}
                                onChange={(e) =>
                                  subField.handleChange(
                                    parseInt(e.target.value) || 0,
                                  )
                                }
                                defaultValue={person.age}
                                placeholder="Enter Age"
                                min="1"
                                max="120"
                              />
                              {subField.state.meta.errors.length > 0 && subField.state.meta.isTouched &&(
                              <p className="text-sm text-red-500">
                                {subField.state.meta.errors[0]?.message}
                              </p>
                              )}
                            </div>
                          )}
                        </form.Field>

                        {/* Email field */}

                        <form.Field name={`people[${i}].email`}>
                          {(subField) => (
                            <div className="space-y-2">
                              <Label htmlFor={`email-${i}`}>Email</Label>
                              <Input
                                id={`email-${i}`}
                                type="email"
                                value={subField.state.value}
                                onChange={(e) =>
                                  subField.handleChange(e.target.value)
                                }
                                defaultValue={person.email}
                                placeholder="Enter Email"
                              />
                              {subField.state.meta.errors.length > 0 && subField.state.meta.isTouched &&(
                              <p className="text-sm text-red-500">
                                {subField.state.meta.errors[0]?.message}
                              </p>
                              )}
                            </div>
                          )}
                        </form.Field>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </form.Field>

        {/*Submit*/}

        <div className="flex justify-end">
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <Button type="submit" className="bg-black text-white" disabled={!canSubmit}>
                {isSubmitting ? "..." : "Submit Form"}
              </Button>
            )}
          />
        </div>

        {/* Output value */}

        <form.Subscribe selector={(state) => [state.values]}>
          {(values) => (
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Current Form Values:</h3>
              <pre className="text-sm text-gray-600">
                {JSON.stringify(values, null, 2)}
              </pre>
            </div>
          )}
        </form.Subscribe>
      </form>
    </div>
  );
}
