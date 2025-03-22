import React from 'react'
import Header from '../../components/Header'

import BarChart from './BarChart'

function bar() {
  return (
    <div>
      <Header title="Bar Chart" subTitle="The minimum wage in Germany, France and Spain (EUR/month)" />
      <BarChart/>
    </div>
  )
}

export default bar
