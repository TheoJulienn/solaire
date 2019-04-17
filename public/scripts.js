var camera, scene, renderer, controls;
var sphere, cube;

var soleil;

var soleil_mercure = 57.91
var taille_soleil = 1.392684*10

var taille_mercure = 0.0024367*10


init();
animate();
var t = 0;

function init() {

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(0, 5, 1.5).setLength(100);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
 
  controls = new THREE.OrbitControls(camera, renderer.domElement);

  var plane = new THREE.GridHelper(1000, 1000);
  scene.add(plane);
	
  //sphere de test	
  sphere = new THREE.Mesh(new THREE.SphereGeometry(taille_mercure, 16, 8), new THREE.MeshBasicMaterial({color: "red", wireframe: true}));
  sphere.position.set(57.91, 0, 0);
  var sphereAxis = new THREE.AxesHelper(20);
  sphere.add(sphereAxis);
  scene.add(sphere);


  //soleil
  soleil = new THREE.Mesh(new THREE.SphereGeometry(taille_soleil, 16, 8), new THREE.MeshBasicMaterial({color: "yellow", wireframe: true}));
  soleil.position.set(0, 0, 0);
  var soleilAxis = new THREE.AxesHelper(20);
  soleil.add(soleilAxis);
  scene.add(soleil);


  

  cube = new THREE.Mesh(new THREE.BoxGeometry(1.392684, 10, 10), new THREE.MeshBasicMaterial({color: "green", wireframe: true}));
  cube.position.set(20, 0, 0);
  var cubeAxis = new THREE.AxesHelper(20);
  cube.add(cubeAxis);  
  scene.add(cube);

  var worldAxis = new THREE.AxesHelper(20);
  scene.add(worldAxis);  
}

var delta;
function animate() {
  requestAnimationFrame(animate);
  
	t += 0.01;          
	sphere.rotation.y += 0.03;

	sphere.position.x = 57.91*Math.cos(t) ;
	sphere.position.z = 57.91*Math.sin(t) ;
	sphere.position.y = 10*Math.cos(t) // These to strings make it work

  render();
}

function render() {
  renderer.render(scene, camera);
}
