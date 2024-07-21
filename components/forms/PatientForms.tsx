
"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form"
import CustomFormFields from "../CustomFormFields"
import SubmitButton from "../ui/SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"

export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT= 'select',
  SKELETON='skeleton',
}
 

const PatientForms =()=> {

  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone:"",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit({name, email, phone}: z.infer<typeof UserFormValidation>) {
    setIsLoading(true)
    try{
      // const userData = {name, email,phone };

      // const user = await createServer(userData);

      // if (user) router.push(`/patients/${user.$id}/register`)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header"> Hi There 👋</h1>
          <p className="text-dark-700">Schedule your first appointment.</p>
        </section>
<CustomFormFields
fieldType={FormFieldType.INPUT}
 control={form.control}
 name='name'
 label='full name'
 placeholder='John Doe'
 iconSrc='/assets/icons/user.svg'
 iconAlt = "user"
 />

<CustomFormFields
fieldType={FormFieldType.INPUT}
 control={form.control}
 name='email'
 label='Email'
 placeholder='johndoe@gmail.com'
 iconSrc='/assets/icons/email.svg'
 iconAlt = "email"
 />

<CustomFormFields
fieldType={FormFieldType.PHONE_INPUT}
 control={form.control}
 name='phone'
 label='Phone Number'
 placeholder='0813 456 7890'
 />
<SubmitButton isLoading={isLoading} >
  Get Started
</SubmitButton>
    </form>
  </Form>
  )
}

export default PatientForms
