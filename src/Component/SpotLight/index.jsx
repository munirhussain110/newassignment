import { SpotLight } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import {Vector3} from 'three'
import { Data } from '../../Data'
const MovingSpot = ({ vec = new Vector3(), ...props }) => {
    const light = useRef()
    const viewport = useThree((state) => state.viewport)
    useFrame((state) => {
      light.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1)
      light.current.target.updateMatrixWorld()
    })
    return <SpotLight castShadow ref={light} penumbra={Data.spotlight.penumbra} distance={Data.spotlight.distance} angle={Data.spotlight.angle} attenuation={Data.spotlight.attenuation} anglePower={Data.spotlight.anglePower} intensity={Data.spotlight.intensity } {...props} />
  }
  export default MovingSpot