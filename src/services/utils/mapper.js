import { capitalize } from './string'

export const mapDeliveryTypes = ({ deliveryTypes }) => {
  const ICONS = {
    RECEBER: 'GoLocation',
    RETIRAR: 'AiFillCar',
    AGENDAR: 'AiOutlineClockCircle',
  }

  return deliveryTypes.map(
    (deliveryType) => ({
      icon: ICONS[deliveryType.title],
      label: capitalize(`${deliveryType.title} - ${deliveryType.subtitle}`),
      key: deliveryType.deliveryTypeId,
      ...deliveryType,
    }),
  )
}

export const formatAddress = ({
  address1, city, number, province,
}) => `${address1}, ${number}, ${city} - ${province}`
