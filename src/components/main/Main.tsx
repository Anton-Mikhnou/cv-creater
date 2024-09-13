import main from './main.module.scss';
import GeneralForm from '../generalForm/GeneralForm';
import GeneralCv from '../genralCv/GeneralCv';
import { useState } from 'react';
import EducationceForm from '../educationceForm/EducationceForm';
import EducationceCv from '../educationceCv/EducationceCv';
import JobForm from '../jobForm/JobFom';
import JobCv from '../jobCv/JobCv';

export type General = {
    firstName: string;
    lastName: string;
    email: string;
    title: string
    tel: string | null;
};

export interface Educationce {
    nameOfInstitution: string;
    titleOfStudy: string;
    start: string;
    end: string;
}

export interface Job {
    companyName: string,
    positionTitle: string,
    responsibilities: string;
    start: string,
    end: string,
}

export default function Main() {
    const [general, setGeneral] = useState<General>({
        firstName: 'Firstname',
        lastName: 'Lastname',
        email: 'ex@email.ru',
        title: 'title',
        tel: '123123131',
    }); 

    const [educationce, setEducationce] = useState<Educationce>({
        nameOfInstitution: 'Name of Institurion',
        titleOfStudy: 'Title of Study',
        start: '00.00.0000',
        end: '00.00.0000',
    })

    const [job, setJob] = useState<Job>({
        companyName: 'Name',
        positionTitle: 'Position Title',
        responsibilities: 'Responsibilities',
        start: '00.00.0000',
        end: '00.00.0000',
    })

    return (
        <>
            <div className={main['container-main']}>

                <div className={main['container-main__form']}>
                    <GeneralForm general={general} setGeneral = {setGeneral}/>
                    <EducationceForm educationce={educationce}  setEducationce={setEducationce}/>
                    <JobForm job={job} setJob={setJob} />
                </div>

                <div className={main['container-main__cv']}>
                    <GeneralCv general = {general} />
                    <EducationceCv educationce={educationce}/>
                    <JobCv job={job}/>
                </div>
                    
            </div>
        </>
    )
}