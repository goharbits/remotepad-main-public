import React, { useState } from 'react'
import DashboardLayout from './DashboardLayout'
import DashboardWorkTypeContent from '../../components/dashboardworkType/DashboardWorkTypeContent'
import WorkTypeSteps from '../../components/worktypeSteps/WorkTypeSteps'

const DashboardWorkType = () => {

    const [workTypeNumber, setWorkTypeNumber] = useState(1)

    return (
        <>
            <DashboardLayout>
                {workTypeNumber === "stepsComplete" ? < DashboardWorkTypeContent /> : <WorkTypeSteps setWorkTypeNumber={setWorkTypeNumber} workTypeNumber={workTypeNumber} />}
            </DashboardLayout>
        </>
    )
}

export default DashboardWorkType