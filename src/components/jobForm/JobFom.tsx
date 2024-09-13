import style from './JobForm.module.scss'
import { Job } from '../main/MainContent'

interface JobProps {
    job: Job,
    setJob: React.Dispatch<React.SetStateAction<Job>>
}

export default function JobForm({job, setJob}: JobProps) {

    return(
        <>
            <div className={style['container']}>
                <label htmlFor="companyName">
                    Company Name:
                    <input type="text" id='companyName' onChange={e => setJob({...job, companyName: e.target.value })}  />
                </label>

                <label htmlFor="positionTitle">
                    Position Title:
                    <input type="text" id='positionTitle' onChange={e => setJob({...job, positionTitle: e.target.value })} />
                </label>

                <label htmlFor="responsibilities">
                    Responsibilities:
                    <input type="text" id='responsibilities' onChange={e => setJob({...job, responsibilities: e.target.value })} />
                </label>

                <label htmlFor="start">
                    Start:
                    <input type="date" id='start' onChange={e => setJob({...job, start: e.target.value })} />
                </label>

                <label htmlFor="end">
                    End:
                    <input type="date" id='end' onChange={e => setJob({...job, end: e.target.value })} />
                </label>
            </div>
        </>
    )
}