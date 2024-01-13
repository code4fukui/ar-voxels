import { THREE } from "https://code4fukui.github.io/egxr.js/egxr.js";

export const createLine = (len) => {
	const material = new THREE.LineBasicMaterial({
		//color: 0xff0000, // red
		//color: 0x0000ff, // blue
		color: 0xffffff, // white
	});
	const points = [];
	points.push(new THREE.Vector3(0, 0, 0));
	points.push(new THREE.Vector3(0, 0, -len));
	const geometry = new THREE.BufferGeometry().setFromPoints(points);
	const line = new THREE.Line(geometry, material);
	return line;
};
