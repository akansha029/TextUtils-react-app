import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
    //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converded to upper case !" , "success");

    }
    const handleLowClick = () =>{
            let newText = text.toLowerCase();
            setText(newText)
            props.showAlert("converded to lower case !" , "success");
        }
        const handleClear = () =>{
                let newText = '';
                setText(newText)
                props.showAlert("text is clear !" , "success");
            } 
            const handleCopy = () =>{
                    let newText = document.getElementById("myBox");
                    newText.select();
                    navigator.clipboard.writeText(newText.value);
                    props.showAlert("text copyed !" , "success");
                } 
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("extra space is removed!" , "success");
    }
    const handleOnChange = (event) =>{
       // console.log("on click");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "new text" //wrong way to change the state
    // setText("new text");//correct way to change the state

  return (
    <>
        <div className="container" style={{color : props.mode === "dark" ? "white" : "black"}}>  
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control mb-3" value={text} style={{background : props.mode === "dark" ? "gray" : "white" , color : props.mode === "dark" ? "white" : "black"}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Upercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={handleClear}>Clear Text</button>
            <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-2' onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
            </div>
        <div className="container my-4" style={{color : props.mode === "dark" ? "white" : "black"}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length}</p>
            <p>Preview</p>
            <p>{text.length > 0 ? text: "Enter something in the above text box and prebview it here."} </p>
        </div>

    </> 
  )
}
