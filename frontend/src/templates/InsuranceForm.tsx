import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import FormDiv from '../organisms/FormDiv';

type CarInsuranceFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  carMake: string;
  carModel: string;
  carYear: number;
};

const CarInsuranceForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CarInsuranceFormData>();

  const onSubmit: SubmitHandler<CarInsuranceFormData> = (data) => {
    console.log(data); // You can perform your form submission logic here
  };

  return (

    <FormDiv>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label>First Name</Label>
        <Input type="text" {...register('firstName', { required: 'First name is required' })} />
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </div>
      <div>
        <Label>Last Name</Label>
        <Input type="text" {...register('lastName', { required: 'Last name is required' })} />
        {errors.lastName && <span>{errors.lastName.message}</span>}
      </div>
      <div>
        <Label>Email</Label>
        <Input type="email" {...register('email', { required: 'Email is required' })} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <Label>Phone</Label>
        <Input type="text" {...register('phone', { required: 'Phone number is required' })} />
        {errors.phone && <span>{errors.phone.message}</span>}
      </div>
      <div>
        <Label>Car Make</Label>
        <Input type="text" {...register('carMake', { required: 'Car make is required' })} />
        {errors.carMake && <span>{errors.carMake.message}</span>}
      </div>
      <div>
        <Label>Car Model</Label>
        <Input type="text" {...register('carModel', { required: 'Car model is required' })} />
        {errors.carModel && <span>{errors.carModel.message}</span>}
      </div>
      <div>
        <Label>Car Year</Label>
        <Input type="number" {...register('carYear', { required: 'Car year is required' })} />
        {errors.carYear && <span>{errors.carYear.message}</span>}
      </div>
      <Button type="submit">Submit</Button>
    </form>
    </FormDiv>
  );
};

export default CarInsuranceForm;
