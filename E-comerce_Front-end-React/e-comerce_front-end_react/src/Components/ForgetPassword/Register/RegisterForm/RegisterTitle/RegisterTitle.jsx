import "./RegisterTitle.css"
export default function RegisterTitle({title}){

    return(
        <div className="register_title">
            
            <h1>{title}</h1>
            <p>Please Enter Your Information!</p>

        </div>
    );
}