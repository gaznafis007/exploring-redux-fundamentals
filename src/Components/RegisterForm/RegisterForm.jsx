import { useContext } from "react"
import { UserContext } from "../../App"


const RegisterForm = () => {
    const {userInfo,dispatch} = useContext(UserContext)
    const formValueHandler = event =>{

        dispatch({
            type:"UPDATE_USER_INFO",
            name:event.target.name,
            payload:{
                value: event.target.value
            }
        })
        console.log(event.target.name, event.target.value);
    }
    const submitHandler = (event)=>{
        event.preventDefault()
        console.log(userInfo);
    }
  return (
    <form onSubmit={submitHandler} className="p-6 m-4 w-1/3 mx-auto rounded-md shadow-lg">
        <h2 className="text-2xl font-semibold text-center capitalize">Provide your info</h2>
        <div className="my-2">
            <label className="font-semibold capitalize">first name</label>
            <br />
            <input type="text" name="firstName" onBlur={formValueHandler} className="border-2 w-full my-2 border-sky-600 rounded-md px-3 py-1" />
        </div>
        <div className="my-2">
            <label className="font-semibold capitalize">last name</label>
            <br />
            <input type="text" name="lastName" onBlur={formValueHandler} className="border-2 w-full my-2 border-sky-600 rounded-md px-3 py-1" />
        </div>
        <div className="my-2">
            <label className="font-semibold capitalize">email</label>
            <br />
            <input type="text" name="email" onBlur={formValueHandler} className="border-2 w-full my-2 border-sky-600 rounded-md px-3 py-1" />
        </div>
        <div className="my-2">
            <label className="font-semibold capitalize">institute</label>
            <br />
            <input type="text" name="institute" onBlur={formValueHandler} className="border-2 w-full my-2 border-sky-600 rounded-md px-3 py-1" />
        </div>
        <div className="my-2">
            <label className="font-semibold capitalize">country</label>
            <br />
            <select name="country" onBlur={formValueHandler} className="border-2 w-full my-2 border-sky-600 rounded-md px-3 py-1">
                <option value="Bangladesh">Bangladesh</option>
                <option value="India">India</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Sri-lanka">Sri-lanka</option>
                <option value="England">England</option>
                <option value="Afghanistan">Afghanistan</option>
            </select>
        </div>
        <div className="my-2">
            <label className="font-semibold capitalize">gender</label>
            <br />
            <input type="radio" name="gender" onBlur={formValueHandler} value="male" className="mr-2" />
            <label className="font-semibold capitalize">male</label>
            <br />
            <input type="radio" name="gender" onBlur={formValueHandler} value="female" className="mr-2" />
            <label className="font-semibold capitalize">female</label>
        </div>
        <div className="my-2">
            <label className="font-semibold capitalize">comments</label>
            <br />
            <textarea onBlur={formValueHandler} className="border-2 w-full my-2 border-sky-600 rounded-md px-3 py-1" name="comments"></textarea>
        </div>
        <div className="my-2">
            <button type="submit" className="capitalize text-white px-4 py-2 bg-sky-400 rounded-md">submit</button>
        </div>
    </form>
  )
}

export default RegisterForm