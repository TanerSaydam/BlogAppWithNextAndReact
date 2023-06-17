import { useState } from "react"
import withLayout from "./withLayout";

function Contact() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");

    function send(e){
        e.preventDefault();

        fetch("/api/contact",{
            method: "POST",
            body: JSON.stringify({email: email, subject: subject, content, content}),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            setEmail("");
            setSubject("");
            setContent("");
        });

    }

    return (
        <div className="container">
            <h1>Contact Page</h1>
            <form onSubmit={send}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" onChange={(e)=> setEmail(e.target.value)} value={email} />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input id="subject" onChange={(e)=> setSubject(e.target.value)} value={subject} />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea id="content"
                    onChange={(e)=> setContent(e.target.value)} rows={10} value={content}></textarea>
                </div>
                <div>
                    <button>Gönder</button>
                </div>
            </form>
        </div>
    )
}

export default withLayout(Contact);