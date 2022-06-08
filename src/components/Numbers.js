const Numbers = ({handleClick}) => {
    const buttons = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "c", "="] 
    return ( <div>
        {buttons.map((button) => (
            <button className="numbers" onClick = {handleClick} key = {button}>{button}</button>
        ))}
    </div> );
}

export default Numbers;