import {useFormik} from "formik";
import * as yup from 'yup';
const formValidationSchema=yup.object({
  email:yup.string().min(10,"Need a longer email😉").required(),
  password:yup.string().min(10,"your password is weak🤦‍♂️").max(12).required(),
})
export function BasicForm() {
  const formik=useFormik({
    initialValues:{
      email:"",
      password:""
    },
    validationSchema:formValidationSchema,
    onSubmit:(values)=>{
      console.log("Form values",values);
    }
  });
  return <>
     <form onSubmit={formik.handleSubmit}>
      <input 
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="email"
          placeholder="userName"> 
      </input>{formik.touched.email && formik.errors.email ? formik.errors.email: null}
      <input
        name="password" 
         value={formik.values.password}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur} 
         type="password" 
         placeholder="PassWord"></input>{formik.touched.password && formik.errors.password ? formik.errors.password :null }
      <button>Submit</button>
      {/* Error
        <pre>{JSON.stringify(formik.errors)}</pre>
      Touched
      <pre>{JSON.stringify(formik.touched)}</pre> */}
     </form>
  </>
}
