import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Job from "../components/Job.tsx";
import MainJops from"../islands/MainJops.tsx";

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

export const handler: Handlers={
  GET: async(req:Request, cxt: FreshContext<unknown,Empleos>)=>{

      const response = await fetch(`https://arbeitnow.com/api/job-board-api`);
      const data = await response.json();
      return cxt.render(data);
      
  }
};

const Page =(props: PageProps<Empleos>)=>{
  
  return(
      <div class="ContainerJobs">
        <div class="ContainerLista ">
          <div class="HeaderLinkedin">
            <h4 class="TituloLinkedin">Principales empleos que te recomendamos</h4>
            <h6 class="ResultadosLinkedin">{props.data.data.length} resultados</h6>
          </div>
          <div class="ListaEmpleosContainer">
            <MainJops data={props.data.data}/>
          </div>
        </div>
        <div class="ContainerDes">
          <div class="ContainerDescripcion">
            <Job slug={props.data.data[0].slug} company_name={props.data.data[0].company_name} title={props.data.data[0].title} description={props.data.data[0].description} remote={props.data.data[0].remote} url={props.data.data[0].url} location={props.data.data[0].location} created_at={props.data.data[0].created_at}/>
          </div>
        </div>
      </div>
  )
};

export default Page;