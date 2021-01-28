type DataType = {
  attr: '累計人数'
  value: number
  children: [
    {
      attr: '合計件数'
      value: number
      children: [
        {
          attr: '陰性件数'
          value: number
        },
        {
          attr: '陽性件数'
          value: number
        }
      ]
    }
  ]
}

type TestedCasesType = {
  累計人数: number
  合計件数: number
  陰性件数: number
  陽性件数: number
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType) => {
  const formattedData: TestedCasesType = {
    累計人数: data.value,
    合計件数: data.children[0].value,
    陰性件数: data.children[0].children[0].value,
    陽性件数: data.children[0].children[1].value
  }
  return formattedData
}
