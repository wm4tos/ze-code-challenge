import Card from 'atoms/card'
import IconList from 'molecules/icon-list'
import PhoneLink from 'molecules/phone-link'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  formatAddress,
  mapDeliveryTypes,
  mapPaymentMethods,
} from 'services/utils/mapper'

import * as styles from './styles'

const CompanyCard = ({
  id, officialName, address, deliveryTypes, paymentMethods, phone,
}) => (
  <Link css={styles.cardStyle} to={`/company/${id}`}>
    <Card containerStyle={styles.cardStyle}>
      <h1 css={styles.titleStyle}>{officialName}</h1>
      <p css={styles.addressStyle}>{formatAddress(address)}</p>
      <IconList items={mapDeliveryTypes(deliveryTypes)} />
      <IconList items={mapPaymentMethods(paymentMethods)} />
      <PhoneLink phoneNumber={phone.phoneNumber} />
    </Card>
  </Link>
)

CompanyCard.propTypes = {
  id: PropTypes.string.isRequired,
  officialName: PropTypes.string.isRequired,
  address: PropTypes.shape({
    address1: PropTypes.string.isRequired,
    address2: PropTypes.string,
    number: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    province: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    coordinates: PropTypes.string.isRequired,
  }).isRequired,
  deliveryTypes: PropTypes.arrayOf(
    PropTypes.shape({
      pocDeliveryTypeId: PropTypes.string.isRequired,
      deliveryTypeId: PropTypes.string.isRequired,
      price: PropTypes.number,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  paymentMethods: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool.isRequired,
      paymentMethodId: PropTypes.string.isRequired,
      pocPaymentMethodId: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  phone: PropTypes.shape({
    phoneNumber: PropTypes.string.isRequired,
  }).isRequired,
}

export default CompanyCard
