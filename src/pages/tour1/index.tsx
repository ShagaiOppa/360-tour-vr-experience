import * as THREE from 'three'
import { useLoader, useThree } from "@react-three/fiber"
import { useState } from 'react';

// Dom components go here
export default function Page(props) {
  return (
    <></>
  )
}

function Dome() {
  const [isVR, setIsVR] = useState(false);
  const { gl } = useThree();
  const texture = useLoader(THREE.TextureLoader, '/assets/image1.jpg')

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     //
  //       // document.body.appendChild( VRButton.createButton( renderer ) );
  //       const isSupported =  navigator.xr.isSessionSupported('immersive-vr')
  //       console.log({isSupported});

  //       if (!isVR && gl.xr) {
  //     gl.xr.enabled = true;
  //     gl.xr.setReferenceSpaceType('local');
  //     const session = gl.xr.getSession();
  //     if (session) {
  //       session.requestReferenceSpace('local').then((refSpace) => {
  //         session.requestAnimationFrame((time, frame) => {
  //           gl.xr.setReferenceSpace(refSpace);
  //           gl.xr.setSession(session);
  //         });
  //       });
  //     }
  //   } else if (gl.xr && gl.xr.getSession()) {
  //     gl.xr.getSession().then((session) => {
  //       session.end();
  //     });
  //   }
        

  //   }, 5000)
  
  //   return () => {
  //     clearTimeout(timer)
  //   }
  // }, [])
  
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
