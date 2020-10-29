// we are using window onload event here but this is not mandatory
window.onload = function () {

    // pass the id of the div that will wrap the canvas to set up our WebGL context and append the canvas to our wrapper
    var webGLCurtain = new Curtains({
        container: "canvas"
    });

    var planeKeeper = document.getElementsByClassName("plane");

    const planeElements = [];
    const planes = [];

    var params = {
        vertexShaderID: "plane-vs", // our vertex shader ID
        fragmentShaderID: "plane-fs", // our framgent shader ID
        widthSegments: 40,
        heightSegments: 40, // we now have 40*40*6 = 9600 vertices !
        uniforms: {
            time: {
                name: "uTime", // uniform name that will be passed to our shaders
                type: "1f", // this means our uniform is a float
                value: 0,
            },
        }
    }

    for (let i = 0; i <planeKeeper.length; i++ ) {
        planeElements.push(document.getElementsByClassName("plane")[i]);
        planes.push(webGLCurtain.addPlane(planeElements[i], params));
        planes[i].setPerspective(0);

        planeElements[i].addEventListener("mouseenter", () => {
            planes[i].onRender(function () {
                planes[i].setPerspective(35);
                planes[i].uniforms.time.value++;
            });
        })

        planeElements[i].addEventListener("mouseleave", () => {
            planes[i].onRender(function () {
                // update our time uniform value
                planes[i].setPerspective(0);
                planes[i].uniforms.time.value++;
            });
        })
    }

    // var planeElement = document.getElementsByClassName("plane")[0];
    // var planeElement2 = document.getElementsByClassName("plane")[1];

    // var plane = webGLCurtain.addPlane(planeElement, params);
    // var plane2 = webGLCurtain.addPlane(planeElement2, params);
    // plane.setPerspective(0);
    // plane2.setPerspective(0);


    // planeElement.addEventListener("mouseenter", () => {
    //     plane.onRender(function () {
    //         plane.setPerspective(35);
    //         plane.uniforms.time.value++;
    //     });
    // })

    // planeElement2.addEventListener("mouseenter", () => {
    //     plane.onRender(function () {
    //         // update our time uniform value
    //         plane2.setPerspective(35);
    //         plane2.uniforms.time.value++;
    //     });
    // })

    // planeElement.addEventListener("mouseleave", () => {
    //     plane.onRender(function () {
    //         // update our time uniform value
    //         plane.setPerspective(0);
    //         plane.uniforms.time.value++;
    //     });
    // })
    // planeElement2.addEventListener("mouseleave", () => {
    //     plane.onRender(function () {
    //         // update our time uniform value
    //         plane2.setPerspective(0);
    //         plane2.uniforms.time.value++;
    //     });
    // })

}

  // once our plane is ready, we could start listening to mouse/touch events and update its uniforms
