import { Auth } from "../Components/Auth"
import { Quote } from "../Components/Quote"

function Signup() {
  return (
    <div className="grid grid-cols-2 ">
      <div>
        <Auth type="Signup"/>
      </div>   
      <div className="invisible lg:visible">
        <Quote />
      </div>
    </div>
  );
}

export default Signup