import React from "react"
import { useDispatch } from "react-redux"
import { loadData } from "../actions"

export const Connected = () => {
  const dispatch = useDispatch()
  const onClick = () => dispatch(loadData({}))
  return <button onClick={onClick}>Click me</button>
}
