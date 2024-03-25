import React from 'react'

const InformationCollectionTable2 = () => {
  return (
    <div>
      <div class="flex-table">
                                <div class="flex-col">
                                    <div class="th">Personal Information Collected</div>
                                    <div class="td">
                                        <ul>
                                            <li>Internet Protocol (IP) Address</li>
                                            <li>Device ID</li>
                                            <li>Browser Type</li>
                                            <li>Internet Service Provider (ISP)</li>
                                            <li>Referring/Exit Pages</li>
                                            <li>Operating System</li>
                                            <li>Date/Time Stamp</li>
                                            <li>Clickstream Data</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="flex-col">
                                    <div class="th">Purpose</div>
                                    <div class="td">
                                        <p>
                                            This anonymous information is collected to improve Website functionality, and tailor more relevant content or services for you.
                                        </p>
                                    </div>
                                </div>
                            </div>
    </div>
  )
}

export default InformationCollectionTable2
