interface TitleProps {
  tag?: keyof JSX.IntrinsicElements
  text: string
}

const Title = ({ tag, text }: TitleProps) => {
  const Tag = tag || 'h1'
  return <Tag>{text}</Tag>
}
export default Title
