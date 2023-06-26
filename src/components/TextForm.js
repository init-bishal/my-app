import React,{useState} from 'react'

const TextForm = (props) => {
    const [text,setText]= useState("") // default value
    // setText("New text") ;
    const toggleCase=(txt)=>{
        let temp=""
        for(let i of txt)
        {
            if(i.toUpperCase()===i)
            {
                temp+=i.toLowerCase()
            }
            else if(i.toLowerCase()===i)
            {
                temp+=i.toUpperCase()
            }
        }
        return temp
        props.showAlert('Cases are toggled ','success')
    }
    const handleClick=()=>{
        console.log("uppercase was trigge "+text)
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert('Converted to uppercase','success')
    }
    const handleOnChange=(e)=>{
        setText(e.target.value)
    }
    const handleLowerClick=()=>{
        setText(text.toLowerCase())
        props.showAlert('Converted to lowerCase','success')
    }
    const handleClearText=()=>{
        setText("")
        props.showAlert('Text cleared','success')
    }
    const handleToggleText=()=>{
        let newText=toggleCase(text)
        setText(newText)
        props.showAlert('Cases are toggled ','success')
    }
    return (
     <>
    <div className={`container my-5 p-3 border rounded bg-${props.mode==='light'? 'light' :'dark'} `} >
        <h1 className={`text-${props.mode==='light' ?'dark': 'light' }`}>{props.heading} </h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="12" 
            style={{
                backgroundColor:props.mode==='dark' ? 'grey': 'white' , 
                color:props.mode==='dark'? 'white' : 'black'
            }}></textarea>
        </div>
        <div className='container' >
        <button className="btn btn-primary mx-2"
        onClick={handleClick} >Convert to Uppercase </button>
        <button className='btn btn-primary mx-2' onClick={handleLowerClick} >Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearText}>Clear</button>
        <button className='btn btn-primary mx-2' onClick={handleToggleText}>Toggle Cases</button>
        </div>
    </div>
    <div className="container my-2 p-3 border rounded" style={{
                backgroundColor:props.mode==='dark' ? 'grey': 'white' , 
                color:props.mode==='dark'? 'white' : 'black'
            }}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{text.split(" ").length * 0.008} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter some text'}</p>
    </div>
    </>
  )
}

export default TextForm
