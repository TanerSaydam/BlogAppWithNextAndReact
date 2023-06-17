import { useEffect, useState } from "react"
import withLayout from "./withLayout";

function Home() {
  const [personel,setPersonel] = useState({});

  useEffect(()=>{
    getMyPersonelInformation();
  }, [])

  function getMyPersonelInformation(){
    fetch("/api/personel")
    .then(res=> res.json())
    .then(data=> {
      setPersonel(data);
    })
  }

  return (
    <div className="container">
      <h1>My name is {personel.name}</h1>
      <h3>{personel.subTitle}</h3>
      <img src={personel.logo} width={600}/>
    </div>
  )
}


export default withLayout(Home)