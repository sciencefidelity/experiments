import * as React from "react"
import { fireEvent, render, screen, within } from "@testing-library/react"
import Counter from "../Counter"

const year = new Date().getFullYear()

describe("Renders the Counter page and interacts with the counter", () => {
  test("Renders the correct content on the counter page", () => {
    render(<Counter title="counter" />)
    const link1 = screen.getByRole("link", { name: /home/i })
    const link2 = screen.getByRole("link", { name: /counter/i })
    const link3 = screen.getByRole("link", { name: /about/i })
    within(link1).getByRole("listitem")
    within(link2).getByRole("listitem")
    within(link3).getByRole("listitem")
    screen.getByText(/create-react-vite-app/i)
    screen.getByRole("heading", { name: /counter/i })
    screen.getByRole("button", {  name: /–/i})
    screen.getByRole("button", {  name: /\+/i})
    screen.getByText(/the button has been pushed times\./i)
    expect(screen.getByTestId("count")).toHaveTextContent("0")
    screen.getByText(`© ${year}`)
  })

  test("Counter shows 5 after being incremented 5 times", () => {
    render(<Counter title="counter" />)
    expect(screen.getByTestId("count")).toHaveTextContent("0")
    fireEvent.click(screen.getByRole("button", {  name: /\+/i}))
    fireEvent.click(screen.getByRole("button", {  name: /\+/i}))
    fireEvent.click(screen.getByRole("button", {  name: /\+/i}))
    fireEvent.click(screen.getByRole("button", {  name: /\+/i}))
    fireEvent.click(screen.getByRole("button", {  name: /\+/i}))
    expect(screen.getByTestId("count")).toHaveTextContent("5")
  })

  test("Counter shows -3 after being decremented 3 times", () => {
    render(<Counter title="counter" />)
    expect(screen.getByTestId("count")).toHaveTextContent("0")
    fireEvent.click(screen.getByRole("button", {  name: /–/i}))
    fireEvent.click(screen.getByRole("button", {  name: /–/i}))
    fireEvent.click(screen.getByRole("button", {  name: /–/i}))
    expect(screen.getByTestId("count")).toHaveTextContent("-3")
  })
})
