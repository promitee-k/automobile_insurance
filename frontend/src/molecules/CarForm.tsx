import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

type CarFormData = {
  brand: string;
  model: string;
  year: string;
  area: string;
  accidentHistory: boolean;
};

const CarForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CarFormData>();

  const onSubmit: SubmitHandler<CarFormData> = (data) => {
    console.log(data); // You can perform your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label>Brand</Label>
        <Input type="text" {...register('brand', { required: 'Brand is required' })} />
        {errors.brand && <span>{errors.brand.message}</span>}
      </div>
      <div>
        <Label>Model</Label>
        <Input type="text" {...register('model', { required: 'Model is required' })} />
        {errors.model && <span>{errors.model.message}</span>}
      </div>
      <div>
        <Label>Year</Label>
        <Input type="text" {...register('year', { required: 'Year is required' })} />
        {errors.year && <span>{errors.year.message}</span>}
      </div>
      <div>
        <Label>Area</Label>
        <Input type="text" {...register('area', { required: 'Area is required' })} />
        {errors.area && <span>{errors.area.message}</span>}
      </div>
      <button type="submit">Get Quote</button>
    </form>
  );
};

export default CarForm;

