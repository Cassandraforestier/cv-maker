import '../styles/section.css';
import React, { FormEvent, MouseEventHandler, useState } from 'react';
import { AiFillEdit } from "react-icons/ai";

interface DetailsProps {
    setDetails : (details: Detail) => void;
}

export interface Detail {
    job: string;
    text: string;
}


const Details = ({setDetails}: DetailsProps) => {
    const [job, setJob] = useState('');
    const [text, setText] = useState('');
    const [showInformation, setShowInformation] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setDetails({job, text});
        setShowInformation(!showInformation);
    }

    const handleSubmitDetails: MouseEventHandler = (e) => {
        setShowInformation(!showInformation);
    }

    return (
        <div className="container">
            <h2>More details :</h2>
            {showInformation? 
            <div className="information">
                <button onClick={handleSubmitDetails}><AiFillEdit className="button-icon"/><span className="button-with-icon" >Edit your informations</span></button>
            </div>
            :
            <form onSubmit={handleSubmit}>
            <label htmlFor="job">Job Title :</label>
            <input type="text" id="job" value={job} onChange={(e) => setJob(e.target.value)}/>

            <label htmlFor="text">Make a small introduction to you :</label>
            <textarea rows={6} id="text" value={text} onChange={(e) => setText(e.target.value)}/>

            <input type='submit' value='submit' />
            </form>
            }
        </div>
    )
}
export default Details;