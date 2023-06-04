import { useNavigate , Link} from "react-router-dom";
import "./templates.css"
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

const CarInsuranceCards = (data: CarInsuranceData) => {
  const navigate = useNavigate()
  const estimatedPrice = (data: CarInsuranceData)=>{
    let basePrice =28000;
     
    if(data.accidentHistory){
       basePrice += basePrice*.15;
    }
    if(data.area== 'Tokyo'){
      basePrice += basePrice*.10;
    }
    return basePrice
  }
  const carInsurancePackages: CarInsurancePackage[] = [
    {
      title: 'Basic Package',
      coverage: 'Liability coverage',
      price: estimatedPrice(data),   //this should be from the carform
    },
    {
      title: 'Standard Package',
      coverage: 'Liability and collision coverage',
      price: estimatedPrice(data)+estimatedPrice(data)*0.2 ,
    },
    {
      title: 'Premium Package',
      coverage: 'Liability, collision, and comprehensive coverage',
      price: estimatedPrice(data)+estimatedPrice(data)*0.3 ,
    },
  ];

  return (
    <div id="card-container">
      {carInsurancePackages.map((item, index) => (
        <div key={index}id="package-cards" onClick={()=>{ navigate("/auth") }}>
          <h3>{item.title}</h3>
          <p>{item.coverage}</p>
          <p>Price:{item.price}円</p>
          <Link to={{
            pathname:'/auth',
          }}></Link>
        </div>
         
      ))}
 
    </div>
  );
};

export default CarInsuranceCards;
