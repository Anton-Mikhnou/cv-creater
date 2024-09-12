import style from './EducationceForm.module.scss'
import { Educationce } from '../main/main'

interface EducationceProps {
    educationce: Educationce,
    setEducationce: React.Dispatch<React.SetStateAction<Educationce>>
}

export default function EducationceForm({educationce, setEducationce}: EducationceProps) {

    const handelInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
        const {name, value} = event.currentTarget;

        setEducationce({
            ...educationce,
            [name]: value
        });
    
    }

    return (
        <>
            <div className={style['container']}>

                <label htmlFor="nameOfInstitution">
                    Name of Institution:
                    <input type="text" name='nameOfInstitution' id='nameOfInstitution' onChange={handelInputChange}/>
                </label>

                <label htmlFor="titleOfStudy">
                    Title of Study:
                    <input type="titleOfStudy" name='titleOfStudy' id='titleOfStudy' onChange={handelInputChange} />
                </label>

                <label htmlFor="start">
                    Start of studies:
                    <input type="date" name='start' id='start' onChange={handelInputChange}/>
                </label>

                <label htmlFor="end">
                    End of studies:
                    <input type="date" name='end' id='end' onChange={handelInputChange} />
                </label>

            </div>
        </>
    )
}