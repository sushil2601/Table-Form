import "./styles.css";
import {useState} from 'react';

export default function App() {

  const [user,setUser] = useState({
    firstName : '',
    lastName :'',
    emailId : '',
    password : '',
    gender : '',
    skills : [],
    country : '',
    about : ''
  })

  const [users,setUsers] = useState([])
  const [searchId,setSearchId] = useState('');

  const handleChange = (e) =>{
    setUser((prev)=>(
      {...prev,[e.target.name] : e.target.value}
    ))
  }

  const handleSkillChange = (e) => {

    const {value,checked} = e.target;

    setUser((prev)=>(
      {...prev,skills : checked ? [...prev.skills,value] : prev.skills.filter((skill)=> skill !== value)}
    ))

  }

  const handleSubmit = (e) => {
    e.preventDefault();
      console.log(user);

      setUsers([...users,user]);

      setUser({
        firstName : '',
        lastName : '',
        emailId : '',
        password : '',
        gender : '',
        skills : [],
        country : '',
        about : ''
        }
      )
  }

  const handleDelete = (name) =>{
    const newList = users.filter(li => li.name !== name)
    setUsers(newList);
  }


  return (
    <div className="App">
      <h1>User Form With Table</h1>
      <hr />
      <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <input 
            placeholder='Search here'
            onChange={(e)=>setSearchId(e.target.value)}
          /><br/><br/>
          <label>First Name : </label>
          <input type="text" name='firstName' value={user.firstName} onChange={(e)=>handleChange(e)}/>
          <br/><br/>

          <label>Last Name : </label>
          <input type='text' name='lastName' value={user.lastName} onChange={(e)=>handleChange(e)}/>
          <br/><br/>

          <label>Emaill Id : </label>
          <input type='text' name='emailId' value={user.emailId} onChange={(e)=>handleChange(e)}/>
          <br /><br/>

          <label>Password : </label>
          <input type='password' name='password' value={user.password} onChange={(e)=>handleChange(e)}/>
          <br/><br/>

          <label>Gender : </label>
          <label><input type='radio' name='gender' value='male' checked={user.gender === 'male'} onChange={(e)=>handleChange(e)}/>Male</label>
          <label><input type='radio'name='gender' value='female' checked={user.gender === 'female'} onChange={(e)=>handleChange(e)}/>FeMale</label>
          <label><input type='radio' name='gender' value='other' checked={user.gender === 'other'} onChange={(e)=>handleChange(e)}/>Other</label>
          <br/><br/>

          <label>Skills : </label>
          <label><input type='checkbox' name='skills' value='ReactJs' checked={user.skills.includes('ReactJs')} onChange={(e)=>handleSkillChange(e)}/>ReactJs</label>
          <label><input type='checkbox'name='skills' value='NodeJs' checked={user.skills.includes('NodeJs')} onChange={(e)=>handleSkillChange(e)}/>NodeJs</label>
          <label><input type='checkbox' name='skills' value='JavaScript' checked={user.skills.includes('JavaScript')} onChange={(e)=>handleSkillChange(e)}/>JavaScript</label>
          <br/><br/>

          {/* const skillSet = ["ReactJs","NodeJs","JavaScript"];

          {skillSet.map((skill)=>(
            <label key={index}><input type='checkbox' name='skill' value={skill} checked={user.skills.includes(skill)} onChange={(e)=>handleSkillChange(e)}/>{skill}</label>
          ))} */}

          <label>Country : </label>
          <select name='country' value={user.country} onChange={(e)=>handleChange(e)}>
            <option value='select'>select</option>
            <option value='India'>India</option>
            <option value='Russia'>Russia</option>
            <option value='SriLanka'>SriLanka</option>
            <option value='Spain'>Spain</option>
            <option value='Greece'>Greece</option>
            <option value='Switzerland'>Switzerland</option>
            <option value='Japan'>Japan</option>
          </select>
          <br/><br/>
          <label>About : </label>
          <textarea rows='3' cols='30' name='about' value={user.about} onChange={(e)=>handleChange(e)}/>
          <br /><br />

          <input 
            type='button'
            value='submit'
            onClick={handleSubmit}
          />
        </form>

        <table border={1}>

          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Id</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Skills</th>
              <th>Country</th>
              <th>About</th>
            </tr>
          </thead>
          <tbody>
            {users.filter((item)=>(
              searchId.toLowerCase() === '' ? item : item.firstName.toLowerCase().includes(searchId)
            ))
            .map((user,index)=>(
                <tr key={index}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.emailId}</td>
                  <td>{user.password}</td>
                  <td>{user.gender}</td>
                  <td>
                    <ul>
                    {
                      user.skills.map((skill,index)=>(
                        <li key={index}>{skill}</li>
                      ))
                    }
                    </ul>
                  </td>
                  <td>{user.country}</td>
                  <td>{user.about}</td>
                  <td>
                    <button onClick={(e)=>handleDelete(user.firstName)}>Delete</button>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
