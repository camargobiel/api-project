import { Request, Response } from 'express'
import axios, { AxiosResponse } from 'axios'

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

const getAll = async (req: Request, res: Response) => {
  const result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
  const posts: [Post] = result.data
  return res.status(200).json({ message: posts })
}

const getOne = async (req: Request, res: Response) => {
  const id: string = req.params.id
  const result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const post: Post = result.data
  return res.status(200).json({ message: post })
}

const updateOne = async (req: Request, res: Response) => {
  const id: string = req.params.id
  const title: string = req.params.title ?? null
  const body: string = req.params.body ?? null

  const response: AxiosResponse = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    ...(title && { title }),
    ...(body && { body })
  })

  return res.status(200).json({ message: response.data })
}

const deleteOne = async (req: Request, res: Response) => {
  const id: string = req.params.id

  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`); // pode dar erro

  return res.status(200).json({
    message: 'post deleted successfully'
  })
}

const addOne = async (req: Request, res: Response) => {
  const title: string = req.body.title
  const body: string = req.body.body

  const response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
    title,
    body
  })

  return res.status(200).json({
    message: response.data
  })
}

export default { getAll, getOne, updateOne, deleteOne, addOne }