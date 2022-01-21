function Students(props) {

    const {name, age, roll_no, city} = props.data;

    return ( <>
        <h3>{name} {age} {roll_no}</h3>
        <div>
            {props.data.name}    
        </div>
        <div>
            {props.data.roll_no}    
        </div>
        <div>
            {props.data.city}    
        </div>
        <div>
            {props.data.age}    
        </div>
    </> );
}

export default Students;
