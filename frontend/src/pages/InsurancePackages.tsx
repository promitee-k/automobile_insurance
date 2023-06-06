import { useNavigate, useLocation } from "react-router-dom";
import { CardContainer, PackageCards } from "../atoms/Cards";

type CarInsurancePackage = {
  title: string;
  coverage: string;
  price: number;
};
const CarInsuranceCards = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const estimatedPrice = () => {
    let basePrice = 28000;

    if (location.state.carData.accidentHistory) {
      basePrice += basePrice * 0.15;
    }
    if (location.state.carData.area == "Tokyo") {
      basePrice += basePrice * 0.1;
    }
    return basePrice;
  };
  const carInsurancePackages: CarInsurancePackage[] = [
    {
      title: "Basic Package",
      coverage: "Liability coverage",
      price: estimatedPrice(), 
    },
    {
      title: "Standard Package",
      coverage: "Liability and collision coverage",
      price: estimatedPrice() + estimatedPrice() * 0.2,
    },
    {
      title: "Premium Package",
      coverage: "Liability, collision, and comprehensive coverage",
      price: estimatedPrice() + estimatedPrice() * 0.3,
    },
  ];

  return (
    <CardContainer>
      {carInsurancePackages.map((item, index) => (
        <PackageCards
          key={index}
          onClick={() => {
            navigate("/insurance", {
              state: {
                package: item.title,
                price: item.price,
                carData: location.state.carData,
              },
            });
          }}
        >
          <h3>{item.title}</h3>
          <p>{item.coverage}</p>
          <p>Price:{item.price}円</p>
        </PackageCards>
      ))}
    </CardContainer>
    
  );
};

export default CarInsuranceCards;
