import { useState } from "react"
interface character {
    name: string;
}

const Personuser = ({name}: character) => {
 const [input, setinput] = useState<string | null >(String)
const Handlechange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setinput(event.target.value)
}


return(
<div>
    <p>
    {" "}
    {name}name:{!input ? "not availabel": input}
    </p>
<input onChange={Handlechange} /> 
</div>
)
}
export default Personuser;
