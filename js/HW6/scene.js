/*
function sceneDesign() {

  // add obstacles to the scene
  scene.obstacles = [];
  scene.obstacles.push ( new Obstacle (new THREE.Vector3(150,0,150), 50) )
  scene.obstacles.push ( new Obstacle (new THREE.Vector3(-100,0,200), 30) )
  scene.obstacles.push ( new Obstacle (new THREE.Vector3(0,0,-100), 60) )

  scene.targets = [];
  scene.targets.push (new Target (1, new THREE.Vector3 (300,0,300) ));
  scene.targets.push (new Target (2, new THREE.Vector3 (-200,0,150) ));
  scene.targets.push (new Target (3, new THREE.Vector3 (250,0,-200) ));
  scene.targets.push (new Target (4, new THREE.Vector3 (0,0,-200) ));

}
*/

function sceneFromJSON () {
  const JSONStr = '{"obstacles":[{"center":{"x":0.6985032967754637,"y":5.632239741437488e-14,"z":-253.6535280079917},"size":20},{"center":{"x":-256.2728998272292,"y":-2.282132221654513e-13,"z":3.780982305346729},"size":20},{"center":{"x":-5.274800877547517,"y":-7.13526683751744e-14,"z":321.343850706326},"size":20},{"center":{"x":250.93367236000304,"y":8.261668182140261e-16,"z":-3.720724574654556},"size":20},{"center":{"x":-152.9001473055643,"y":-3.852293062562748e-14,"z":173.49185601079537},"size":20},{"center":{"x":-110.28090523378778,"y":3.351614616515491e-14,"z":-150.94330338028672},"size":20},{"center":{"x":172.81867348717202,"y":-1.9551980063012515e-13,"z":-143.45709873861472},"size":20},{"center":{"x":192.6107885754496,"y":-2.697739387710317e-13,"z":190.9538101234893},"size":20}],"targets":[{"id":0,"pos":{"x":-5.309112272251658,"y":-2.2797982578099017e-13,"z":2.7298584352579383}},{"id":1,"pos":{"x":269.4196269667891,"y":5.739073869621138e-14,"z":-258.46490940677506}},{"id":2,"pos":{"x":-246.0419207916193,"y":-6.207494798993268e-14,"z":279.56071263650375}},{"id":3,"pos":{"x":-255.5041856827715,"y":5.4099714869675936e-14,"z":-243.64345572792263}},{"id":4,"pos":{"x":232.8091066968411,"y":-6.285165532161014e-14,"z":283.05869148602227}}]}';

  let myScene = JSON.parse (JSONStr);

  scene.obstacles = []
  myScene.obstacles.forEach (function (obs) {
  	scene.obstacles.push (new Obstacle (new THREE.Vector3 (obs.center.x, obs.center.y, obs.center.z), 30))
  })

  scene.targets = []
  myScene.targets.forEach (function (tt) {
  	scene.targets.push (new Target (tt.id, new THREE.Vector3 (tt.pos.x, tt.pos.y, tt.pos.z) ))
  })

}
