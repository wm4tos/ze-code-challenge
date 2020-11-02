import List from 'atoms/list'
import CompanyCard from 'organisms/company-card'
import PropTypes from 'prop-types'
import React from 'react'

import * as styles from './styles'

const CompanyList = ({ companies }) => (
  <List
    Component={CompanyCard}
    itemStyle={styles.itemStyle}
    keyProp="id"
    items={companies}
  />
)

CompanyList.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.shape(CompanyCard.propTypes)).isRequired,
}

export default CompanyList
