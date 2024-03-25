import React from 'react'

const InformationCollectionTable3 = () => {
  return (
    <div>
      <div class="flex-table">
                                <div class="flex-col">
                                    <div class="th">Personal Information Collected</div>
                                    <div class="td">
                                        <ul>
                                            <li>First and Last Name</li>
                                            <li>Title</li>
                                            <li>Email Address</li>
                                            <li>Gender (Optional)</li>
                                            <li>Date of Birth (Optional)</li>
                                            <li>Country (Optional)</li>
                                            <li>Postal Address (Optional)</li>
                                            <li>Phone Number (Optional)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="flex-col">
                                    <div class="th">Purpose</div>
                                    <div class="td">
                                        <p>
                                            This information is collected and used to build out and provide you access to services, and to respond to your requests.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p>This information will not be shared with any other entity.</p>
                            
    </div>
  )
}

export default InformationCollectionTable3
