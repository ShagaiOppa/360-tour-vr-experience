import * as THREE from 'three'
import { useVideoTexture } from '@react-three/drei'
import { generateV4ReadSignedUrl } from "@/utils/storage";
// Dom components go here
export default function Page(props) {
  return (
    <></>
  )
}

function Comp(props: { url: string}) {
  const {url} = props;
  const texture = useVideoTexture(url, { start: true })
  return (
    <mesh>
      <sphereGeometry attach="geometry" args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} toneMapped={false} side={THREE.BackSide}/>
    </mesh>
  )
}
// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => {
  return (
    <Comp url={'https://storage.googleapis.com/360-tour-vr-experience-bucket-public/VR_TEST_V1_4k.mp4'} />
  )
}

export async function getStaticProps() {
  return { props: { title: 'tour3' } }
}
