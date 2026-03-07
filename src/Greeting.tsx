interface GreetingProps {
  name: string
}

export function Greeting({ name }: GreetingProps) {
  const uppercased: string = name.toUperCase()
  return <h2>Hello, {uppercased}!</h2>
}
