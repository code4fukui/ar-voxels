import * as THREE from "https://code4fukui.github.io/three.js/build/three.module.js";

/**
 * @author mr.doob / http://mrdoob.com/
 * based on http://papervision3d.googlecode.com/svn/trunk/as3/trunk/src/org/papervision3d/objects/primitives/Plane.as
 */

export const createGeometryPlane = ( width, height, segments_width, segments_height ) => {
  const geo = new THREE.BufferGeometry();

	var ix, iy,
	width_half = width / 2,
	height_half = height / 2,
	gridX = segments_width || 1,
	gridY = segments_height || 1,
	gridX1 = gridX + 1,
	gridY1 = gridY + 1,
	segment_width = width / gridX,
	segment_height = height / gridY;


  const vertices = [];
	for( iy = 0; iy < gridY1; iy++ ) {

		for( ix = 0; ix < gridX1; ix++ ) {

			var x = ix * segment_width - width_half;
			var y = iy * segment_height - height_half;

			vertices.push(x, -y, 0);
		}

	}

  const indices = [];
  const addFace4 = (i0, i1, i2, i3) => {
    indices.push(
      i0, i1, i2,
      i2, i3, i0,
    );
  };
	for( iy = 0; iy < gridY; iy++ ) {

		for( ix = 0; ix < gridX; ix++ ) {

			var a = ix + gridX1 * iy;
			var b = ix + gridX1 * ( iy + 1 );
			var c = ( ix + 1 ) + gridX1 * ( iy + 1 );
			var d = ( ix + 1 ) + gridX1 * iy;

			addFace4(a, b, c, d);
      /*
			this.uvs.push( [
						new THREE.UV( ix / gridX, iy / gridY ),
						new THREE.UV( ix / gridX, ( iy + 1 ) / gridY ),
						new THREE.UV( ( ix + 1 ) / gridX, ( iy + 1 ) / gridY ),
						new THREE.UV( ( ix + 1 ) / gridX, iy / gridY )
					] );
      */
		}
	}

	//this.computeCentroids();
	geo.setIndex(indices);
  geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(vertices), 3));
  geo.computeVertexNormals();
  return geo;
};
