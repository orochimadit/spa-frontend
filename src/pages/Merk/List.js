
import React from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';
const List = () => {
  const [merks, setMerks] = React.useState([]);
  const history = useHistory()
  React.useEffect(() => {
    axios.get('http://localhost:3030/api/merks')
      .then(response => {
        const { status, message, data } = response.data
        if (status === 'success') {
          setMerks(data)
          console.log(data)
        } else {
          alert(message)
        }
      })
      .catch(error => {
        alert(error)
      })
  }, [])
  return (
    <div className="card-body">
      <div className="container">
      <div className="table-wrapper">
      <div className="table-title">
                <div className="row">
                    <div className="col-sm-8"><h2>Bahan <b></b></h2></div>
                    <div className="col-sm-4">
                        <button type="button" className="btn btn-info add-new"><i className="fa fa-plus"></i> Tambah Baru</button>
                    </div>
                </div>
      </div>
      <table className="table table-hover text-nowrap">
        <thead>
          <tr>
            <th>Name</th>
            <th>Desc</th>
          </tr>
        </thead>
        <tbody>
          {merks && merks.map((merk, index) => {
            return <tr key={index}>
              <td>{merk.name}</td>

              <td className="center">{merk.description}</td>
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
