import React, {FormEvent, MouseEventHandler, useState} from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import '../styles/section.css'

interface SkillProps {
    setAllSkills: (skill: Skill[]) => void;
}

export interface Skill {
    name: string;
    range: number
}

type SkillKeys = keyof Skill;

const Skills = ({setAllSkills}: SkillProps) => {
    const [skills, setSkills] = useState<Skill[]>([{name: '', range: 1}]);
    const [showInformation, setShowInformation] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setAllSkills(skills);
        setShowInformation(!showInformation);
    }

    const handleSubmitInformation: MouseEventHandler = (e) => {
        setShowInformation(!showInformation);
    }

    const handleAddClick = () => {
        setSkills([...skills, {name: '', range: 1}]);
    }

    const handleSkillChange = (index: number, key: SkillKeys, value: string) => {
       const updatedSkill = skills.map((skill, i) => {
           if (i === index) {
                return { ...skill, [key] : value};
            }
            return skill;
        })
        setSkills(updatedSkill);
    }

    return (
        <div className="container">
        <h2>Skills</h2>
        
        <div>
            {showInformation ? 
           <div className="information">
                <button onClick={handleSubmitInformation}><AiFillEdit className="button-icon"/><span className="button-with-icon">Edit your informations</span></button>
            </div>
            :
            <form onSubmit={handleSubmit}>
                {skills.map((skill, index) => {
                   return( <div key={index}>
                    <input type="text" id="skills" value={skill.name} placeholder={`skill ${index+1}`} onChange={(e) => handleSkillChange(index, 'name', e.target.value)}/>
                    <div>
                        <label htmlFor="range">Expertise</label>
 <input type="range" id="range" name="range" min="1" max="10"  value={skill.range} onChange={(e) => handleSkillChange(index, 'range', e.target.value)} style={{marginLeft: '8px'}}/>                       
                    </div>

                </div>)
                })} 
                <button type="button" style={{width: 'fit-content'}} onClick={handleAddClick} ><AiOutlinePlus/> Add a skill</button>
               
                <input type="submit" value="Submit"  />
            </form>
            } 
        </div>
        </div>
    )
}
export default Skills;