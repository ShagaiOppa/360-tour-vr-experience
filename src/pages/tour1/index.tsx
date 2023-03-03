import * as THREE from 'three'
import { useLoader } from "@react-three/fiber"
// Dom components go here
export default function Page(props) {
  return (
    <></>
  )
}

function Sphere() {
  const texture = useLoader(THREE.TextureLoader, '/assets/image1.jpg')
  
  return (
    <mesh>
      <sphereGeometry attach="geometry" args={[500, 60, 40]} />
      <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
    </mesh>
  )
}

function Node() {
  const texture = useLoader(THREE.TextureLoader, '/icons/info.png')
  return (
    <sprite position={[-5,0,-400]} scale={[25, 25, 25]}>
      <spriteMaterial attach="material" map={texture} />
    </sprite>
  )
}
// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => {
  return (
    <>
    <Node />
    <Sphere />
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'tour1' } }
}
