import { FunctionComponent } from "preact";

type EmpleoProps = {
    slug:string,
    company_name:string,
    title:string,
    location:string,
};

const EmpleoSimple: FunctionComponent<EmpleoProps> = (props) =>{
    const {slug,company_name,title,location}= props;
return(
    <div class="EmpleoSimple">
        <div class="IconContainer">
            <div>
                <img src="/it-logo.png" alt="Icono" width="75" height="75"/>
            </div>
        </div>
        <div>
            <div>
                <h2><a href="">{title}</a></h2>
            </div>
        
            <div>
                <h5>{company_name}</h5>
                <h5>{location}</h5>
            </div>
            <div>
                <h5>5 contactos trabajan aquí</h5>
            </div>
            <div>
                <h5>Promocionado . 15 Solicitudes</h5>
            </div>
        </div>
    </div>
    );
};

export default EmpleoSimple;