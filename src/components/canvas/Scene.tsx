import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { useRef } from 'react'
import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'

function Controls(props) {
  const { camera, gl } = useThree()
  const ref = useRef(null!)
  useFrame(() => ref.current.update())
  return <OrbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />
}

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <>
      <VRButton />
      <Canvas {...props}>
        <XR>
          <Controllers />
          <Hands />
          <directionalLight intensity={0.75} />
          <ambientLight intensity={0.75} />
          {children}
          <Preload all />
          {/* <OrbitControls /> */}
          <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2}  rotateSpeed={-0.5} />
        </XR>
      </Canvas>
    </>
  )
}
