import style from './GeneralCv.module.scss';
import { General } from '../main/MainContent';


export default function GeneralCv(props: {general: General}) {
    return (
        <>
            <div className={style['container']}>
                <h1>{props.general.firstName} {props.general.lastName}</h1>
                <h2>{props.general.title}</h2>
                <p>{props.general.email}</p>
                <p>{props.general.tel}</p>
            </div>
        </>
    )
}