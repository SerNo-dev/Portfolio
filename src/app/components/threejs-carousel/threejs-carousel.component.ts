import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as THREE from 'three';
@Component({
  selector: 'app-threejs-carousel',
  templateUrl: './threejs-carousel.component.html',
  styleUrls: ['./threejs-carousel.component.scss']
})
export class ThreejsCarouselComponent implements OnInit {



  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private logoObjects: { mesh: THREE.Object3D, rotationSpeed: number }[] = [];

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.initThreeJS();
  }

  initThreeJS(): void {
    const container = this.elRef.nativeElement.querySelector('#carousel3d');

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    
    this.camera.zoom = 3.0; 
    this.camera.updateProjectionMatrix();
    
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(this.renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    this.scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 0.5, 50);
    pointLight1.position.set(5, 5, 5);
    this.scene.add(pointLight1);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
    directionalLight.position.set(5, 10, 7.5);
    this.scene.add(directionalLight);

    const logos = [
       { url: 'assets/imgs/java.png', name: 'Java' },
      { url: 'assets/imgs/html.png', name: 'HTML' },
      { url: 'assets/imgs/css.png', name: 'CSS' },
      { url: 'assets/imgs/javascript.png', name: 'JavaScript' },
      { url: 'assets/imgs/angular.png', name: 'Angular' },
      { url: 'assets/imgs/spring.png', name: 'Spring' },
      { url: 'assets/imgs/sass.png', name: 'Sass' },
      { url: 'assets/imgs/postgresql.png', name: 'Postgresql' },
      { url: 'assets/imgs/typescript.png', name: 'Typescript' },
      { url: 'assets/imgs/bootstrap.png', name: 'Bootstrap' },     
      { url: 'assets/imgs/git-logo.png', name: 'Git' },
    ];

    logos.forEach((logo, index) => {
      const sphereGeometry = new THREE.SphereGeometry(3.5, 16, 16); // Sfere più grandi

      const sphereMaterial = new THREE.MeshPhongMaterial({
        color: 0x66d9ff,
        shininess: 80,
        specular: 0xffffff,
        transparent: true,
        opacity: 0.8
      });

      const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);

      const texture = new THREE.TextureLoader().load(logo.url);
      const logoMaterial = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
      const planeGeometry = new THREE.PlaneGeometry(4.0, 4.0); // Loghi più grandi
      const planeMesh = new THREE.Mesh(planeGeometry, logoMaterial);

      planeMesh.position.z = 3.51; // Posiziona il logo sopra la superficie della sfera
      sphereMesh.add(planeMesh);
      sphereMesh.position.y = 2; 

      const spacing = 10; 
      sphereMesh.position.x = (index - (logos.length - 1) / 2) * spacing;

      this.scene.add(sphereMesh);

      const rotationSpeed = Math.random() * 0.005 + 0.002;
      this.logoObjects.push({ mesh: sphereMesh, rotationSpeed });
    });

    this.camera.position.z = 55; 
    this.camera.position.y = 0; // Abbassa la posizione della telecamera

    const animate = () => {
      requestAnimationFrame(animate);

      this.logoObjects.forEach(obj => {
        obj.mesh.rotation.y += obj.rotationSpeed;
      });

      this.renderer.render(this.scene, this.camera);
    };

    animate();
  }
}