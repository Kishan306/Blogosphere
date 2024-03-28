import { Auth } from "../Components/Auth"
import { Quote } from "../Components/Quote"

function Signin() {
  return (
    
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
      <div className="">
        <Auth type="signin"/>
      </div>   
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  )
}

export default Signin