import style from './EducationceForm.module.scss'
import { Educationce } from '../main/main'
import { Value } from 'sass';

interface EducationceProps {
    educationce: Educationce,
    setEducationce: React.Dispatch<React.SetStateAction<Educationce>>
}

export default function EducationceForm({educationce, setEducationce}: EducationceProps) {

    const handelSubmit = (event) => {
        event.preventDefault();
        
        const dataToSubmit = {
            ...educationce
        };
    }

    const handelInputChange = (event) => {
        const {target}  = event;
        const {name, value} = target;

        setEducationce({
            ...educationce,
            [name]: value
        });
    }

    return (
        <>
            <div className={style['container']}>

                <form action="#" method='post'>

                    <label htmlFor="nameOfInstitution">
                        Name of Institution:
                        <input type="text" name='nameOfInstitution' id='nameOfInstitution' onChange={e => setEducationce({...educationce, nameOfInstitution: e.target.value})}/>
                    </label>
                    
                    <label htmlFor="titleOfStudy">
                        Title of Study:
                        <input type="titleOfStudy" name='titleOfStudy' id='titleOfStudy' onChange={e => setEducationce({...educationce, titleOfStudy: e.target.value})} />
                    </label>

                    <label htmlFor="start">
                        Start of studies:
                        <input type="date" name='start' id='start' onChange={e => setEducationce({...educationce, start: e.target.value})}/>
                    </label>

                    <label htmlFor="end">
                        End of studies:
                        <input type="date" name='end' id='end' onChange={e => setEducationce({...educationce, end: e.target.value})} />
                    </label>

                    <button type='submit'>Add Education</button>
                </form>

            </div>
        </>
    )
}