import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import SearchableDropdown from '../organisms/SearchableDropDown';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';
import FormDiv from '../organisms/FormDiv';
export type CarFormData = {
  brand: string;
  model: string;
  year: string;
  area: string;
  accidentHistory: boolean;
};
export type automobile ={
  id:string,
  brand: string,
  models: string[]
}

interface CarFormProps {
  carData:automobile[];
}

const area =['Tokyo','Osaka','Nagano']
const CarForm = ({carData}:CarFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<CarFormData>();
  const [selectedBrand,setSelctedBrand] = useState('Select a brand..');
  const [selectedModel,setSelectedModel] = useState('Select a model')
  const [selectedArea,setSelectedArea] = useState('Select area')
  const [history,setHistory]= useState(false)
  const brands = carData?.map((e)=>e.brand) ??[] //returns undefined
  const models = carData?.find((e)=> e.brand === selectedBrand)?.models ?? []
 console.log(models)
 console.log(brands)

  const onSubmit: SubmitHandler<CarFormData> = (data) => {
    console.log(data)
    console.log(selectedBrand,selectedModel,selectedArea,history)
    navigate('/packages')
  };
  
  const navigate = useNavigate()
  return (
    <FormDiv>
    <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label>Brand</Label>
        <SearchableDropdown options={brands} selectedVal={selectedBrand} handleChange={(val)=>{
          setSelctedBrand(val ?? '')
}} />
        {errors.brand && <span>{errors.brand.message}</span>}
      </div>
      <div>
        <Label>Model</Label>
        <SearchableDropdown options={models} selectedVal={selectedModel} handleChange={(val)=>{setSelectedModel(val ?? '')}}/>
        {errors.brand && <span>{errors.brand.message}</span>}
      </div>
      <div>
        <Label>Year</Label>
        <Input type="text" {...register('year', { required: 'Year is required' })} />
        {errors.year && <span>{errors.year.message}</span>}
      </div>
      <div>
        <Label>Area</Label>
        <SearchableDropdown options={area} selectedVal={selectedArea} handleChange={(val)=>{setSelectedArea(val!)}}/>
        {errors.brand && <span>{errors.brand.message}</span>}
      </div>
      <div>
        <Label>Have you ever been in an accident</Label>
       <Input type="checkbox" onChange={()=>{setHistory(!history)}}></Input>
      </div>
      <Button type="submit">Get Quote</Button>
    </form>
    </FormDiv>
  );
};

export default CarForm;

