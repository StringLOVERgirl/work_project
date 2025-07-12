
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';
// import { cont } from "./mainscript.js"; 


export function init3d(element) {
// console.log(cont)
const scene = new THREE.Scene();
//   Создаём объект сцена — это как виртуальный мир, куда мы будем помещать 3D-объекты (кубы, сферы, камеры, свет и т.д.).
// THREE.Scene() — класс библиотеки для сцены.

// том ты будешь добавлять дальше:

//     Камеру — чтобы видеть сцену (откуда и под каким углом смотришь)

//     Рендерер — чтобы рисовать картинку сцены на экране (в браузере)

//     Объекты — например, кубы, сферы, линии

//     Анимацию — чтобы обновлять картинку много раз в секунду, создавая движение

console.log(scene)
// scene.background = new THREE.Color('skyblue'); // цвет неба


const camera = new THREE.PerspectiveCamera(  75,                               // угол обзора
window.innerWidth / window.innerHeight, // соотношение сторон //  масштабирование по сути масштабирующий коэфеифицнет
//  чтобы избежать сжатия
0.1,                              // ближняя граница обзора
1000 )

camera.position.z = 5;

//   const renderer = new THREE.WebGLRenderer({ antialias: true });
const canvas = document.createElement('canvas');
canvas.className = 'Canvas3d'
const context = canvas.getContext('webgl'); 

const renderer = new THREE.WebGLRenderer({ antialias: true,   canvas: canvas, context: context})

    renderer.setSize(window.innerWidth/1.3, window.innerHeight/1.3) 

element.appendChild(renderer.domElement);


//  "Пожалуйста, дай мне доступ к WebGL API на этом холсте"
//  (то есть создаём контекст WebGL вручную, не полагаясь на автоматику Three.js)
//antialias: true — сглаживание краёв
//setSize — чтобы холст занимал весь экран
  canvas.style.width = `${window.innerWidth / 1.3}px`;
  canvas.style.height = `${window.innerHeight / 1.3}px`;
  window.addEventListener('resize', ()=>{
    canvas.style.width = `${window.innerWidth / 1.3}px`;
    canvas.style.height = `${window.innerHeight /1.3 }px`;
  })

 function resizeCuber (){
  let width = window.innerWidth/1.3
  let height = window.innerHeight/1.3
    renderer.setSize(width, height ) 
    // camera.aspect = (width/2)/ (height/2); // ?
         camera.aspect = width/height; // ?

    camera.updateProjectionMatrix();// ?
}

window.addEventListener('resize',resizeCuber)


const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Белый свет, низкая интенсивность
scene.add(ambientLight)

// создает канвас 

const textureLoader = new THREE.TextureLoader();
const texture1 = textureLoader.load('./src/images/trtyakovsquare.png'); // Передняя грань
const texture2 = textureLoader.load('./src/images/trtyakovsquare.png'); // Задняя грань
const texture3 = textureLoader.load('./src/images/trtyakovsquare.png'); // Верхняя грань
const texture4 = textureLoader.load('./src/images/trtyakovsquare.png'); // Нижняя грань
const texture5 = textureLoader.load('./src/images/trtyakovsquare.png'); // Правая грань
const texture6 = textureLoader.load('./src/images/trtyakovsquare.png'); // Левая гра
const geometry = new THREE.BoxGeometry();
const materials = [
  // Правая грань
  new THREE.MeshStandardMaterial({
    map: texture5,
    color: 0xff0000,
    transparent: true, // Включаем режим прозрачности
    opacity: 0.7       // Устанавливаем непрозрачность 70% (0.0 - 1.0)
  }),
  // Левая грань
  new THREE.MeshStandardMaterial({
    map: texture6,
    transparent: true,
    opacity: 0.7,
    color: "white",
    roughness: 0.2 , metalness: 0.0
  }),
  // Верхняя грань
  new THREE.MeshStandardMaterial({
    map: texture3,
    transparent: true,
    color: 0xff0000,
    opacity: 0.7
  }),
  // Нижняя грань
  new THREE.MeshStandardMaterial({
    map: texture4,
    transparent: true,
    color: 0xff0000,
    opacity: 0.7
  }),
  // Передняя грань
  new THREE.MeshStandardMaterial({
    map: texture1,
    transparent: true,
    color: 0xff0000,
    opacity: 0.7
  }),
  // Задняя грань
  new THREE.MeshStandardMaterial({
    map: texture2,
    transparent: true,
    color: 0xff0000,
    opacity: 0.7
  })
];
 materials.forEach(e=>{e.side= THREE.DoubleSide
 e.depthWrite = false;})
// форма куб
const material = new THREE.LineBasicMaterial({ color: 'darkgray' ,

// LineBasic и MeshBasicMaterial не реагирует на свет
// нужен Standart

});
// color	Цвет материала
// wireframe	Показывает только каркас (сетка)
// transparent	Включает прозрачность
// opacity	Прозрачность (от 0 до 1)
// map	Текстура (картинка)
//  sideСторона: FrontSide, BackSide, DoubleSide
// const edges = new THREE.EdgesGeometry(geometry); // . ? раском
// Создаем объект LineSegments.
// Это объект Three.js, который рисует набор отдельных линейных сегментов.
// const cubeLines = new THREE.LineSegments(edges, material); ? раском
const cubeLines = new THREE.Mesh(geometry, materials);
scene.add(cubeLines)

let edges = new THREE.EdgesGeometry(geometry)
const lineMaterial = new THREE.LineBasicMaterial({ color: 'darkgray' }); // Черный цвет для ребер
const cubeEdges = new THREE.LineSegments(edges, lineMaterial);
scene.add(cubeEdges); // Добавляем ребра на сцену

// const directionalLight = new THREE.DirectionalLight(0xffffff, 2.0); // Белый свет, интенсивность 1.0
// // // Позиция света - очень важна! Экспериментируй.
// // // Например, свет падает сверху, немного спереди и справа
// directionalLight.position.set(-5, 5, -5);
// scene.add(directionalLight);

// THREE.DirectionalLight имитирует солнечный свет - светит с одного направления
// const light = new THREE.DirectionalLight(0xffffff, 1); // Белый свет, интенсивность 1
// light.position.set(5, 5, 5).normalize(); // Устанавливаем положение света

// const cube = new THREE.Mesh(geometry, material);
// Mesh() — соединяем форму и материал
// scene.add(cube);


// Сначала создаём сцену → const scene = new THREE.Scene()

// Потом камеру (чтобы видеть сцену)

// Потом рендерер (чтобы отрисовать на экране)

// Потом объекты (добавляем в сцену)

// Потом запускаем анимацию и рисуем сцену на экране
console.log(renderer);
console.log(renderer.domElement);
cubeLines.rotation.x = 0.3;
cubeEdges.rotation.x = 0.3; // <-- Добавлено
camera.position.z = 3
// rotation.x — это поворот вокруг оси X


renderer.render(scene, camera)

 function animate() {
  requestAnimationFrame(animate); // Запрашиваем следующий кадр анимации

  // Вращение куба (если нужно автоматическое вращение помимо OrbitControls)
  cubeLines.rotation.x += 0.005;
  cubeLines.rotation.y += 0.005;
  cubeEdges.rotation.x += 0.005; // <-- Добавлено
cubeEdges.rotation.y += 0.005; // <-- Добавлено

  renderer.render(scene, camera); // Рендерим сцену с новой позицией куба/камеры
} animate()
// нужно после каждого изменения
}