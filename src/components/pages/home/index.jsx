import { useLazyQuery } from '@apollo/client'
import Loading from 'molecules/loading'
import CompanyList from 'organisms/company-list'
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  errorHandler,
  fromAxiosResponse,
  fromGoogle,
  get,
  getLatLong,
} from 'services/googleMaps'
import { POC_SEARCH_METHOD } from 'services/graphql'
import { pipe } from 'services/utils/operators'

import * as styles from './styles'

const Home = () => {
  const address = useSelector((state) => state.address)

  const [latLng, setLatLng] = useState({})

  const [isLoading, setIsLoading] = useState(false)

  const [getPoc, { loading, error, data }] = useLazyQuery(POC_SEARCH_METHOD)

  const getData = useCallback(
    () => data?.pocSearch || [],
    [data],
  )

  const needLoading = useCallback(() => isLoading || loading, [loading, isLoading])

  useEffect(() => {
    const mapper = pipe(fromAxiosResponse, fromGoogle, getLatLong)

    if (address) {
      setIsLoading(true)

      get(address)
        .then(mapper)
        .then(setLatLng)
        .catch(errorHandler)
        .finally(() => setIsLoading(false))
    } else {
      setLatLng({ lat: 0, lng: 0 })
    }
  }, [address])

  useEffect(() => {
    if (!Object.keys(latLng).length) return

    const variables = {
      lat: latLng.lat,
      long: latLng.lng,
      algorithm: 'NEAREST',
      now: new Date().toJSON(),
    }

    getPoc({ variables })
  }, [latLng])

  if (error) return 'aa'

  return needLoading() ? <Loading /> : (
    <div css={styles.containerBaseStyle}>
      <div css={styles.contentStyle}>
        <CompanyList companies={getData()} />
      </div>
    </div>
  )
}

export default Home
