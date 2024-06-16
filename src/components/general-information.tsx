import React, {ChangeEvent, FormEvent, FormEventHandler, MouseEventHandler, useState} from "react";
import { AiFillEdit } from "react-icons/ai";
import '../styles/section.css'

interface GeneralInformationProps {
    setGeneralInformation : (generalInformation : GeneralInfo) => void;
}

export interface GeneralInfo{
    name: string;
    email: string;
    phoneNumber: string;
    linkedin: string;
    address: string;
    image: string;
}

const GeneralInformation = ({setGeneralInformation}: GeneralInformationProps) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [address, setAddress] = useState('');
    const [showInformation, setShowInformation] = useState(false);
    const [image, setImage] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        setGeneralInformation({name, email, phoneNumber, image, linkedin, address});
        setShowInformation(!showInformation);
    }

    const handleSubmitGeneralInfo: MouseEventHandler = (e) => {
        setShowInformation(!showInformation);
    }

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    }

    return (
        <div className="container">
        <h2>General Information</h2>
        
        <div>
            {showInformation ? 
           <div className="information">
                <button onClick={handleSubmitGeneralInfo}><AiFillEdit className="button-icon"/><span className="button-with-icon" >Edit your informations</span></button>
            </div>
            :
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name :</label>
                <input type="text" id="name" value={name} placeholder="Firstname Lastname" onChange={(e) => setName(e.target.value)}/>

                <label htmlFor="email">Email :</label>
                <input type="email" id="text" value={email} placeholder="youremail@email.com"onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="address">Address :</label>
                <input type="text" id="name" value={address} placeholder="city, country"onChange={(e) => setAddress(e.target.value)}/>

                <label htmlFor="phone">Phone number :</label>
                <input type="tel" id="phone" value={phoneNumber} placeholder="+33 0 00 00 00 00" onChange={(e) => setPhoneNumber(e.target.value)} />

                <label htmlFor="linkedin">LinkedIn :</label>
                <input type="text" id="linkedin" value={linkedin} placeholder="path/to/linkedIn"onChange={(e) => setLinkedin(e.target.value)} />

                <label htmlFor="imageUpload">Select an image to upload:</label> 
                <input type="file" id="imageUpload" name="imageUpload" onChange={handleImageChange}/> 
              
                <input type="submit" value="Submit"  />
            </form>
            }
        </div>
        </div>
    );
    };

    export default GeneralInformation;