import React from "react";
import { AiFillPhone, AiOutlineMail, AiFillLinkedin, AiFillEnvironment } from "react-icons/ai";
import '../styles/cv.css';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Study } from "./studies-information";
import { Skill } from "./skills";
import { ProfessionalXp } from "./professional-experience-information";
import {GeneralInfo}  from "./general-information";
import { Language } from "./languages";
import { Detail } from "./details";

interface CvMakerProps {
   generalInformation: GeneralInfo,
   details: Detail,
   experiences: ProfessionalXp[], 
   studies : Study[], 
   skills : Skill[], 
   languages: Language[],
}

const CvMaker = ({generalInformation, details, experiences, studies, skills, languages}: CvMakerProps) => {
    const {name, email, phoneNumber, address, linkedin, image} = generalInformation;
    const {job, text} = details;

    const printDocument = () => {
    const container = document.getElementById('cv')!;
     html2canvas(container, {
            scale: 2,
            useCORS: true
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'pt',
                format: [canvas.width, canvas.height]
            });

            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
            pdf.save('myCV.pdf');
        });
    }

    return (
           <div style={{display: "flex", flexDirection: 'column'}}>
            <div id='cv' className="cv-container">
                <div className="header-cv">
                    <div style={{ display: 'flex' }}>
                        {image ? <img src={image} className='profile' alt="Profile" /> : <div className="profile">your image here</div>}
                        <div className="header-name">
                            <h2 className="name-header-line name-line">{name}</h2>
                            <hr className="profile-line" />
                            <p className="name-header-line job-line">{job}</p>
                            <p className="textarea-presentation">{text}</p>
                        </div>
                    </div>
                </div>
                <div className="body-cv">
                    <div className="left-part">
                        <section>
                            <h3>Contact</h3>
                            <div className="contact-info">
                                <p><AiFillPhone />{phoneNumber}</p>
                                <p><AiOutlineMail />{email}</p>
                                <p><AiFillLinkedin /><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                                <p><AiFillEnvironment />{address}</p>
                            </div>
                        </section>
                        <section>
                            <h3>Skills</h3>
                            <ul className="skill-list">
                                {skills.map((skill, index) => (
                                    <li key={index} style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span>{skill.name}</span>
                                        <input type="range" id="range" name="range" min="1" max="10" readOnly value={skill.range} style={{ marginLeft: '8px' }} />
                                    </li>
                                ))}
                            </ul>
                        </section>
                        <section>
                            <h3>Languages</h3>
                            <ul className="language-list">
                                {languages.map((language, index) => (
                                    <li key={index}>{language.name}</li>
                                ))}
                            </ul>
                        </section>
                    </div>
                    <div className="right-part">
                        <section>
                            <h3>Studies</h3>
                            {studies.map((study, index) => (
                                <div key={index} style={{ padding: '16px', display: 'flex' }}>
                                    <div>
                                        <p style={{ backgroundColor: "#3AA6B9", color: 'white', padding: '4px 8px', borderRadius: '10px' }}>{study.startDateStudy} - {study.endDateStudy}</p>
                                    </div>
                                    <div style={{ marginLeft: '24px' }}>
                                        <p style={{ fontWeight: 'bold' }}>{study.studyTitle}</p>
                                        <p>School : {study.school}</p>
                                        <p>{study.degreeObtained ? 'Degree obtained' : 'not obtained'}</p>
                                    </div>
                                </div>
                            ))}
                        </section>
                        <section>
                            <h3>Experiences</h3>
                            {experiences.map((experience, index) => (
                                <div key={index} style={{ padding: '16px', display: 'flex' }}>
                                    <div>
                                        <p style={{ backgroundColor: "#3AA6B9", color: 'white', padding: '4px 8px', borderRadius: '10px' }}>{experience.startDate} - {experience.endDate}</p>
                                    </div>
                                    <div style={{ marginLeft: '24px' }}>
                                        <p style={{ fontWeight: 'bold' }}>{experience.position}</p>
                                        <p style={{ fontWeight: 'bold' }}>{experience.company}</p>
                                        <p>{experience.details}</p>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </div>
                </div>
            </div>
            <button type="button" onClick={printDocument} style={{justifyContent: 'center'}}>Export</button>
        </div>
    );
}

export default CvMaker;
