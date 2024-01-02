import React, {useState} from 'react'

export default function TextForm(props){
    
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!", "success");

    }
    const handleLoClick = () => {
        console.log("Lowercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase!", "success");


    }

    const handleClearClick = () =>{
        let newText = ' ';
        setText(newText);
        props.showAlert("Cleared!", "success");

    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Its Speaking Listen Carefully!", "success");
      }
 
      const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert(" Copied to Clipboard!", "success");
      }
      const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space will be removed!", "success");
      } 
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" Value={text} onChange={handleOnChange} style={{backgroundcolor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'black':'black'}} id="myBox" rows="8"></textarea>
             </div>
             <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
             <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
             <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
             <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
             <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
             <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}} >
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing To Preview"}</p>
        </div>

        </>
    )
}