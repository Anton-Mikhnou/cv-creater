import style from './educationceCv.module.scss'
import { Educationce } from '../main/MainContent'

export default function educationceCv(props: {educationce: Educationce}) {
    return (
        <>
            <div className={style['container']}>
                <h1>{props.educationce.nameOfInstitution}</h1>
                <h2>{props.educationce.titleOfStudy}</h2>
                <div>
                    <p>{props.educationce.start} - {props.educationce.end}</p>
                </div>
            </div>
        </>
    )
}