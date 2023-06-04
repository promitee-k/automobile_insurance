import { useForm } from 'react-hook-form';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import FormDiv from '../organisms/FormDiv';

const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormData>();

  type SignUpFormData = {
    email: string;
    password: string;
  };
  const onSubmit = (data:SignUpFormData) => {
    console.log(data); // You can perform your sign-in logic here
  };

  return (
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
      <Button type="submit">Sign Up</Button>
    </form>
    </FormDiv>
  );
};

export default SignUpForm;
