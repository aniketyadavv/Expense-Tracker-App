import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import Chart from '../Chart/Chart';

function Dashboard() {
    return (
        <DashboardStyled>
            <InnerLayout>
                <Chart/>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`

`;
export default Dashboard