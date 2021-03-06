import * as THREE from './dist/js/build/three.module.js';
import {GLTFLoader} from './dist/js/examples/jsm/loaders/GLTFLoader.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//const cube = new THREE.Mesh( geometry, material );
//scene.add( cube );

const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );

const loader = new GLTFLoader();

loader.load( './models/conejito.gltf', 
 ( gltf ) => {

  scene.add( gltf.scene);
},


// called while loading is progressing
( xhr ) => {

  console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

},
// called when loading has errors
( error ) => {

  console.log( 'An error happened' );

});
// pollito

loader.load( './models/pollito.gltf', 
 ( gltf ) => {

  scene.add( gltf.scene);
},


// called while loading is progressing
( xhr ) => {

  console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

},
// called when loading has errors
( error ) => {

  console.log( 'An error happened' );

});

// sol

loader.load( './models/solesito.gltf', 
 ( gltf ) => {

  scene.add( gltf.scene);
},


// called while loading is progressing
( xhr ) => {

  console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

},
// called when loading has errors
( error ) => {

  console.log( 'An error happened' );

});

//otro

loader.load( './models/lugar.gltf', 
 ( gltf ) => {

  scene.add( gltf.scene);
},


// called while loading is progressing
( xhr ) => {

  console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

},
// called when loading has errors
( error ) => {

  console.log( 'An error happened' );

});

camera.position.z = 20;
camera.position.y = 10;
camera.position.x = 2;

function animate() {
  //cube.rotation.x += 0.01;
  //cube.rotation.y += 0.01;
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();