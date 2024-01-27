import '@/assets/styles/main.scss';

import { MeshBasicNodeMaterial, color } from 'three/examples/jsm/nodes/Nodes';
import { nodeFrame } from 'three/examples/jsm/renderers/webgl-legacy/nodes/WebGLNodes';

import {
    WebGLRenderer,
    PerspectiveCamera,
    Scene,
    BoxGeometry,
    Mesh,
    Color,
} from 'three';

let scene: Scene, camera: PerspectiveCamera, renderer: WebGLRenderer;
let cube: Mesh;

init();

function init() {

    scene = new Scene();
    scene.background = new Color(0xcce0ff);

    camera = new PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 5;

    renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicNodeMaterial();
    material.colorNode = color( 0x000000 );

    cube = new Mesh(geometry, material);
    scene.add(cube);

    animate();

}

function animate() {

    requestAnimationFrame(animate);

    nodeFrame.update();

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    render();

}

function render() {

    renderer.render(scene, camera);

}