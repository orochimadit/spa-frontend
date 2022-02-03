import React from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import { getMaterials } from '../../api/material'; 
import Select from 'react-select';
import { useCallback } from 'react';
const Create = () => {
    const history = useHistory();
    const [inventoryBook, setInventoryBook] = React.useState({
        parent_number:'',
        goods_code:'',
        good:'',
        merk:'',
        type:'',
        size:'',
        production_year:'',
        fund:'',
        document:'',
        condition:'',
        price:'',
        goods_position:'',
        description:'',
        optionFund:[],
    })
    const [optionFunds, setOptionFunds] = React.useState([]);
    const [optionTypes, setOptionTypes] = React.useState([]);  
    const [optionMerks, setOptionMerks] = React.useState([]);    
    const [optionGoods, setOptionGoods] = React.useState([]);  
    const fetchFunds = useCallback(() => {
      return axios.get(`${process.env.REACT_APP_API_HOST}/api/funds`)
      .then(response => {
        const { status, message, data } = response.data
        if (status === 'success') {
          setOptionFunds(data);
          console.log(data)
        } else {
          alert(message)
        }
      })
      .catch(error => {
        alert(error)
      })
      //return ['nasi padang', 'nasi uduk', 'nasi gudeg'];
    }, []);
    const fetchTypes = useCallback(() => {
      return axios.get(`${process.env.REACT_APP_API_HOST}/api/types`)
      .then(response => {
        const { status, message, data } = response.data
        if (status === 'success') {
          setOptionTypes(data)
          console.log(data)
        } else {
          alert(message)
        }
      })
      .catch(error => {
        alert(error)
      })
    }, []);
    const fetchMerks = useCallback(() => {
      return axios.get(`${process.env.REACT_APP_API_HOST}/api/merks`)
      .then(response => {
        const { status, message, data } = response.data
        if (status === 'success') {
          setOptionMerks(data)
          console.log(data)
        } else {
          alert(message)
        }
      })
      .catch(error => {
        alert(error)
      })
    }, []);
    const fetchGoods = useCallback(() => {
      return axios.get(`${process.env.REACT_APP_API_HOST}/api/goods`)
      .then(response => {
        const { status, message, data } = response.data
        if (status === 'success') {
          setOptionGoods(data)
          console.log(data)
        } else {
          alert(message)
        }
      })
      .catch(error => {
        alert(error)
      })
    }, []);
    React.useEffect(() => {
      fetchFunds();
      fetchMerks();
      fetchTypes();
      fetchGoods();
    }, [])
    const handleChange = (e, name) =>{
        const value = e.target.value
        setInventoryBook({
            ...inventoryBook,[name]:value
        })
    }
    const handleSubmit = async(e) =>{
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:3030/api/inventoryBooks',inventoryBook)
            const {status, message} = response.data
            if(status ==='success'){
                alert(message)
                history.push('/inventoryBooks')
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
          <label htmlFor="parent_number">Nomor Induk</label>
          <input type="text" className="form-control"  placeholder="Masukan data" size={50} value={inventoryBook.parent_number} onChange={(e)=> handleChange(e, 'parent_number')} />
        </div>
        <div className="form-group">
          <label htmlFor="goods_code">Nomor Kode Barang</label>
          <input type="text" className="form-control"  placeholder="Masukan data" size={50} value={inventoryBook.goods_code} onChange={(e)=> handleChange(e, 'goods_code')} />
        </div>
        <div className="form-group">
          <label htmlFor="good">Nama Barang</label>
          <Select
        options={optionGoods}
        getOptionLabel={(option)=>option.name}
        getOptionValue={(option)=>option._id}
        onChange={opt => console.log(opt._id, opt.name)}
      />
        </div>
        <div className="form-group">
          <label htmlFor="merk">Merk</label>
          <Select
        options={optionMerks}
        getOptionLabel={(option)=>option.name}
        getOptionValue={(option)=>option._id}
        onChange={opt => console.log(opt._id, opt.name)}
      />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <Select
        options={optionTypes}
        getOptionLabel={(option)=>option.name}
        getOptionValue={(option)=>option._id}
        onChange={opt => console.log(opt._id, opt.name)}
      />
        </div>
        <div className="form-group">
          <label htmlFor="ukuran">Ukuran</label>
          <input type="text" className="form-control"  placeholder="Masukan data" size={50} value={inventoryBook.size} onChange={(e)=> handleChange(e, 'size')} />
        </div>
        <div className="form-group">
          <label htmlFor="production_year">Tahun Produksi</label>
          <input type="text" className="form-control"  placeholder="Masukan data" size={50} value={inventoryBook.production_year} onChange={(e)=> handleChange(e, 'production_year')} />
        </div>
        <div className="form-group">
          <label htmlFor="fund">Dana</label>
          <Select
        options={optionFunds}
        getOptionLabel={(option)=>option.name}
        getOptionValue={(option)=>option._id}
        onChange={opt => console.log(opt._id, opt.name)}
      />  
        </div>
        <div className="form-group">
          <label htmlFor="document">Dokumen</label>
          <input type="text" className="form-control"  placeholder="Masukan data" size={50} value={inventoryBook.document} onChange={(e)=> handleChange(e, 'document')} />
        </div>
        <div className="form-group">
          <label htmlFor="condition">Kondisi Barang</label>
          <input type="text" className="form-control"  placeholder="Masukan data" size={50} value={inventoryBook.condition} onChange={(e)=> handleChange(e, 'condition')} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Harga</label>
          <input type="text" className="form-control"  placeholder="Masukan data" size={50} value={inventoryBook.price} onChange={(e)=> handleChange(e, 'price')} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Posisi Barang</label>
          <input type="text" className="form-control"  placeholder="Masukan data" size={50} value={inventoryBook.goods_position} onChange={(e)=> handleChange(e, 'goods_position')} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" className="form-control"  placeholder="masukkan data" value={inventoryBook.description} onChange={(e) =>handleChange(e, 'description')} />
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
