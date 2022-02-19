import * as React from "react"
import { render, screen, within } from "@testing-library/react"
import Home from "pages/Index"

const year = new Date().getFullYear()

describe("Renders the Home page", () => {
  test("Renders the correct content on the home page", () => {
    render(<Home title="home" />)
    const link1 = screen.getByRole("link", { name: /home/i })
    const link2 = screen.getByRole("link", { name: /counter/i })
    const link3 = screen.getByRole("link", { name: /about/i })
    within(link1).getByRole("listitem")
    within(link2).getByRole("listitem")
    within(link3).getByRole("listitem")
    screen.getByText(/create-react-vite-app/i)
    screen.getByRole("heading", { name: /home/i })
    screen.getByRole("img", { name: /logo/i })
    screen.getByText(/page has been open for seconds\./i)
    expect(screen.getByTestId("count")).toHaveTextContent("0")
    screen.getByText(`© ${year}`)
  })

  test.todo("Timer shows 10 after 10 seconds")
})
