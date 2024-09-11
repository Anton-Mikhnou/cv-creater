import style from './GeneralForm.module.scss'
import { General } from '../main/main'

interface GeneralProps {
    general: General,
    setGeneral: React.Dispatch<React.SetStateAction<General>>,
}

export default function GeneralForm({general, setGeneral}: GeneralProps) {
    return (
        <>
            <div className={style['container-generalForm']}>

                <label htmlFor='firstName'>
                    First Name:
                    <input type='text' id='firstName' onChange={e => setGeneral({...general, firstName: e.target.value})}/>    
                </label>

                <label htmlFor='lastName'>
                    Last Name:
                    <input type='text' id='lastName' onChange={e => setGeneral({...general, lastName: e.target.value})} />    
                </label>

                <label htmlFor='title'>
                    Title:
                    <input type='text' id='title' onChange={e => setGeneral({...general, title: e.target.value})}/>
                </label>

                <label htmlFor='email'>
                    Email:
                    <input type='email' id='email' onChange={e => setGeneral({...general, email: e.target.value})}/>
                </label>

                <label htmlFor='tel'>
                    Phone number:
                    <input type='tel' id='tel' onChange={e => setGeneral({...general, tel: e.target.value})}/>
                </label>
                
            </div>
            
        </>
    )
}