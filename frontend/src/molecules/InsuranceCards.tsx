type CarInsurancePackage = {
  title: string;
  coverage: string;
  price: number;
};
type CarInsuranceData = {
  brand: string;
  model: string;
  year: string;
  area: string;
  accidentHistory: boolean;
};
const estimatedPrice = (data: CarInsuranceData)=>{
  let basePrice =1000;
   
  if(data.accidentHistory){
     basePrice += basePrice*.15;
  }
  if(data.area== 'Tokyo'){
    basePrice += basePrice*.05;
  }
  return basePrice
}
const CarInsuranceCards = () => {
  const carInsurancePackages: CarInsurancePackage[] = [
    {
      title: 'Basic Package',
      coverage: 'Liability coverage',
      price: 50,   //this should be from the carform
    },
    {
      title: 'Standard Package',
      coverage: 'Liability and collision coverage',
      price: 100,
    },
    {
      title: 'Premium Package',
      coverage: 'Liability, collision, and comprehensive coverage',
      price: 150,
    },
  ];

  return (
    <div>
      {carInsurancePackages.map((item, index) => (
        <div key={index} className="card">
          <h3>{item.title}</h3>
          <p>{item.coverage}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CarInsuranceCards;
