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
            const response = await Axios.post('https://spa-api.aqiladigital.com/api/funds',fund)
            const {status, message} = response.data
            if(status ==='success'){
                alert(message)
                history.push('/funds')
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
      <h3 className="card-title">Dana</h3>
    </div>
    {/* /.card-header */}
    {/* form start */}
    <form>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="name">Nama asal Dana</label>
          <input type="text" className="form-control"  placeholder="Masukan data" size={50} value={fund.name} onChange={(e)=> handleChange(e, 'name')} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" className="form-control"  placeholder="masukkan data" value={fund.description} onChange={(e) =>handleChange(e, 'description')} />
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
