import  React, {FormEvent, MouseEventHandler, useState} from "react";
import '../styles/section.css'
import { AiFillEdit,  AiOutlinePlus } from "react-icons/ai";

export interface ProfessionalXp {
    company: string;
    position: string;
    details: string;
    startDate: string;
    endDate: string;
}

interface ProfessionalXpProps {
    setAllExperiences: (experiences: ProfessionalXp[]) => void;
}

type ExperienceKeys = keyof ProfessionalXp;

const ProfessionalExperience = ({setAllExperiences}: ProfessionalXpProps) => {
    const [experiences, setExperiences] = useState<ProfessionalXp[]>([{company: '', position: '', details: '', startDate: '', endDate: ''}]);
    const [showInformation, setShowInformation] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setAllExperiences(experiences);
        setShowInformation(!showInformation);
    }

    const handleSubmitExperience: MouseEventHandler = (e) => {
       setShowInformation(!showInformation);
    }
    
    const handleAddClick = () => {
        setExperiences([...experiences, { company: '', position: '', details: '', startDate: '', endDate: '' }]);
    };

    const handleExperienceChange = (index: number, key : ExperienceKeys , value : string) => {
        const updatedExperiences = experiences.map((experience, i) => {
            if (i === index) {
                return { ...experience, [key]: value };
            }
            return experience;
        });
        setExperiences(updatedExperiences);
    };
    return (
        <div className="container">
        <h2>Professional Experience</h2>
        <div>
            {showInformation? 
                    <div className="information">
                        <button onClick={handleSubmitExperience}><AiFillEdit className="button-icon"/><span className="button-with-icon" >Edit your informations</span></button>
                    </div>
                 :
                <form onSubmit={handleSubmit} >
                     {experiences.map((experience, index) => (
                    <div key={index} style={{display: 'flex', flexDirection: 'column'}}>
                        <div>
                            <label htmlFor={`company-${index}`}>Company :</label>
                            <input 
                                type="text" 
                                id={`company-${index}`} 
                                placeholder="Company name"
                                value={experience.company} 
                                onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor={`position-${index}`}>Title of your position :</label>
                            <input 
                                type="text" 
                                id={`position-${index}`} 
                                placeholder="The position"
                                value={experience.position} 
                                onChange={(e) => handleExperienceChange(index, 'position', e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor={`details-${index}`}>Details :</label>
                            <input 
                                type="text" 
                                id={`details-${index}`} 
                                placeholder="I did this, and that ..."
                                value={experience.details} 
                                onChange={(e) => handleExperienceChange(index, 'details', e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor={`startDate-${index}`}>Start date :</label>
                            <input 
                                type="date" 
                                id={`startDate-${index}`} 
                                value={experience.startDate} onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor={`endDate-${index}`}>End date :</label>
                            <input 
                                type="date" 
                                id={`endDate-${index}`} 
                                value={experience.endDate} 
                                onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)} />
                        </div>
                        <hr style={{border: '1px solid #e0e0e0', width: '100%'}}></hr>
                    </div>
                    ))}
                      <button type="button" style={{ width: 'fit-content' }} onClick={handleAddClick}>
                            <AiOutlinePlus /> <span className="button-with-icon" > Add an experience</span>
                        </button>
                    <input type="submit" value="Submit" />
                </form>
             }
        </div>
        </div>
    );
    };

    export default ProfessionalExperience;