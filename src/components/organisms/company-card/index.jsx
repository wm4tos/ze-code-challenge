import Card from 'atoms/card'
import IconList from 'molecules/icon-list'
import PropTypes from 'prop-types'
import React from 'react'
import {
  formatAddress,
  mapDeliveryTypes,
  mapPaymentMethods,
} from 'services/utils/mapper'

import * as styles from './styles'

const CompanyCard = ({ company }) => (
  <Card containerStyle={styles.cardStyle}>
    <h1 css={styles.titleStyle}>{company.officialName}</h1>
    <p css={styles.addressStyle}>{formatAddress(company.address)}</p>
    <IconList items={mapDeliveryTypes(company.deliveryTypes)} />
    <IconList items={mapPaymentMethods(company.paymentMethods)} />
  </Card>
)

CompanyCard.propTypes = {
  company: PropTypes.shape({
    officialName: PropTypes.string.isRequired,
    address: PropTypes.shape({
      address1: PropTypes.string.isRequired,
      address2: PropTypes.string,
      number: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      province: PropTypes.string.isRequired,
      zip: PropTypes.string.isRequired,
      coordinates: PropTypes.string.isRequired,
    }),
    deliveryTypes: PropTypes.arrayOf(
      PropTypes.shape({
        pocDeliveryTypeId: PropTypes.string.isRequired,
        deliveryTypeId: PropTypes.string.isRequired,
        price: PropTypes.number,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired,
      }),
    ),
    paymentMethods: PropTypes.arrayOf(
      PropTypes.shape({
        active: PropTypes.bool.isRequired,
        paymentMethodId: PropTypes.string.isRequired,
        pocPaymentMethodId: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
}

export default CompanyCard
