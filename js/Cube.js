import * as THREE from "https://code4fukui.github.io/three.js/build/three.module.js";

/**
 * @author mr.doob / http://mrdoob.com/
 */

export const createGeometryCube = (width, height, depth) => {
  const geo = new THREE.BufferGeometry();

  const vertices = [];
  const indices = [];

	const v = (x, y, z) => vertices.push(x, y, z);
	const f4 = (i0, i1, i2, i3) => {
    indices.push(
      i0, i1, i2,
      i2, i3, i0,
    );
	};

	const width_half = width / 2;
	const height_half = height / 2;
	const depth_half = depth / 2;

	v(  width_half,  height_half, -depth_half );
	v(  width_half, -height_half, -depth_half );
	v( -width_half, -height_half, -depth_half );
	v( -width_half,  height_half, -depth_half );
	v(  width_half,  height_half,  depth_half );
	v(  width_half, -height_half,  depth_half );
	v( -width_half, -height_half,  depth_half );
	v( -width_half,  height_half,  depth_half );

	f4( 0, 1, 2, 3 );
	f4( 4, 7, 6, 5 );
	f4( 0, 4, 5, 1 );
	f4( 1, 5, 6, 2 );
	f4( 2, 6, 7, 3 );
	f4( 4, 0, 3, 7 );


  geo.setIndex(indices);
  geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(vertices), 3));
  return geo;
};
