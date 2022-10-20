import agent from './agent'
import apiUrls from './apiUrls'
import { dataURLtoFile } from './utils'

export const getCategories = async () => {
  // const {data} = await agent.get(apiUrls.CATEGORY);
  const { data } = await agent.get(apiUrls.CATEGORY)
  console.log('categories data', data)

  return data
}

export const newCategories = async params => {
  try {
    // const {data} = await agent.get(apiUrls.CATEGORY);
    const categoryData = new FormData()
    categoryData.append('icon', dataURLtoFile(params.icon, 'icon.jpeg'))
    categoryData.append('name', params.name)
    const { data } = await agent.post(apiUrls.CATEGORY, categoryData)
    // console.log('categories data', data)
    return data
  } catch (error) {
    return error.message
  }
}

export const editCategory = async params => {
  try {
    const { data } = await agent.patch(`${apiUrls.CATEGORY}${params.id}`, { name: params.name })
    return data
  } catch (error) {
    return error.message
  }
}
