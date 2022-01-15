import client from './';

export const CreateSaleService = async (userid) => {
  try {
    const res = await client.post(`/sales/${userid}`)
    // console.log(res.data)
    return res.data;
  } catch (error) {
    throw error;
  }
}
