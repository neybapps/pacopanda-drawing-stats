export default function Wrapper({
  className = "",
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <div className={`mx-auto px-7 max-w-screen-2xl ${className}`}>{children}</div>
}
