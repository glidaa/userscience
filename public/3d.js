function init() {
    // create a scene
    scene = new THREE.Scene();
  
    // create a camera
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;
  
    // create a renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0x000000); // set background color to black
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
  
    // create a light
    light = new THREE.PointLight(0xffffff, 1, 0);
    light.position.set(0, 0, 0);
    scene.add(light);
  
    // create the sun
    sun = new THREE.Mesh(
      new THREE.SphereGeometry(10, 32, 32),
      new THREE.MeshBasicMaterial({ map: sunTexture })
    );
    scene.add(sun);
  
    // create the asteroid
    asteroid = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshBasicMaterial({ map: asteroidTexture })
    );
    asteroid.position.set(15, 0, 0);
    scene.add(asteroid);
  
    // create the godrays effect
    godraysEffect = new THREE.ShaderPass(THREE.ShaderGodRays);
    godraysEffect.uniforms["fX"].value = window.innerWidth / 2;
    godraysEffect.uniforms["fY"].value = window.innerHeight / 2;
    godraysEffect.uniforms["fExposure"].value = 0.6;
    godraysEffect.uniforms["fDecay"].value = 0.93;
    godraysEffect.uniforms["fDensity"].value = 0.96;
    godraysEffect.uniforms["fWeight"].value = 0.4;
  }
  