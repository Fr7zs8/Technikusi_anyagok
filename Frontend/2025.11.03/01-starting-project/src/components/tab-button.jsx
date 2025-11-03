export default function TabButton({children, onselect}){
    

    return (
        <li>
            <button onClick={onselect}>{children}</button>
        </li>
    )
}