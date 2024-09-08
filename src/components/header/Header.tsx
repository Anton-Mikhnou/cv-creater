import header from "./Header.module.scss"

export default function Header({title}: {title: string}) {
    return (
        <>
            <div className = {header["container-header"]}>
                <h1>{title}</h1>
            </div>
        </>
    )
}