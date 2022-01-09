import React from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios';


const Create = () => {
    const history = useHistory();
    const [type, setType] = React.useState({
        name:'',
        description:''
    })

    const handleChange = (e, name) =>{
        const value = e.target.value
        setType({
            ...type,[name]:value
        })
    }
    const handleSubmit = async(e) =>{
        e.preventDefault()
        try{
            const response = await Axios.post('http://localhost:3030/api/types',type)
            const {status, message} = response.data
            if(status ==='success'){
                alert(message)
                history.push('/types')
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
      <h3 className="card-title">type barang</h3>
    </div>
    {/* /.card-header */}
    {/* form start */}
    <form>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="name">Nama type</label>
          <input type="text" className="form-control"  placeholder="Masukan data" size={50} value={type.name} onChange={(e)=> handleChange(e, 'name')} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" className="form-control"  placeholder="masukkan data" value={type.description} onChange={(e) =>handleChange(e, 'description')} />
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
