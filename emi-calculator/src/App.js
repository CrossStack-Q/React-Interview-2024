import { useEffect, useState } from "react";
import "./App.css"
import { tenureData } from "./utils/constants";


function App(){
  const [totalCost , setTotalCost] = useState(0);
  const [interest , setInterest] = useState(0);
  const [fee,setFee] = useState(1);
  const [downPayment , setDownPayment] = useState(0);
  const [tenure , setTenure] = useState(12);
  const [emi,setEmi] = useState(0);
  


  function  calculateEMI(downPaymentL){
    if (!totalCost) return;

    const loanAmt = totalCost - downPaymentL;

    const rateOfInterest = interest / 100;
    
    const months = tenure ;

    const EMI = (loanAmt*rateOfInterest * ( (1+rateOfInterest)**months) ) / ( ((1+rateOfInterest)**months ) -1 ) ;

    return Number(EMI.toFixed(0));

  }


 
  
  const updateEMI=(e)=>{
    if(!totalCost) return

    const dp = Number(e.target.value)
    setDownPayment(dp.toFixed(0))

    // Calculate EMI and update it

    const emi = calculateEMI(dp);
    setEmi(emi);
  }

  function updateDownPayment(e){
    if(!totalCost) return

    const emi= Number(e.target.value)
    setEmi(emi.toFixed(0));

    // calculate DP and Update it .

    const dp = calculateDownPayment(emi);

    setDownPayment(dp);

  }

  function calculateDownPayment(EMIP){
    if(!totalCost) return;

    const downPaymentPercent = 100 - (EMIP/calculateEMI(0))*100;

    return Number((downPaymentPercent/100)*totalCost).toFixed(0);


  }



  useEffect(() => {
    if(totalCost===0){
      setDownPayment(0);
      setEmi(0);
    }

    const emi = calculateEMI(downPayment);
    setEmi(emi);
  }, [tenure])

  
  



  

  return (
    <div className="main">
      <span>EMI Calculator</span>

      <div style={{padding:20}}>
        <span>
          Total Cost of Asset
        </span>
        <input style={{marginLeft:20}} type="number" value={totalCost} onChange={(e)=>{
          setTotalCost(e.target.value);
        }} /> 
      </div>
      <div style={{padding:20}}>
        <span>
          Interest Rate (in %)
        </span>
        <input style={{marginLeft:20}} type="number" value={interest} onChange={(e)=>{
          setInterest(e.target.value);
        }} /> 
      </div>
      <div style={{padding:20}}>
        <span>
          Process Fee (in %)
        </span>
        <input style={{marginLeft:20}} type="number" value={fee} onChange={(e)=>{
          setFee(e.target.value);
        }} /> 
      </div>
      <div style={{paddingLeft:20}}>
        <p>
          Down Payment
        </p>
        <input 
        type="range" 
        style={{width:"80vw" , marginBottom:30}}
        min={0}
        max={totalCost}
        className="slider"
        value={downPayment}
        onChange={updateEMI}
        />
        <div style={{display:"flex" , width:"80vw" , justifyContent : "space-between" }} className="labels">
          <label>0%</label>
          <b>{downPayment}</b>
          <label>100%</label>
        </div>
        {/* Slider */}
      </div>
      <div style={{paddingLeft:20}}>
        <p>
          Loan per month
        </p>
        <input 
        type="range" 
        style={{width:"80vw", marginBottom:30}}
        min={calculateEMI(totalCost)}
        max={calculateEMI(0)}
        value={emi}
        className="slider"
        onChange={updateDownPayment}
        />
        <div style={{display:"flex" , width:"80vw" , justifyContent : "space-between" }} className="labels">
          <span>{calculateEMI(totalCost)}</span>
          <b>{emi }</b>
          <span>{calculateEMI(0) }</span>
        </div>
         {/* Slider */}
      </div>



      <span style={{display: "flex" ,justifyContent : "space-evenly" , marginTop : 30 }}>
        {tenureData.map((data)=>(
          <button 
          key={data}
          style={{paddingLeft: 28 , paddingRight: 28 , paddingTop : 10 , paddingBottom : 10 , marginInline : 10 ,background: tenure===data ? "#1F51FF" : "transparent" , borderRadius : 20 , fontSize : 20 , borderColor : tenure===data ? "#1F51FF" : "black" , color : tenure===data ? "white" : "#27272a" }} 
          onClick={()=>{
            setTenure(data)
          }}
          >
            {data}
          </button>
        ))}
      </span>


    </div>
  )
}

export default App;