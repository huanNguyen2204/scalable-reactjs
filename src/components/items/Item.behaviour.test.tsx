import { render, fireEvent } from '@testing-library/react'
import { ItemInterface } from '@/models/items/Item.interface'
import { ItemComponent } from './children/Item.component'

describe("Item.component: behaviour", () => {
  it("click event invokes onItemSelect handler as expected", () => {
    const model: ItemInterface = {
      id: 1,
      name: "Unit test item 1",
      selected: false
    }

    const onItemSelected = vitest.fn()
    const testid = "unit-test-item"

    const { container } = render(<ItemComponent testid={testid} model={model} onItemSelected={onItemSelected} />)

    const liElement = container.firstChild as HTMLElement
    fireEvent.click(liElement)
    expect(onItemSelected).toHaveBeenCalledTimes(1)
  })  
})