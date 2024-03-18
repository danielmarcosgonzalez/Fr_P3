import { FunctionComponent } from "preact";

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
const Job: FunctionComponent<Empleo> = (props) =>{
    const {slug,company_name,title,description,remote,url,location,created_at}= props;

return(
    <div>
    <div class="EmpleoContainer">
        <h1>{title}</h1>
        <h5>{company_name} . {location} hace 2 Semanas 13 Solicitudes</h5>
        
        <div class="IconDatosContainer">
            <div class="ContainerJornadas">
                <div class="IconJornada">
                    <img src="/maletin.png" alt="MaletinIcono" width="20" height="20"/>
                </div>
                <div>
                    <p>{remote} Jornada completa . Algo de Responsabilidad</p>
                </div>
            </div>

            <div class="ContainerEmpleos">
                <div class="IconEdificio">
                    <img src="/edificio.png" alt="EdificioIcono" width="20" height="20"/>
                </div>
                <div>
                    <p>De 3.000 a 7.000 empleados . Servicios de Tecnologia</p>
                </div>
            </div>

            <div class="ContainerAntiguos">
                <div class="IconUsuarios">
                    <img src="/usuarios.png" alt="UsuariosIcono" width="20" height="20"/>
                </div>
                <div>
                    <p>1 antiguo empleado de la empresa trabaja aquí . 4 antiguos compañeros de la Universidad trabajan aquí</p>
                </div>
            </div>

            <div class="ContainerAptitudes">
                <div class="IconLista">
                    <img src="/lista.png" alt="ListaIcono" width="20" height="20"/>
                </div>
                <div>
                    <p>3 de 10 aptitudes coinciden con tu perfil</p>
                </div>
            </div>

            <div class="ContainerVerificaciones">
                <div class="IconEscudo">
                    <img src="/escudo.png" alt="EscudoIcono" width="20" height="20"/>
                </div>
                <div>
                    <p>Consulta las verificaciones relacionadas con este anuncio de empleo</p>
                </div>
            </div>

            <div class="ContainerComparaciones">
                <div class="IconBombilla">
                    <img src="/bombilla.png" alt="MaletinIcono" width="20" height="20"/>
                </div>
                <div>
                    <p>Ve una comparacion con los otros Solicitantes</p>
                </div>
            </div>
        </div>

        <div class="botones">
            <a href={url} class="Button">Solicitar</a>
            <button class="Guardar">Guardar</button>
        </div>

        <div class="Recluter">
            <div>
                <img class="IconoRecluter" src="/it-recluter.png" alt="Icono" width="75" height="75"/>
            </div>
            <div>
            <h2>Conoce al equipo de contratacion</h2>
            <p>It Recluter</p>
            </div>
        </div>

        <h2>Acerca del empleo</h2>
        <div dangerouslySetInnerHTML={{__html:description}}></div>
        <h5>{created_at}</h5>
    </div>
    </div>
    );
};

export default Job;