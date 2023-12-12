import React, {useState} from "react";
import {useForm} from "react-hook-form";

const Contacts = () => {
    const {register, handleSubmit} = useForm()
    const onSubmit = (d) => {
        alert(JSON.stringify(d))
    }

    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        message: ""
    })

    let name, value
    const handleChange = (event) => {
        name = event.target.name
        value = event.target.value
        setContactData({...contactData, [name]: value})
    }

    const submitData = async (e) => {
        e.preventDefault()
        // const contactData = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
        const {name, email, message} = contactData
        let res = await fetch("https://newform-91048-default-rtdb.europe-west1.firebasedatabase.app/Contact.json", {
            method: "POST",
            headers: {
                ContentType: "website/json"
            },
            body: JSON.stringify({
                name,
                email,
                message
            })
        })

        if (res) {
            alert("Hello")
        } else {
            alert("Problem")
        }
    }

    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form onSubmit={handleSubmit(onSubmit)} method='POST'
                  className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email -
                        vutukuri.kumar192st.niituniversity.in</p>
                </div>
                <input
                    {...register("name")}
                    id=""
                    type={"text"}
                    name="name"
                    className='bg-[#ccd6f6] p-2'
                    placeholder='Name'
                    value={contactData.name}
                    onChange={handleChange}

                />
                <input
                    {...register("email")}
                    className='my-4 p-2 bg-[#ccd6f6]'
                    type="email"
                    name="email"
                    placeholder='Email'
                    value={contactData.email}
                    onChange={handleChange}
                    id=""
                />
                <textarea
                    {...register("message")}
                    id=""
                    name="message"
                    className='bg-[#ccd6f6] p-2'
                    placeholder='Message'
                    value={contactData.message}
                    onChange={handleChange}
                >
                </textarea>
                <button
                    type="submit"
                    value="Send Message"
                    onClick={submitData}
                    className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's
                    Collaborate
                </button>
            </form>
        </div>
    )
}

export default Contacts