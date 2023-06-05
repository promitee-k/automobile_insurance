import { useForm } from 'react-hook-form';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import FormDiv from '../organisms/FormDiv';
import SignUpForm from './SignUpForm';
// import SignUpForm from './SignUpForm';

const SignInForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>();

  type SignInFormData = {
    email: string;
    password: string;
  };
  const onSubmit = (data:SignInFormData) => {
    console.log(data); // You can perform your sign-in logic here
    
  };

  return (
 <>
    <FormDiv>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label>Email</Label>
        <Input type="email" {...register('email', { required: 'Email is required' })} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <Label>Password</Label>
        <Input type="password" {...register('password', { required: 'Password is required' })} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <Button type="submit">Sign In</Button>
    </form>
    </FormDiv>
      <FormDiv>
     <SignUpForm/>
      </FormDiv>
 
      </>
  );
};

export default SignInForm;
