import { useEffect, useState } from "react";
import withLayout from "./withLayout";

function About(){
    const [personel, setPersonel] = useState({});

    useEffect(()=> {
        getMyPersonelInformation();
    },[]);    

    function getMyPersonelInformation(){
        fetch("/api/personel")
        .then(res=> res.json())
        .then(data=> {
            setPersonel(data);
        });
    }

    return (
        <div className="container">
        <h1>About Me</h1>
        <img src={personel.logo} width={200}/>
        <div dangerouslySetInnerHTML={{ __html: personel.aboutMe }} />
        </div>
    )
}

export default withLayout(About);