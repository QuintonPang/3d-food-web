/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: gauvain_boiche (https://sketchfab.com/gauvain_boiche)
license: CC-BY-NC-ND-4.0 (http://creativecommons.org/licenses/by-nc-nd/4.0/)
source: https://sketchfab.com/3d-models/jesse-riggle-futuristic-micro-apartments-52c8c2d0b629449fb5f9bb76033028fb
title: [Jesse Riggle] - Futuristic Micro-Apartments
*/

import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { useGLTF, Clone, MeshDistortMaterial } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import {  useBox, usePlane } from '@react-three/cannon'

const Rice = ({...props}) => {
    const {nodes,materials} = useGLTF( 'scene.gltf')
    const group = useRef()
    const [planeRef] = useBox(()=>({rotation:[-Math.PI/2,0,0],args:[length*scale+2,width*scale+2,0.1*scale]}))


   
  const scale = props.scale
  const height = (nodes.Rice.children[0].geometry.boundingBox.max.y-nodes.Rice.children[0].geometry.boundingBox.min.y ) * scale
  const length = (nodes.Rice.children[0].geometry.boundingBox.max.x-nodes.Rice.children[0].geometry.boundingBox.min.x) * scale
  const width = (nodes.Rice.children[0].geometry.boundingBox.max.z-nodes.Rice.children[0].geometry.boundingBox.min.z) * scale

  // set mass, position and length, width and height of collision box
  const [ref,api] = useBox(()=>({mass:1,position:[0,0.1*scale ,0],args: [length, height, width]}))
  return(
    <group position={[0,0,0]} ref={group} {...props} dispose={null}>
     <mesh ref={ref} onClick={()=>{api.velocity.set(0,5*scale,0)}} position={[0,0.1*scale,0]} scale={scale} castShadow receiveShadow geometry={nodes.Rice.children[0].geometry} material={nodes.Rice.children[0].material}/>
     <mesh position={[0,0,0]} ref={planeRef} rotation={[-Math.PI/2,0,0]}> 

        {/* args is length and width and height  */}
        <boxGeometry attach="geometry" args ={[length*scale+2,width*scale+2,0.1*scale]}/>
        <meshLambertMaterial attach="material" color="lightblue"/>
        <directionalLight/>
    </mesh>
   </group>
     
  )
}

export default Rice

useGLTF.preload('scene.gltf')