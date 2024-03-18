import { FunctionComponent } from "preact";
import EmpleoSimple from "../components/EmpleoSimple.tsx";

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

const EmpleoLista: FunctionComponent<Empleos> = (props) =>{
    const{data}=props;
return(
    <div>
        {data.map((e)=>(
            <div>
                <EmpleoSimple slug={e.slug} company_name={e.company_name} title={e.title} location={e.location}/>
            </div>
        ))}
    </div>
    );
};

export default EmpleoLista;
//            <a href={`<Job slug=${e.slug} company_name=${e.company_name} title=${e.title} description=${e.description} remote=${e.remote} url=${e.url} location=${e.location} created_at=${e.created_at}/> `} target="iframe_a">{e.title}</a>
            