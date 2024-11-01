import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Cube = ({position, rotation, color, size}) => {
  const ref = useRef()

  useFrame((state, delta) => {
    ref.current.rotation.x += delta
  })

  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function App() {
  return (
    <Canvas>

      <group>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />
      </group>

      <group position={[0, 0, 0]}>
        <Cube position={[1, 1, 0]} rotation={[Math.PI / 4, 4, 0]} color="green" size={[1, 1, 1]} />
        <Cube position={[-2, 1, -1]} rotation={[Math.PI / 4, 4, 0]} color="red" size={[1, 1, 1]} />
      </group>

    </Canvas>
  )
}

export default App
