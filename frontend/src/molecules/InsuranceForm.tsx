import { useForm, SubmitHandler } from 'react-hook-form';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input type="text" {...register('firstName', { required: 'First name is required' })} />
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" {...register('lastName', { required: 'Last name is required' })} />
        {errors.lastName && <span>{errors.lastName.message}</span>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" {...register('email', { required: 'Email is required' })} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label>Phone</label>
        <input type="text" {...register('phone', { required: 'Phone number is required' })} />
        {errors.phone && <span>{errors.phone.message}</span>}
      </div>
      <div>
        <label>Car Make</label>
        <input type="text" {...register('carMake', { required: 'Car make is required' })} />
        {errors.carMake && <span>{errors.carMake.message}</span>}
      </div>
      <div>
        <label>Car Model</label>
        <input type="text" {...register('carModel', { required: 'Car model is required' })} />
        {errors.carModel && <span>{errors.carModel.message}</span>}
      </div>
      <div>
        <label>Car Year</label>
        <input type="number" {...register('carYear', { required: 'Car year is required' })} />
        {errors.carYear && <span>{errors.carYear.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CarInsuranceForm;
