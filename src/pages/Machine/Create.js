import React from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios';


const Create = () => {
    const history = useHistory();
    const [machine, setMachine] = React.useState({
        name:'',
        description:''
    })
    
    const handleChange = (e, name) =>{
        const value = e.target.value
        setMachine({
            ...machine,[name]:value
        })
    }
    const handleSubmit = async(e) =>{
        e.preventDefault()
        try{
            const response = await Axios.post('https://images.zapps.co.id/predict',machine)
            const {status, message} = response.data
            if(status ==='success'){
                alert(message)
                // history.push('/machines')
            }else{
                alert(message)
            }
        }catch(error){
            alert('network Error')
        }
    }
    return (
        <>
        <div className="col-md-12">
  {/* general form elements */}
  <div className="card card-primary">
    <div className="card-header">
      <h3 className="card-title">Bahan</h3>
    </div>
    {/* /.card-header */}
    {/* form start */}
    <form>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="name">Nama Bahan</label>
          <input type="file" className="form-control"  placeholder="Masukan data" size={50} value={machine.name} onChange={(e)=> handleChange(e, 'name')} />
        </div>
       
        
     
      </div>
      {/* /.card-body */}
      <div className="card-footer">
        <button type="submit" className="btn btn-primary"  onClick={ handleSubmit }>Submit</button>
      </div>
    </form>
  </div>
  {/* /.card */}
 
  
  
 
  {/* /.card */}
</div>


 </>
    )
}

export default Create
