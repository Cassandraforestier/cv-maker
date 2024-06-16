import React, { FormEvent, FormEventHandler, useState } from "react";
import { AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import '../styles/section.css';

export interface Study {
    school: string;
    studyTitle: string; 
    startDateStudy: string;
    endDateStudy: string; 
    degreeObtained: boolean;
}

interface StudyProps {
    setAllStudies: (studies: Study[]) => void;
}

const StudiesInformation = ({ setAllStudies }: StudyProps ) => {
    const [studies, setStudies] = useState<Study[]>([{ school: '', studyTitle: '', startDateStudy: '', endDateStudy: '', degreeObtained: false }]);
    const [showInformation, setShowInformation] = useState(false);

    const handleSubmit: FormEventHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setAllStudies(studies);
        setShowInformation(!showInformation);
    };

    const handleAddClick = () => {
        setStudies([...studies, { school: '', studyTitle: '', startDateStudy: '', endDateStudy: '', degreeObtained: false }]);
    };

    const handleStudyChange = (index: number, key : string, value : boolean | string) => {
        const updatedStudies = studies.map((study, i) => {
            if (i === index) {
                return { ...study, [key]: value };
            }
            return study;
        });
        setStudies(updatedStudies);
    };

    return (
        <div className="container">
            <h2>Studies Information section</h2>
            <div>
                {showInformation ? (
                    <div className="information">
                        <button onClick={() => setShowInformation(false)}>
                            <AiFillEdit className="button-icon" /><span className="button-with-icon" >Edit your informations</span>
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        {studies.map((study, index) => (
                            <div key={index}>
                                <div>
                                    <label htmlFor={`school-${index}`}>School : </label>
                                    <input
                                        type="text"
                                        id={`school-${index}`}
                                        value={study.school}
                                        placeholder={`School ${index + 1}`}
                                        onChange={(e) => handleStudyChange(index, 'school', e.target.value)}
                                    />
                                </div>
                                <div>
                                <label htmlFor={`studyTitle-${index}`}>Title of your study : </label>
                                <input
                                    type="text"
                                    id={`studyTitle-${index}`}
                                    value={study.studyTitle}
                                    placeholder={`Title ${index + 1}`}
                                    onChange={(e) => handleStudyChange(index, 'studyTitle', e.target.value)}
                                />
                                </div>
                                <div>
                                <label htmlFor={`startDate-${index}`}>Start date : </label>
                                <input
                                    type="date"
                                    id={`startDate-${index}`}
                                    value={study.startDateStudy}
                                    onChange={(e) => handleStudyChange(index, 'startDateStudy', e.target.value)}
                                />
                                </div>
                                <div>
                                <label htmlFor={`endDate-${index}`}>End date : </label>
                                <input
                                    type="date"
                                    id={`endDate-${index}`}
                                    value={study.endDateStudy}
                                    onChange={(e) => handleStudyChange(index, 'endDateStudy', e.target.value)}
                                />
                                </div>
                                <div>
                                    <label htmlFor={`degreeObtained-${index}`}>Degree obtained ? </label>
                                    <input
                                        type="checkbox"
                                        id={`degreeObtained-${index}`}
                                        checked={study.degreeObtained}
                                        onChange={(e) => handleStudyChange(index, 'degreeObtained', e.target.checked)}
                                    />
                                </div>
                            </div>
                        ))}
                        <button className="button-with-icon" type="button" style={{ width: 'fit-content' }} onClick={handleAddClick}>
                            <AiOutlinePlus /><span className="button-with-icon" >Add a study</span>
                        </button>
                        <input type="submit" value="Submit" />
                    </form>
                )}
            </div>
        </div>
    );
};

export default StudiesInformation;
