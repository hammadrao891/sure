import React from 'react'
import RightToAccess from '../RightToAccess/RightToAccess'
import RightToRectification from '../RightToRectification/RightToRectification'
import RightToErasure from '../RightToErasure/RightToErasure'
import RightToRestrictProcessing from '../RightToRestrictProcessing/RightToRestrictProcessing'
import RightToObjectProcessing from '../RightToObjectProcessing/RightToObjectProcessing'
import RightToDataPortability from '../RightToDataPortability/RightToDataPortability'

const AdditionalGDPR = () => {
  return (
    <div>
      <h3>Aditional GDPR information for European union residents</h3>
                            <p>SurePeople does not share your personal information without your explicit consent.</p>
                            <p>Under the General Data Protection Act (”GDPR”), EU residents are granted the following individual rights that SurePeople will uphold:</p>
                            <RightToAccess/>
                            <RightToRectification/>
                            <RightToErasure/>
                            <RightToRestrictProcessing/>
                            <RightToObjectProcessing/>
                            <RightToDataPortability/>
                            </div>
  )
}

export default AdditionalGDPR
