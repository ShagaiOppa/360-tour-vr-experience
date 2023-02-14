import { useRef, forwardRef, useImperativeHandle } from 'react'

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Layout = forwardRef<HTMLAllCollection, Props>(({ children, ...props }, ref) => {
  const localRef = useRef()

  useImperativeHandle(ref, () => localRef.current)

  return (
    <div
      {...props}
      ref={localRef}
      className='absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden dom bg-zinc-900 text-gray-50'>
      {children}
    </div>
  )
})
Layout.displayName = 'Layout'

export default Layout
