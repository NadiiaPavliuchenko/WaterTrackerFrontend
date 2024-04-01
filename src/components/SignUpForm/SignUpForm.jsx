import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import { FormRegisterStyles } from './SignUpForm.styled'

const SignUpForm = ({ submitFunc }) => {
  
  const registerSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(64).required(),
    repeatPassword: yup.string()
     .oneOf([yup.ref('password'), null], 'Passwords must match') 
  })
  const initialValues = { 
    email: '',
    password: '',
    repeatPassword: ''
  } 

  function handleSubmit(values, actions) {   
    submitFunc({email:values.email, password: values.password})       
    actions.resetForm()
  }  

  function watchPassFunc(evt) {   
    const evtTarget = evt.target.closest(".watchPasswordIcon").previousSibling
    if (evtTarget.type === "password") {
     evtTarget.type = "text"      
      return
    }
    if (evtTarget.type === "text") {
      evtTarget.type = "password"     
      return
     }
  }

  return <>
    <FormRegisterStyles>
    <Formik initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}>
      <Form className='form' autoComplete="off">

        <label className="label" htmlFor="email">
            Enter your email<br />
            <div className="input-container">
            <Field className="input" type="text" name="email" placeholder="Email" />
            </div>
          <ErrorMessage className="error" name="email" component='div'/>
        </label>
        <br />
        
        <label className="label" htmlFor="password">
          Enter your password
           <div className="input-container">
          <Field className="input" type="password" name="password" placeholder="Password"/>
          <svg className="watchPasswordIcon" onClick={watchPassFunc} width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.65334 4.482C2.02964 5.21812 1.56521 6.07547 1.28934 7C2.15067 9.892 4.82934 12 8 12C8.662 12 9.302 11.908 9.90867 11.7367M4.152 3.152C5.29375 2.39854 6.63205 1.99788 8 2C11.1707 2 13.8487 4.108 14.71 6.99867C14.2379 8.5782 13.2247 9.94102 11.848 10.848M4.152 3.152L2 1M4.152 3.152L6.58534 5.58533M11.848 10.848L14 13M11.848 10.848L9.41467 8.41467C9.6004 8.22893 9.74773 8.00844 9.84825 7.76577C9.94877 7.52309 10.0005 7.263 10.0005 7.00033C10.0005 6.73767 9.94877 6.47757 9.84825 6.2349C9.74773 5.99223 9.6004 5.77173 9.41467 5.586C9.22894 5.40027 9.00844 5.25294 8.76577 5.15242C8.5231 5.0519 8.263 5.00016 8.00034 5.00016C7.73767 5.00016 7.47758 5.0519 7.2349 5.15242C6.99223 5.25294 6.77174 5.40027 6.586 5.586M9.414 8.414L6.58667 5.58667" stroke="#407BFF" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </div>          
          <ErrorMessage className="error" name="password" component='div'/>
        </label>
        <br />
        
        <label className="label" htmlFor="repeatPassword">
          Repeat password
          <div className="input-container">
          <Field className="input" type="password" name="repeatPassword" placeholder="Repeat password"/>
            <svg className="watchPasswordIcon" onClick={watchPassFunc} width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.65334 4.482C2.02964 5.21812 1.56521 6.07547 1.28934 7C2.15067 9.892 4.82934 12 8 12C8.662 12 9.302 11.908 9.90867 11.7367M4.152 3.152C5.29375 2.39854 6.63205 1.99788 8 2C11.1707 2 13.8487 4.108 14.71 6.99867C14.2379 8.5782 13.2247 9.94102 11.848 10.848M4.152 3.152L2 1M4.152 3.152L6.58534 5.58533M11.848 10.848L14 13M11.848 10.848L9.41467 8.41467C9.6004 8.22893 9.74773 8.00844 9.84825 7.76577C9.94877 7.52309 10.0005 7.263 10.0005 7.00033C10.0005 6.73767 9.94877 6.47757 9.84825 6.2349C9.74773 5.99223 9.6004 5.77173 9.41467 5.586C9.22894 5.40027 9.00844 5.25294 8.76577 5.15242C8.5231 5.0519 8.263 5.00016 8.00034 5.00016C7.73767 5.00016 7.47758 5.0519 7.2349 5.15242C6.99223 5.25294 6.77174 5.40027 6.586 5.586M9.414 8.414L6.58667 5.58667" stroke="#407BFF" strokeLinecap="round" strokeLinejoin="round" />
            </svg> 
            </div>
            
          <ErrorMessage className="error" name="repeatPassword" component='div' />          
        </label>
        <br />
        
        <button className="buttonSignUp" type="submit">Sign Up</button>

      </Form>

      </Formik>  
    </FormRegisterStyles>  
    </>  
};

export default SignUpForm;
