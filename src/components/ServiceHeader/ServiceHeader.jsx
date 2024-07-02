import "./ServiceHeader.scss";
export default function ServiceHeader(props){
    return(
        <div className="col-12" id="ServiceHeader">
            <div className="col-12" id="Content">
                    <h1>{props.Name}</h1>
                    <p>{props.Title}</p>

                </div>
            <div className="col-12" id="FilterImg">
            </div>
        </div>
    );
}