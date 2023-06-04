import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import FormDiv from '../organisms/FormDiv';

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
    <FormDiv>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label>Card Number</Label>
        <Input type="text" {...register('cardNumber', { required: 'Card number is required',maxLength:16,minLength:16})} />
        {errors.cardNumber && <span>{errors.cardNumber.message}</span>}
      </div>
      <div>
        <Label>Expiry Date</Label>
        <Input type="text" {...register('expiryDate', { required: 'Expiry date is required', pattern: {
        value: /^(0?[1-9]{1}|1[0-2]{1})\/([0-9]{2})$/,
        message: "invalid format"
      }})} />
        {errors.expiryDate && <span>{errors.expiryDate.message}</span>}
      </div>
      <div>
        <Label>CVV</Label>
        <Input type="text"{...register('cvv', { required: 'CVV is required',maxLength:3})} />
        {errors.cvv && <span>{errors.cvv.message}</span>}
      </div>
      <Button type="submit">Submit Payment</Button>
    </form>
    </FormDiv>
  );
};

export default PaymentForm;
