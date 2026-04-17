// import React from 'react'
interface provident{
    name: string,
    age: number,
    isgenius: boolean

}

const User = ({name, age, isgenius}: provident) => {
  return (
    <>
    <div> hi User</div>
    <h1>name:{name}</h1>
    <h2>age:{age}</h2>
    <p>character:{isgenius ? "yes" : "no"}</p>

</>
  )
}

export default User