const Companies = ({ React, companies }) => {
  return (
    <div className="products">
      <h3>Products</h3>
      <ul>
        {companies.map(company => { return (<li key={company.id}>{company.name}</li>) })}
      </ul>
    </div>
  )
}

export default Companies;
