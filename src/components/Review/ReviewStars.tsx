export const getStars = (rating: number) => {
  switch (rating) {
    case 1:
      return (
        <>
          <Star />
          <NoStar />
          <NoStar />
          <NoStar />
          <NoStar />
        </>
      )
    case 2:
      return (
        <>
          <Star />
          <Star />
          <NoStar />
          <NoStar />
          <NoStar />
        </>
      )
    case 3:
      return (
        <>
          <Star />
          <Star />
          <Star />
          <NoStar />
          <NoStar />
        </>
      )
    case 4:
      return (
        <>
          <Star />
          <Star />
          <Star />
          <Star />
          <NoStar />
        </>
      )
    case 5:
      return (
        <>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </>
      )
  }
}

export const Star = () => {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_420_128770)'>
        <path
          d='M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5796 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703ZM14.5177 5.78928L14.5175 5.78947L14.5177 5.78928ZM3.8834 13.5155C3.88344 13.5155 3.88349 13.5155 3.88353 13.5155L3.8834 13.5155Z'
          fill='#FFC531'
          stroke='#FFC531'
          stroke-width='1.2'
        />
      </g>
      <defs>
        <clipPath id='clip0_420_128770'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export const NoStar = () => {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_420_128770)'>
        <path
          d='M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5796 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703ZM14.5177 5.78928L14.5175 5.78947L14.5177 5.78928ZM3.8834 13.5155C3.88344 13.5155 3.88349 13.5155 3.88353 13.5155L3.8834 13.5155Z'
          fill='#E9E9E9'
          stroke='#E9E9E9'
          stroke-width='1.2'
        />
      </g>
      <defs>
        <clipPath id='clip0_420_128770'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
