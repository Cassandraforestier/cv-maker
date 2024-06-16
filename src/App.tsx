import React, { useState } from "react";
import GeneralInformation, { GeneralInfo } from "./components/general-information";
import StudiesInformation, { Study } from "./components/studies-information";
import ProfessionalExperience, { ProfessionalXp } from "./components/professional-experience-information";
import CvMaker from "./components/cv-make";
import Details, { Detail } from "./components/details";
import Skills, { Skill } from "./components/skills";
import Languages, { Language } from "./components/languages";
import Header from "./components/header";

const App = () => {
    const [generalInformation, setGeneralInformation] = useState<GeneralInfo>({
        name: 'Firstname Lastname',
        email: 'youremail@email.com',
        phoneNumber: '+33 00 00 00 00 00',
        image: '',
        linkedin: 'path/to/linkedIn',
        address: 'Nice, France'
    });

    const [details, setDetails] = useState<Detail>({
        job: "The position I want",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    });

    const [experiences, setAllExperiences] = useState<ProfessionalXp[]>([{
        company: 'Company name',
        position: 'Position',
        details: '1. I do this, 2. I do that...',
        startDate: '2023/01/01',
        endDate: '2024/01/01',
    }]);

    const [studies, setStudies] = useState<Study[]>([{
        school: 'School name', 
        studyTitle: 'title', 
        startDateStudy: '2023/01/01', 
        endDateStudy: '2024/01/01',
        degreeObtained: true
    }]);

    const [skills, setAllSkills] = useState<Skill[]>(
        [{name: 'skill 1', range: 5}]
    );

    const [languages, setAllLanguages] = useState<Language[]>([{name: 'Français'}]);

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Header />
            <div style={{display: 'flex'}}>
                <div style={{width: '25%'}}>
                    <GeneralInformation setGeneralInformation={setGeneralInformation} />
                    <Details setDetails={setDetails} />
                    <Skills setAllSkills={setAllSkills} />
                    <Languages setAllLanguages={setAllLanguages}/>  
                </div>
                <div style={{width: '50%', display: 'flex', justifyContent:'center'}}>
                    <CvMaker languages={languages} skills={skills} generalInformation={generalInformation} details={details} experiences={experiences} studies={studies}  />
                </div>
                <div style={{width: '25%'}}>
                    <StudiesInformation setAllStudies={setStudies} />
                    <ProfessionalExperience setAllExperiences={setAllExperiences}/>
                </div>
            </div>
        </div>
    );
}

export default App;
