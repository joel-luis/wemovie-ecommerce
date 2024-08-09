import React, { useState } from 'react'
import { useCart } from 'contexts/CartContext'
import Empty from 'components/Empty'
import Image from 'next/image'
import { formatPrice } from 'utils/formatePrice'
import * as S from './styles'
import Button from 'components/Button'
import Success from 'components/Success'

export default function CartItems() {
  const [showSuccess, setShowSuccess] = useState(false)
  const { cartItems, removeFromCart, changeQuantity } = useCart()

  if (showSuccess) {
    return <Success />
  }

  return (
    <S.Cart>
      {cartItems.length > 0 ? (
        cartItems?.map(({ id, image, title, price, quantity }) => (
          <S.CartItem key={id}>
            <S.Image src={image} alt={title} />
            <S.Details>
              <S.Title>{title}</S.Title>
              <S.Price>{formatPrice(price)}</S.Price>
            </S.Details>
            <S.ProductInfo>
              <S.Quantity>
                <button onClick={() => changeQuantity(id, quantity - 1)}>
                  <Image
                    src="/images/removeProduct.svg"
                    alt="minus icon"
                    width={18}
                    height={18}
                  />
                </button>
                <input type="number" value={quantity} readOnly />
                <button onClick={() => changeQuantity(id, quantity + 1)}>
                  <Image
                    src="/images/addProduct.svg"
                    alt="plus icon"
                    width={18}
                    height={18}
                  />
                </button>
              </S.Quantity>
              <S.Subtotal>{formatPrice(Number(price) * quantity)}</S.Subtotal>
              <S.RemoveButton onClick={() => removeFromCart(id)}>
                <Image
                  src="/images/trash.svg"
                  alt="trash icon"
                  width={18}
                  height={18}
                />
              </S.RemoveButton>
            </S.ProductInfo>
          </S.CartItem>
        ))
      ) : (
        <Empty />
      )}
      {cartItems.length > 0 && (
        <S.FooterCart>
          <Button onClick={() => setShowSuccess(true)} hasIcon={false}>
            FINALIZAR PEDIDO
          </Button>
          <S.Total>
            <span>TOTAL</span>
            <span>
              {formatPrice(
                cartItems.reduce(
                  (total, item) => total + Number(item.price) * item.quantity,
                  0,
                ),
              )}
            </span>
          </S.Total>
        </S.FooterCart>
      )}
    </S.Cart>
  )
}
