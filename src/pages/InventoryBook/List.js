
import React from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import { fetchInventoryBooks} from '../../features/InventoryBooks/actions';
import { useDispatch, useSelector } from 'react-redux';
const List = () => {
    let dispatch = useDispatch();
    let inventoryBooks = useSelector(state => state.inventoryBooks)
  React.useEffect(()=>{
      dispatch(fetchInventoryBooks());
      
  },[])
  return (
    <div className="card-body">
      <div className="container">
      <div className="table-wrapper">
      <div className="table-title">
                <div className="row">
                    <div className="col-sm-8"><h2>Tambah Buku Inventory <b></b></h2></div>
                    <div className="col-sm-4">
                        <button type="button" className="btn btn-info add-new"><i className="fa fa-plus"></i> Tambah Baru</button>
                    </div>
                </div>
      </div>
      <a href="/inventoryBook/create">+ CREATE</a>
      <table className="table table-hover text-nowrap">
        <thead>
          <tr>
            <th>Nomor induk</th>
            <th>Nomor kode Barang</th>
            <th>Nama Barang</th>
            <th>Merk</th>
            <th>Type</th>
            <th>Ukuran</th>
            <th>Produksi tahun</th>
            <th>Asal dana</th>
            <th>Harga</th>
            <th>Posisi Barang</th>
          </tr>
        </thead>
        <tbody>
            {console.log(inventoryBooks)}
        {inventoryBooks.data.map((inventoryBook, index)=>{
            return <tr key={index}>
            <td>{inventoryBook.parent_number}</ td>
            <td>{inventoryBook.goods_code}</td>
            <td>{inventoryBook.good.name}</td>
            <td>{inventoryBook.merk?.name ?? "Data Kosong"}</td>
            <td>{inventoryBook.type?.name ?? "Data Kosong"}</td>
            <td>{inventoryBook.size}</td>
            <td>{inventoryBook.production_year}</td>
            <td>{inventoryBook.fund.name}</td>
            <td>{inventoryBook.price}</td>
            <td>{inventoryBook.goods_position}</td>
          </tr>
        })}
          
        </tbody>
      </table>
    </div>
    </div>
    </div>
  )
}

export default List
