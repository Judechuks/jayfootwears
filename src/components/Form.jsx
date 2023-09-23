import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

/*
Install react-hook-form and yup to use them,
go to the terminal in the project's directory
and type:
npm install react-hook-form yup
To use resolver, you need to install it,
go to the terminal in the project's directory and type:
npm install @hookform/resolvers
*/ 
function Form() {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is Required!"),
    email: yup.string().email("Must include @domain.com").required("Your Email is Required!"),
    age: yup.number().typeError('Age must be a number').positive("No Negative Number").integer().min(15, "Sorry, You are under age. 15+").required(),
    password: yup.string().min(4, "Password must be at least 4 characters").max(20).required("Your Password is Required!"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords Don't Match").required("Retype Password Again!")
  })
  const {register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
      <input type='text' placeholder='Full Name' {...register("fullName")} />
      <p className="error">{errors.fullName?.message}</p>
      <input type='text' placeholder='Email' {...register("email")} />
      <p className="error">{errors.email?.message}</p>
      <input type='number' placeholder='Age' {...register("age")} />
      <p className="error">{errors.age?.message}</p>
      <input type='password' placeholder='Password' {...register("password")} />
      <p className="error">{errors.password?.message}</p>
      <input type='password' placeholder='Confirm Password' {...register("confirmPassword")} />
      <p className="error">{errors.confirmPassword?.message}</p>
      <input type='submit' className='btn' />
    </form>
  )
}
 
export default Form 