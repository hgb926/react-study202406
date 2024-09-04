import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css';

const Chart = ({ dataPoints }) => {

    /*
        dataPoints 배열에서 12개 요소의 value를 합산하여 연도 지출 총액을 구하고
        그리고 각 ChartBar에 해당월 지출총액 / 연도지출총액 비율을 전달
     */

    // 1년치 총액
    const totalValue = dataPoints
                        .map(dp => dp.value)
                        .reduce((acc, cur) => acc + cur, 0);

    // console.log(`totalValue: `, totalValue)

    return (
        <div className='chart'>
            {
                dataPoints
                    .map(dp => <ChartBar
                        key={dp.label}
                        label={dp.label}
                        currentMonthValue={dp.value}
                        totalValue={totalValue}
                    />)
            }
        </div>
    )
}

export default Chart