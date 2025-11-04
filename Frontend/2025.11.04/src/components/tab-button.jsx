export default function TabButton({children, onselect, isActive}){
    return (
        <li>
            <button className={isActive?'active':undefined} onClick={onselect}>{children}</button>
        </li>
    )
}