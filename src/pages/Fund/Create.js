import React from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios';


const Create = () => {
    const history = useHistory();
    const [fund, setFund] = React.useState({
        name:'',
        description:''
    })

    const handleChange = (e, name) =>{
        const value = e.target.value
        setFund({
            ...fund,[name]:value
        })
    }
    const handleSubmit = async(e) =>{
        e.preventDefault()
        try{
            const response = await Axios.post('http://localhost:3030/api/funds',fund)
            const {status, message} = response.data
            if(status ==='success'){
                alert(message)
                history.push('/api/funds')
            }else{
                alert(message)
            }
        }catch(error){
            alert('network Error')
        }
    }
    return (
        <div className='card-body'>

        </div>
    )
}

export default Create
