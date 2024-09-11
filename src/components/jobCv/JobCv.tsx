import style from './JobCv.module.scss';
import { Job } from '../main/main';

export default function JobCv({job}: {job: Job}) {
    return (
        <>
            <div className={style['container']}>
                <h1>{job.companyName}</h1>
                <h2>{job.positionTitle}</h2>
                <h3>{job.responsibilities}</h3>
                <div>
                    <p>{job.start} - {job.end}</p>
                </div>
            </div>
        </>
    )
}