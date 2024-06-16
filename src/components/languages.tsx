import React, {FormEvent, MouseEventHandler, useState} from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import '../styles/section.css'

interface LanguageProps {
    setAllLanguages: (languages: Language[]) => void;
}

export interface Language {
    name: string;
}

const Languages = ({setAllLanguages}: LanguageProps) => {
    const [languages, setLanguages] = useState([{name: ''}]);
    const [showInformation, setShowInformation] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setAllLanguages(languages);
        setShowInformation(!showInformation);
    }

    const handleSubmitLanguage: MouseEventHandler = (e) => {
        setShowInformation(!showInformation);
    }

    const handleAddClick = () => {
        setLanguages([...languages, {name: ''}]);
    }

    const handleLanguagesChange = (index: number, languageName: string) => {
       const updatedLanguages = languages.map((language, tabIndex) => {
            if(tabIndex === index){
                return {name: languageName}
            } 
            return language;

        })
        setLanguages(updatedLanguages);
    }

    return (
        <div className="container">
        <h2>Languages</h2>
        
        <div>
            {showInformation ? 
           <div className="information">
                <button onClick={handleSubmitLanguage}><AiFillEdit className="button-icon"/><span className="button-with-icon">Edit your informations</span></button>
            </div>
            :
            <form onSubmit={handleSubmit}>
                {languages.map((language, index) => {
                   return( <div key={index}>
                    <label htmlFor="language"></label>
                    <input type="text" id="language" value={language.name} placeholder={`Language ${index+1}`} onChange={(e) => handleLanguagesChange(index, e.target.value)}/>

                </div>)
                })} 
                <button type="button" style={{width: 'fit-content'}} onClick={handleAddClick} ><AiOutlinePlus/> Add a Languages</button>
               
                <input type="submit" value="Submit"  />
            </form>
            }
        </div>
        </div>
    )
}
export default Languages;