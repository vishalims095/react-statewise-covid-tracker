import react, { useEffect, useState } from 'react'
 
const Statewise = () => {
    const [data, setData] = useState([])
    const getCovidData = async () =>{
        const res = await fetch ('https://api.covid19india.org/data.json')
        const actualData = await res.json()
        setData (actualData.statewise)
    }
    useEffect(()=>{
        getCovidData()
    })
    return(
        <>
            <div className = "container-fluid mt-5">
                <div class = "main-heading">
                    <h1 className = "mb-5 text-center">
                        <span className = "font-weight-bold">  INDIA </span>COVID-19 Dashboard
                    </h1>
                </div>
              
                <div className = "table-responsive">
                    <table className = "table table-hover">
                        <thead className = "thead-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Death</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((currElem, ind)=>{
                                return(
                                    <tr key = {ind}>
                                        <td>{currElem.state}</td>
                                        <td>{currElem.confirmed}</td>
                                        <td>{currElem.recovered}</td>
                                        <td>{currElem.deaths}</td>
                                        <td>{currElem.active}</td>
                                        <td>{currElem.lastupdatedtime}</td>
                                    </tr>
                                )
                            })}
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Statewise