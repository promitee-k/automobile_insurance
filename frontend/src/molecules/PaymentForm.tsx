import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

type PaymentFormData = {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
};

const PaymentForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<PaymentFormData>();

  const onSubmit: SubmitHandler<PaymentFormData> = (data) => {
    console.log(data); // You can perform your payment processing logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label>Card Number</Label>
        <Input type="text" {...register('cardNumber', { required: 'Card number is required' })} />
        {errors.cardNumber && <span>{errors.cardNumber.message}</span>}
      </div>
      <div>
        <Label>Expiry Date</Label>
        <Input type="text" {...register('expiryDate', { required: 'Expiry date is required' })} />
        {errors.expiryDate && <span>{errors.expiryDate.message}</span>}
      </div>
      <div>
        <Label>CVV</Label>
        <Input type="text" {...register('cvv', { required: 'CVV is required' })} />
        {errors.cvv && <span>{errors.cvv.message}</span>}
      </div>
      <button type="submit">Submit Payment</button>
    </form>
  );
};

export default PaymentForm;
