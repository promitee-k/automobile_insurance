import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import SearchableDropdown from '../organisms/SearchableDropDown';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';
import FormDiv from '../atoms/FormDiv';
export type QuoteFromData = {
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

interface QuoteFromProps {
  carData:automobile[];
}

const area =['Tokyo','Nagano']
const QuoteFrom = ({carData}:QuoteFromProps) => {
  const {  handleSubmit, formState: { errors } } = useForm<QuoteFromData>();
  const [selectedBrand,setSelctedBrand] = useState('Search brand');
  const [selectedModel,setSelectedModel] = useState('Search model')
  const [selectedYear,setSelectedYear] = useState('Year')
  const [selectedArea,setSelectedArea] = useState('Select area')
  const [history,setHistory]= useState(false)
  const brands = carData?.map((e)=>e.brand) ??[] 
  const models = carData?.find((e)=> e.brand === selectedBrand)?.models ?? []


  const onSubmit: SubmitHandler<QuoteFromData> = () => {

    navigate('/packages',{
      state:{
        carData:{
           brand: selectedBrand,
           model: selectedModel,
           year:selectedYear,
           accidentHistory: history,
           area:selectedArea
        }
      }
    })
  };
  
  const navigate = useNavigate()
  return (
    <FormDiv>
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <Input type="text" value={selectedYear} onChange ={(e)=>{setSelectedYear(e.target.value)}} />
        {errors.year && <span>{errors.year.message}</span>}
      </div>
      <div>
        <Label>Area</Label>
        <SearchableDropdown options={area} selectedVal={selectedArea} handleChange={(val)=>{setSelectedArea(val!)}}/>
        {errors.brand && <span>{errors.brand.message}</span>}
      </div>
      <div>
        <Label>Have you ever been in an accident</Label>
        <input type="checkbox" onChange={()=>{setHistory(!history)}}/>
      </div>
      <Button type="submit">Get Quote</Button>
    </form>
    </FormDiv>
  );
};

export default QuoteFrom;

