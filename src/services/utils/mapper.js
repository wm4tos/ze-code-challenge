import { capitalize } from './string'

export const getDeliveryTypes = ({ deliveryTypes }) => {
  const ICONS = {
    RECEBER: 'GoLocation',
    RETIRAR: 'AiFillCar',
    AGENDAR: 'AiOutlineClockCircle',
  }

  return deliveryTypes.map(
    (deliveryType) => ({
      icon: ICONS[deliveryType.title], label: capitalize(`${deliveryType.title} - ${deliveryType.subtitle}`), ...deliveryType,
    }),
  )
}
