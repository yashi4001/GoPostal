import "./Preview.css"
export const Preview=(props)=>{
    const data=props.data;
    return(
        <div className="preview">
            <div className="prevText">From: {data.name} ({data.email})</div>
            <div className="prevText">Subject: {data.subject}</div>
            <div className="prevText">{data.content}</div>
        </div>
    )
}