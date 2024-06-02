import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Select = () => {

const [name, setName] = useState([])
useEffect(() => {
    const getData = async () => {
      try {
        const {data} = await axios.get(
          `https://reqres.in/api/users`
        );
        setName(data.data.sort((a,b)=>{
            return a.first_name-b.first_name
        }))
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
    console.log(name)
  }, []);
  return (
<>
    <select name="" id="">
        <option value="def">Default</option>
        <option value="1">Sort by A-Z</option>
        <option value="2">Sort by Z-A</option>
    </select>


</>

  )
}

export default Select