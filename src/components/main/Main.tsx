import main from './main.module.scss';
import GeneralForm from '../generalForm/GeneralForm';
import GeneralCv from '../genralCv/GeneralCv';
import { useState } from 'react';

export type General = {
    firstName: string;
    lastName: string;
    email: string;
    title: string
    tel: number | null;
};


export default function Main() {
    const [general, setGneral] = useState<General>({
        firstName: 'Firstname',
        lastName: 'Lastname',
        email: 'ex@email.ru',
        title: 'title',
        tel: 123123131,
    });    

    return (
        <>
            <div className={main['container-main']}>

                <div className={main['container-main__form']}>
                    <GeneralForm general={general} setGeneral = {setGneral}/>
                </div>

                <div className={main['container-main__cv']}>
                    <GeneralCv general = {general} />
                </div>
                    
            </div>
        </>
    )
}