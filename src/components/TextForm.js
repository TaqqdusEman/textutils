export default function Textform(props){
  return (
    <>
         <div>
        <form>
         <div className="form-group container" style={{color:props.mode==='dark'?'blue':'black'}}>
         <label htmlFor="exampleFormControlTextarea1"  style={{color:props.mode==='dark'?'blue':'black'}}>{props.title}</label>
         <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" style={{backgroundColor:props.mode==='dark'?'grey':'white'}}></textarea>
        </div>
      </form>
    </div>
    </>
  )
}
