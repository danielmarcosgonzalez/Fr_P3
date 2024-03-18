import { Component } from "preact";
import EmpleoLista from "../components/EmpleoLista.tsx";
import Job from "../components/Job.tsx";
import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";

type Empleos ={
  data:Empleo[];
}

type Empleo={
  slug:string,
  company_name:string,
  title:string,
  description:string,
  remote:string,
  url:string,
  location:string,
  created_at:string
}
  //const empleo (e:Empleo):Component=> <Job slug={e?.slug} company_name={e?.company_name} title={e?.title} description={e?.description} remote={e?.remote} url={e?.url} location={e?.location} created_at={e?.created_at}/>
  //funcion que llame al componente empleo para que pinte el componente
  //export const empleo =(slug:string,empleos:Empleos):FunctionComponent<Empleo>=>{
  //  const e = empleos.data.find((e)=>e.slug===slug);

  //  return(
  //  <Job slug={e?.slug} company_name={e?.company_name} title={e?.title} description={e?.description} remote={e?.remote} url={e?.url} location={e?.location} created_at={e?.created_at}/>
  //  ); 
  //}    
  
  const MainJops: FunctionComponent<Empleos> = (props) =>{

    return (
        <div>
          <div>
            <EmpleoLista data={props.data}/>
          </div>

        </div>
    );
  }
  
  export default MainJops;