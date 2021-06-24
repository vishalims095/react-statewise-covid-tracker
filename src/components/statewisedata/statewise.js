import react, { useEffect } from 'react'
 
const Statewise = () => {
    const getCovidData = async () =>{
        const res = await fetch ('https://api.covid19india.org/data.json')
        const actualData = await res.json()
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
                    </table>
                </div>
            </div>
        </>
    )
}
export default Statewise