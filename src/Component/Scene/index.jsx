import * as THREE from 'three'
import { useDepthBuffer, useVideoTexture } from "@react-three/drei"
import MovingSpot from "../SpotLight"
import { Data } from "../../Data"
const Scene = () => {
  const video = useVideoTexture("/drei_r.mp4")
  const depthBuffer = useDepthBuffer({ frames: 1 })
    return (
        <>
        <MovingSpot depthBuffer={depthBuffer} color="#0c8cbf" position={[Data.movingspot.x1, Data.movingspot.y1, Data.movingspot.z1]} />
        <MovingSpot depthBuffer={depthBuffer} color="#b00c3f" position={[Data.movingspot.x2, Data.movingspot.y2, Data.movingspot.z2]} />
        <mesh position={[Data.spherePosition.x, Data.spherePosition.y, Data.spherePosition.z]} castShadow receiveShadow dispose={null} >
            <sphereGeometry args={[0.9 , 32 , 32]} />
            <meshStandardMaterial color={"#fff"} roughness={0.5}/>
        </mesh>
        <mesh receiveShadow position={[Data.surfacePosition.x, Data.surfacePosition.y, Data.surfacePosition.z]} rotation-x={-Math.PI / 2}>
          <planeGeometry args={[50, 50]} />
          <meshBasicMaterial color={"#202020"}/>
        </mesh>
        <mesh receiveShadow position={[Data.VideoPosition.x, Data.VideoPosition.y, Data.VideoPosition.z]} rotation-y={Math.PI}>
          <planeGeometry args={[4, 4]} />
          <meshBasicMaterial map={video}  side={THREE.DoubleSide}/>
        </mesh>
      </>
    )
  }
export default Scene  