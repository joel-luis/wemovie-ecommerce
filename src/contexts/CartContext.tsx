import { GameInfo } from 'components/GameItem'
import React, { createContext, useContext, useState, ReactNode } from 'react'

type CartItem = GameInfo & {
  quantity: number
}

type CartContextType = {
  clickedButtons: number[]
  cartItems: CartItem[]
  showCart: boolean
  handleButtonClick: (item: GameInfo) => void
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  changeQuantity: (id: number, quantity: number) => void
  toggleCartVisibility: () => void
}

const CartContext = createContext({} as CartContextType)

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [clickedButtons, setClickedButtons] = useState<number[]>([])
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const handleButtonClick = (item: GameInfo) => {
    if (cartItems.some((i) => i.id === item.id)) {
      return
    }

    addToCart({ ...item, quantity: 1 })
    setClickedButtons((prev) => [...prev, item.id])
  }

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item])
  }

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
    setClickedButtons((prev) => prev.filter((itemId) => itemId !== id)) // Re-enable button when removed
  }

  const changeQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item,
      ),
    )
  }

  const toggleCartVisibility = () => {
    setShowCart((prevShowCart) => !prevShowCart)
  }

  return (
    <CartContext.Provider
      value={{
        clickedButtons,
        cartItems,
        showCart,
        handleButtonClick,
        addToCart,
        removeFromCart,
        changeQuantity,
        toggleCartVisibility,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
