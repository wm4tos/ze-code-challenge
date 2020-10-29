import { gql } from '@apollo/client'

export const POC_SEARCH_METHOD = gql`
  query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      id
      status
      tradingName
      officialName
      deliveryTypes {
        pocDeliveryTypeId
        deliveryTypeId
        price
        title
        subtitle
        active
      }
      paymentMethods {
        pocPaymentMethodId
        paymentMethodId
        active
        title
        subtitle
      }
      pocWorkDay {
        weekDay
        active
        workingInterval {
          openingTime
          closingTime
        }
      }
      address {
        address1
        address2
        number
        city
        province
        zip
        coordinates
      }
      phone {
        phoneNumber
      }
    }
  }
`
