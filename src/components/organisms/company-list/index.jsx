import List from 'atoms/list'
import CompanyCard, { CompanyCardProps } from 'organisms/company-card'
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
  companies: PropTypes.arrayOf(PropTypes.shape(CompanyCardProps)).isRequired,
}

export default CompanyList
