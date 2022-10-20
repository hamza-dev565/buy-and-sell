import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import './styles.scss'

const InputRangeComponenet = ({ intl }) => {
  return (
    <>
      <h4 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '30px' }}>
        <FormattedMessage id="profile.appScore" />
      </h4>
      <div className="d-flex align-items-center">
        <ProgressBar
          completed={60}
          className="wrapper"
          barContainerClassName="container"
          completedClassName="barCompleted"
          labelClassName="label"
          customLabel={intl.formatMessage({ id: 'profile.baseScore' })}
        />
        <h4 style={{ marginLeft: '20px', fontSize: '14px', fontWeight: '600' }}>60</h4>
      </div>
    </>
  )
}

export default injectIntl(InputRangeComponenet)
