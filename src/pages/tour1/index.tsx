import * as THREE from 'three'
import { useLoader } from "@react-three/fiber"

// Dom components go here
export default function Page(props) {
  return (
    <></>
  )
}

function Dome() {
  const texture = useLoader(THREE.TextureLoader, '/assets/image1.jpg')
  return (
    <mesh>
      <sphereGeometry attach="geometry" args={[500, 60, 40]} />
      <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
    </mesh>
  )
}
// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => <Dome />

export async function getStaticProps() {
  return { props: { title: 'tour1' } }
}
