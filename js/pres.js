const genTypeOfHappouDiv_case_0 = "imgs/circleDot.png";
const genTypeOfHappouDiv_case_1 = "imgs/rightAngle.png";
const genTypeOfHappouDiv_case_2 = "imgs/rightAngle.png";
const genTypeOfHappouDiv_case_31 = "imgs/SquareImageOfAa.png";
const genTypeOfHappouDiv_case_32 = "imgs/SquareImageOfAb.png";
const genTypeOfHappouDiv_case_4 = "imgs/squaredDot.png";
const genTypeOfHappouDiv_case_85 = "imgs/H85.png";
const genTypeOfHappouDiv_case_61 = "imgs/rightTriangleAa.png";
const genTypeOfHappouDiv_case_62 = "imgs/rightTriangleAb.png";
const genTypeOfHappouDiv_case_71 = "imgs/rightTrapezoidAa.png";
const genTypeOfHappouDiv_case_72 = "imgs/rightTrapezoidAb.png";
const inputCache = document.getElementById("input-cache");
var happouDivsTextContentCache;

function addEventsForChildrenOfBigGuy() {
  var inputHappouDivs = document.getElementsByClassName("input-happou");
  var typeOfHappouDivs = document.getElementsByClassName("type-of-happou");

  
  //Clear inputCache
  inputCache.value = '';
  makeUpPreTag(inputHappouDivs[0], typeOfHappouDivs[0]);
  happouDivsTextContentCache = inputHappouDivs[0].innerHTML;

  inputHappouDivs[0].addEventListener("keyup", () => {
    let happouDivsTextContent = inputHappouDivs[0].innerHTML;
    if(happouDivsTextContent!==happouDivsTextContentCache) {
      //Clear inputCache
      inputCache.value = '';
      makeUpPreTag(inputHappouDivs[0], typeOfHappouDivs[0]);
      fillCanvasWithText(bindTextToArray(inputCache), formatDate(new Date(dateInput.value)));
      happouDivsTextContentCache = inputHappouDivs[0].innerHTML;
    }
    tooltipbouyActivate();
  });


  inputHappouDivs[0].addEventListener("click", () => {
    let happouDivsTextContent = inputHappouDivs[0].innerHTML;
    if(happouDivsTextContent!==happouDivsTextContentCache) {
      //Clear inputCache
      inputCache.value = '';
      makeUpPreTag(inputHappouDivs[0], typeOfHappouDivs[0]);
      makeUpPreTag(inputHappouDivs[1], typeOfHappouDivs[1]);
      makeUpPreTag(inputHappouDivs[2], typeOfHappouDivs[2]);
      fillCanvasWithText(bindTextToArray(inputCache), formatDate(new Date(dateInput.value)));
      happouDivsTextContentCache = inputHappouDivs[0].innerHTML;
    }
    tooltipbouyActivate();
  });


  inputHappouDivs[0].addEventListener("scroll", () => {
    typeOfHappouDivs[0].scrollTop = inputHappouDivs[0].scrollTop;
  });
  typeOfHappouDivs[0].addEventListener("scroll", () => {
    inputHappouDivs[0].scrollTop = typeOfHappouDivs[0].scrollTop;
  });


    
  
  
  fillCanvasWithText(bindTextToArray(inputCache), formatDate(new Date(dateInput.value)));
}
// Add makeUpPreTag event listener for the window
window.addEventListener("load", () => {
  addEventsForChildrenOfBigGuy();
});
function tooltipbouyActivate() {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const tooltipbouyPres = document.getElementsByClassName("tooltipbouy");
  const tooltiptextSpans = document.getElementsByClassName("tooltiptext");

  for (let i = 0; i < tooltipbouyPres.length; i++) {
    let tooltipbouyPre = tooltipbouyPres[i];
    let tooltiptextSpan = tooltiptextSpans[i];
    if (range.intersectsNode(tooltipbouyPre)) {
      tooltiptextSpan.style.display = "block";
    } else {
      tooltiptextSpan.style.display = "none";
    }
  }

  
}

function wrapInPre(container) {
  var childNodesOfContainer = container.childNodes;
  for (let i = 0; i < childNodesOfContainer.length; i++) {
      const child = childNodesOfContainer[i];
      let preElement = document.createElement('pre');
      if (child.nodeType === Node.TEXT_NODE&&child.textContent.trim() !== '') {
          preElement.appendChild(child.cloneNode());
          container.replaceChild(preElement, child);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
          if(child.children.length>1) {
              // Make sure all its children converted to PRE
              wrapInPre(child);
              // Unwrap its children
              while (child.firstChild) {
                  container.insertBefore(child.firstChild, child);
              }
              // Remove this node when all its children unwrapped
              container.removeChild(child);
          } else if (child.tagName.toLowerCase() !== 'pre') {
              // If the child is not already a pre tag
              // Convert the child element to a pre tag
              preElement.textContent = child.textContent.trim();
              container.replaceChild(preElement, child);    
          } else {
            if(child.textContent==="") {
              child.textContent=" "
            }
          }
      }
  }    
};

// Event for pre tags
function makeUpPreTag(inputHappou, typeOfHappouDiv) {

  // Get all the pre elements inside the div
  //var inputHappou = document.getElementById("input-happou");
  wrapInPre(inputHappou);
  var pres = inputHappou.querySelectorAll("pre");
  var listTypeOfHappou = [];

  if (pres.length === 0) {
    // If not, create a new pre element
    let pre = document.createElement("pre");

    // Set some default content or a non-breaking space
    pre.textContent = "";

    // Append the pre element to the div element
    inputHappou.appendChild(pre);
  } else {
    listTypeOfHappou = [];
    // Loop through each pre element
    pres.forEach((pre) => {
      // Get the text content of the pre element
      let text = pre.textContent.trim().replace(/ +(?= )/g, ""); //Remove double space

      // Remove any existing class name from the pre element
      pre.className = "";

      // Check the content of the pre element and assign the appropriate class name
      if (text === "") {
        // If the content empty, assign the empty-line class
        pre.className = "empty-line";
        listTypeOfHappou.push([0, 0, 0, 9]);
      } else if(text.trim().startsWith('.')) { 
        // If the content start with a dot, assign the circle-happou-class 
        text = text.substring(1);
        if(/^[0-9\s]+$/.test(text)) {
          let circleValues = text.split(" ");
          pre.className = "tooltipbouy happou-line pasta-line";
          if(circleValues.length==1) {
            listTypeOfHappou.push([
              parseInt(circleValues[0]),
              parseInt(circleValues[0]),
              1,
              0
            ]);
            inputCache.value = inputCache.value + '\n' + circleValues[0] + ' ' + circleValues[0] + ' 1 0';
          } else {listTypeOfHappou.push([
            parseInt(circleValues[0]),
            parseInt(circleValues[0]),
            parseInt(circleValues[1]),
            0
          ]);
            inputCache.value = inputCache.value + '\n' + circleValues[0] + ' ' + circleValues[0] +  ' ' + circleValues[1] + ' 0';
          }
        } else {
          //If the first character is dot (.) then but text contains other characters
          pre.className = "error-line";
          listTypeOfHappou.push([0, 0, 0, 99]);
        }

      } else if (/^[0-9\s]+$/.test(text)) {
        // If the content contains only digits and spaces, so it's happou
        let happouValues = text.split(" ");
        // Check width and height of the happou
        if (happouValues[0] - happouValues[1] < 0) {
          //If the first value smaller than second value, assign the error-line class
          pre.className = "error-line";
          listTypeOfHappou.push([0, 0, 0, 99]);
        } /*else if(happouValues.length>3) {
          // If 4th value don't follow rule, assign the error-line class
          [0,1,2,3,4,85,
            61,61000,61001,61010,61011,61100,61101,61110,61111,
            62,62000,62001,62010,62011,62100,62101,62110,62111,
            71,710000,710001,710010,710011,710100,710101,710110,710111,
                711000,711001,711010,711011,711100,711101,711110,711111,
            72,720000,720001,720010,720011,720100,720101,720110,720111,
                721000,721001,721010,721011,721100,721101,721110,721111].forEach((value)=> {
                  if(happouValues[4]!==value)
                })

        } */else {
          // Assign the happou-line class
          pre.className = "tooltipbouy happou-line pasta-line";
          //Add value to inputCache
          inputCache.value += '\n';
          inputCache.value += text;
          // Push type of happou
          switch (happouValues.length) {
            case 1:
              listTypeOfHappou.push([
                parseInt(happouValues[0]),
                parseInt(happouValues[0]),
                1,
                2
              ]);
              break;
            case 2:
              listTypeOfHappou.push([
                parseInt(happouValues[0]),
                parseInt(happouValues[1]),
                1,
                2
              ]);
              break;
            case 3:
              listTypeOfHappou.push([
                parseInt(happouValues[0]),
                parseInt(happouValues[1]),
                parseInt(happouValues[2]),
                2
              ]);
              break;
            case 4:
              listTypeOfHappou.push([
                parseInt(happouValues[0]),
                parseInt(happouValues[1]),
                parseInt(happouValues[2]),
                parseInt(happouValues[3]),
                0
              ]);
              break;
            default:
              listTypeOfHappou.push([
                parseInt(happouValues[0]),
                parseInt(happouValues[1]),
                parseInt(happouValues[2]),
                parseInt(happouValues[3]),
                parseInt(happouValues[4])
              ]);
              break;
          }
        }
      } else if (/^[A-Za-z0-9\s\-\,]+$/.test(text)) {
        // If the content contains only alphanumeric characters, spaces, hyphens, and commas, assign the product-line class
        pre.className = "product-line pasta-line";
        listTypeOfHappou.push([0, 0, 0, 999]);
        //Add value to inputCache
        inputCache.value += '\n';
        inputCache.value += text;
      } else if (/^[日月火水木金土（）0-9\(\)\/]+$/.test(text)) {
        // If the content contains 日月火水木金土（）0-9 ()/, assign the date-line class
        pre.className = "date-line";
        listTypeOfHappou.push([0, 0, 0, 998]);
      } else {
        // Otherwise, assign the error-line class
        pre.className = "error-line";
        listTypeOfHappou.push([0, 0, 0, 99]);
      }
    });
    genTypeOfHappouDiv(listTypeOfHappou, typeOfHappouDiv);
  }
}

function genTypeOfHappouDiv(list, typeOfHappouDiv) {
  //var typeOfHappouDiv = document.getElementById("type-of-happou");
  //var inputHappou = document.getElementById("input-happou");
  typeOfHappouDiv.innerHTML = "";
  list.forEach((item, index) => {
    // Create a new pre element
    pre = document.createElement("pre");
    switch (item[3]) {
      case 999:
        pre.className = "product-line";
        pre.textContent = " ";
        typeOfHappouDiv.appendChild(pre);
        break;
      case 998:
      pre.className = "date-line";
      pre.textContent = " ";
      typeOfHappouDiv.appendChild(pre);
      break;
      case 99:
        pre.className = "error-line";
        pre.textContent = " ";
        typeOfHappouDiv.appendChild(pre);
        break;
      case 9:
        pre.className = "empty-line";
        pre.textContent = " ";
        typeOfHappouDiv.appendChild(pre);
        break;

      case 0:
        pre.className = "tooltip happou-line";
        pre.innerHTML = " <span class='tooltiptext'></span>";
        pre.style.background = `url("${genTypeOfHappouDiv_case_0}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 1:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType12(item[0], item[1], item[2]);
        pre.style.background = `url("${genTypeOfHappouDiv_case_1}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 2:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType12(item[0], item[1], item[2]);
        pre.style.background = `url("${genTypeOfHappouDiv_case_2}")`;
        typeOfHappouDiv.appendChild(pre);
        break;

      case 3:
          pre.className = "tooltip happou-line";
          pre.innerHTML = svgType3(item[0], item[1], item[2]);
          pre.style.background = `url("${genTypeOfHappouDiv_case_31}")`;
          typeOfHappouDiv.appendChild(pre);
          break;
      case 31:
          pre.className = "tooltip happou-line";
          pre.innerHTML = svgType3(item[0], item[1], item[2]);
          pre.style.background = `url("${genTypeOfHappouDiv_case_31}")`;
          typeOfHappouDiv.appendChild(pre);
          break;
      case 32:
          pre.className = "tooltip happou-line";
          pre.innerHTML = svgType32(item[0], item[1], item[2]);
          pre.style.background = `url("${genTypeOfHappouDiv_case_32}")`;
          typeOfHappouDiv.appendChild(pre);
          break;

      case 4:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType4(item[0], item[1], item[2]);
        pre.style.background = `url("${genTypeOfHappouDiv_case_4}")`;
        typeOfHappouDiv.appendChild(pre);
        break;

      case 85:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType4(item[0], item[1], item[2]);
        pre.style.background = `url("${genTypeOfHappouDiv_case_85}")`;
        typeOfHappouDiv.appendChild(pre);
        break;

      case 61:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType61(item[0], item[1], item[2], 1, 1, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_61}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 61000:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType61(item[0], item[1], item[2], 0, 0, 0);
        pre.style.background = `url("${genTypeOfHappouDiv_case_61}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 61001:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType61(item[0], item[1], item[2], 0, 0, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_61}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 61010:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType61(item[0], item[1], item[2], 0, 1, 0);
        pre.style.background = `url("${genTypeOfHappouDiv_case_61}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 61011:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType61(item[0], item[1], item[2], 0, 1, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_61}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 61100:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType61(item[0], item[1], item[2], 1, 0, 0);
        pre.style.background = `url("${genTypeOfHappouDiv_case_61}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 61101:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType61(item[0], item[1], item[2], 1, 0, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_61}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 61110:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType61(item[0], item[1], item[2], 1, 1, 0);
        pre.style.background = `url("${genTypeOfHappouDiv_case_61}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 61111:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType61(item[0], item[1], item[2], 1, 1, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_61}")`;
        typeOfHappouDiv.appendChild(pre);
        break;

      case 62:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType62(item[0], item[1], item[2], 1, 1, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_62}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 62000:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType62(item[0], item[1], item[2], 0, 0, 0);
        pre.style.background = `url("${genTypeOfHappouDiv_case_62}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 62001:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType62(item[0], item[1], item[2], 0, 0, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_62}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 62010:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType62(item[0], item[1], item[2], 0, 1, 0);
        pre.style.background = `url("${genTypeOfHappouDiv_case_62}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 62011:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType62(item[0], item[1], item[2], 0, 1, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_62}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 62100:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType62(item[0], item[1], item[2], 1, 0, 0);
        pre.style.background = `url("${genTypeOfHappouDiv_case_62}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 62101:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType62(item[0], item[1], item[2], 1, 0, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_62}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 62110:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType62(item[0], item[1], item[2], 1, 1, 0);
        pre.style.background = `url("${genTypeOfHappouDiv_case_62}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 62111:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType62(item[0], item[1], item[2], 1, 1, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_62}")`;
        typeOfHappouDiv.appendChild(pre);
        break;

      case 71:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType71(item[0], item[1], item[2], item[4], 1, 1, 1, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_71}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 710000:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType71(item[0], item[1], item[2], item[4], 0, 0, 0, 0);
        pre.style.background = `url("${genTypeOfHappouDiv_case_71}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 710001:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType71(item[0], item[1], item[2], item[4], 0, 0, 0, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_71}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 710010:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType71(item[0], item[1], item[2], item[4], 0, 0, 1, 0);
        pre.style.background = `url("${genTypeOfHappouDiv_case_71}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 710011:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType71(item[0], item[1], item[2], item[4], 0, 0, 1, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_71}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 710100:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType71(item[0], item[1], item[2], item[4], 0, 1, 0, 0);
        pre.style.background = `url("${genTypeOfHappouDiv_case_71}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 710101:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType71(item[0], item[1], item[2], item[4], 0, 1, 0, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_71}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 710110:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType71(item[0], item[1], item[2], item[4], 0, 1, 1, 0);
        pre.style.background = `url("${genTypeOfHappouDiv_case_71}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 710111:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType71(item[0], item[1], item[2], item[4], 0, 1, 1, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_71}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 711000:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType71(item[0], item[1], item[2], item[4], 1, 0, 0, 0);
        pre.style.background = `url("${genTypeOfHappouDiv_case_71}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 711001:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType71(item[0], item[1], item[2], item[4], 1, 0, 0, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_71}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 711010:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType71(item[0], item[1], item[2], item[4], 1, 0, 1, 0);
        pre.style.background = `url("${genTypeOfHappouDiv_case_71}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 711011:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType71(item[0], item[1], item[2], item[4], 1, 0, 1, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_71}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 711100:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType71(item[0], item[1], item[2], item[4], 1, 1, 0, 0);
        pre.style.background = `url("${genTypeOfHappouDiv_case_71}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 711101:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType71(item[0], item[1], item[2], item[4], 1, 1, 0, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_71}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 711110:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType71(item[0], item[1], item[2], item[4], 1, 1, 1, 0);
        pre.style.background = `url("${genTypeOfHappouDiv_case_71}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 711111:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType71(item[0], item[1], item[2], item[4], 1, 1, 1, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_71}")`;
        typeOfHappouDiv.appendChild(pre);
        break;

      case 72:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType72(item[0], item[1], item[2], item[4], 1, 1, 1, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_72}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 720000:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType72(item[0], item[1], item[2], item[4], 0, 0, 0, 0);
        pre.style.background = `url("${genTypeOfHappouDiv_case_72}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 720001:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType72(item[0], item[1], item[2], item[4], 0, 0, 0, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_72}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 720010:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType72(item[0], item[1], item[2], item[4], 0, 0, 1, 0);
        pre.style.background = `url("${genTypeOfHappouDiv_case_72}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 720011:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType72(item[0], item[1], item[2], item[4], 0, 0, 1, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_72}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 720100:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType72(item[0], item[1], item[2], item[4], 0, 1, 0, 0);
        pre.style.background = `url("${genTypeOfHappouDiv_case_72}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 720101:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType72(item[0], item[1], item[2], item[4], 0, 1, 0, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_72}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 720110:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType72(item[0], item[1], item[2], item[4], 0, 1, 1, 0);
        pre.style.background = `url("${genTypeOfHappouDiv_case_72}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 720111:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType72(item[0], item[1], item[2], item[4], 0, 1, 1, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_72}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 721000:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType72(item[0], item[1], item[2], item[4], 1, 0, 0, 0);
        pre.style.background = `url("${genTypeOfHappouDiv_case_72}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 721001:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType72(item[0], item[1], item[2], item[4], 1, 0, 0, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_72}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 721010:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType72(item[0], item[1], item[2], item[4], 1, 0, 1, 0);
        pre.style.background = `url("${genTypeOfHappouDiv_case_72}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 721011:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType72(item[0], item[1], item[2], item[4], 1, 0, 1, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_72}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 721100:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType72(item[0], item[1], item[2], item[4], 1, 1, 0, 0);
        pre.style.background = `url("${genTypeOfHappouDiv_case_72}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 721101:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType72(item[0], item[1], item[2], item[4], 1, 1, 0, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_72}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 721110:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType72(item[0], item[1], item[2], item[4], 1, 1, 1, 0);
        pre.style.background = `url("${genTypeOfHappouDiv_case_72}")`;
        typeOfHappouDiv.appendChild(pre);
        break;
      case 721111:
        pre.className = "tooltip happou-line";
        pre.innerHTML = svgType72(item[0], item[1], item[2], item[4], 1, 1, 1, 1);
        pre.style.background = `url("${genTypeOfHappouDiv_case_72}")`;
        typeOfHappouDiv.appendChild(pre);
        break;

      default:
        pre.className = "empty-line";
        pre.innerHTML = "?<span class='tooltiptext'>Error!!!</span>";
        typeOfHappouDiv.appendChild(pre);
        break;
    }
  });
}



function svgType12(a, b, counter) {
  var returnValue;
  if ((a * 100) / b < 210) {
    let xValue = 10 + (a * 100) / b;
    let xValueText = 10 + (a * 100) / b / 2;
    returnValue = ` <span class='tooltiptext'><a class="counters-happou">${counter}個</a>

  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <line x1="0" y1="110" x2="220" y2="110" stroke="black" stroke-width="2" stroke-linecap="round"/>
    <line x1="10" y1="110" x2="10" y2="10" stroke="crimson" stroke-width="2" stroke-linecap="round"/>
    <line x1="10" y1="10" x2="${xValue}" y2="10" stroke="crimson" stroke-width="2" stroke-linecap="round"/>
    <line x1="${xValue}" y1="0" x2="${xValue}" y2="110" stroke="black" stroke-width="2" stroke-linecap="round"/>
    

    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" transform="translate(10, 60) rotate(90)" stroke="black" font-size="20px" >${b}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" x="${xValueText}" y="10" stroke="black" font-size="20px" >${a}</text>
  </svg>

      </span>`;
  } else {
    let yValue = 100 - b * (200 / a);
    let yValueText = 105 - (b * (200 / a)) / 2;
    returnValue = ` <span class='tooltiptext'><a class="counters-happou">${counter}個</a>

  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <line x1="0" y1="110" x2="220" y2="110" stroke="black" stroke-width="2" stroke-linecap="round"/>
    <line x1="10" y1="110" x2="10" y2="${yValue}" stroke="crimson" stroke-width="2" stroke-linecap="round"/>
    <line x1="10" y1="${yValue}" x2="210" y2="${
      100 - b * (200 / a)
    }" stroke="crimson" stroke-width="2" stroke-linecap="round"/>
    <line x1="210" y1="0" x2="210" y2="110" stroke="black" stroke-width="2" stroke-linecap="round"/>
    

    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" transform="translate(10, ${yValueText}) rotate(90)" stroke="black" font-size="20px" >${b}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" x="110" y="${yValue}" stroke="black" font-size="20px" >${a}</text>
  </svg>

      </span>`;
  }

  return returnValue;
}
function svgType32(a, b, counter) {
  var returnValue;
  if ((a * 100) / b < 210) {
    let xValue = 10 + (a * 100) / b;
    let xValueText = 10 + (a * 100) / b / 2;
    returnValue = ` <span class='tooltiptext'><a class="counters-happou">${counter}個</a>

  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <line x1="0" y1="110" x2="220" y2="110" stroke="black" stroke-width="2" stroke-linecap="round"/>
    <line x1="10" y1="110" x2="10" y2="10" stroke="crimson" stroke-width="2" stroke-linecap="round"/>
    <line x1="10" y1="10" x2="${xValue}" y2="10" stroke="crimson" stroke-width="2" stroke-linecap="round"/>
    <line x1="${xValue}" y1="10" x2="${xValue}" y2="110" stroke="crimson" stroke-width="2" stroke-linecap="round"/>
    

    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" transform="translate(10, 60) rotate(90)" stroke="black" font-size="20px" >${b}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" x="${xValueText}" y="10" stroke="black" font-size="20px" >${a}</text>
  </svg>

      </span>`;
  } else {
    let yValue = 100 - b * (200 / a);
    let yValueText = 105 - (b * (200 / a)) / 2;
    returnValue = ` <span class='tooltiptext'><a class="counters-happou">${counter}個</a>

  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <line x1="0" y1="110" x2="220" y2="110" stroke="black" stroke-width="2" stroke-linecap="round"/>
    <line x1="10" y1="110" x2="10" y2="${yValue}" stroke="crimson" stroke-width="2" stroke-linecap="round"/>
    <line x1="10" y1="${yValue}" x2="210" y2="${
      100 - b * (200 / a)
    }" stroke="crimson" stroke-width="2" stroke-linecap="round"/>
    <line x1="210" y1="${yValue}" x2="210" y2="110" stroke="crimson" stroke-width="2" stroke-linecap="round"/>
    

    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" transform="translate(10, ${yValueText}) rotate(90)" stroke="black" font-size="20px" >${b}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" x="110" y="${yValue}" stroke="black" font-size="20px" >${a}</text>
  </svg>

      </span>`;
  }

  return returnValue;
}
function svgType3(a, b, counter) {
  var returnValue;
  if ((a * 100) / b < 210) {
    let xValue = 10 + (a * 100) / b;
    let xValueText = 10 + (a * 100) / b / 2;
    returnValue = ` <span class='tooltiptext'><a class="counters-happou">${counter}個</a>

  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <line x1="10" y1="110" x2="${xValue}" y2="110" stroke="crimson" stroke-width="2" stroke-linecap="round"/>
    <line x1="10" y1="110" x2="10" y2="10" stroke="crimson" stroke-width="2" stroke-linecap="round"/>
    <line x1="10" y1="10" x2="${xValue}" y2="10" stroke="crimson" stroke-width="2" stroke-linecap="round"/>
    <line x1="${xValue}" y1="0" x2="${xValue}" y2="120" stroke="black" stroke-width="2" stroke-linecap="round"/>
    

    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" transform="translate(10, 60) rotate(90)" stroke="black" font-size="20px" >${b}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" x="${xValueText}" y="10" stroke="black" font-size="20px" >${a}</text>
  </svg>

      </span>`;
  } else {
    let yValue = 100 - b * (200 / a);
    let yValueText = 105 - (b * (200 / a)) / 2;
    returnValue = ` <span class='tooltiptext'><a class="counters-happou">${counter}個</a>

  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <line x1="10" y1="110" x2="210" y2="110" stroke="crimson" stroke-width="2" stroke-linecap="round"/>
    <line x1="10" y1="110" x2="10" y2="${yValue}" stroke="crimson" stroke-width="2" stroke-linecap="round"/>
    <line x1="10" y1="${yValue}" x2="210" y2="${
      100 - b * (200 / a)
    }" stroke="crimson" stroke-width="2" stroke-linecap="round"/>
    <line x1="210" y1="0" x2="210" y2="120" stroke="black" stroke-width="2" stroke-linecap="round"/>
    

    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" transform="translate(10, ${yValueText}) rotate(90)" stroke="black" font-size="20px" >${b}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" x="110" y="${yValue}" stroke="black" font-size="20px" >${a}</text>
  </svg>

      </span>`;
  }

  return returnValue;
}
function svgType4(a, b, counter) {
  var returnValue;
  if ((a * 100) / b < 210) {
    let xValue = 10 + (a * 100) / b;
    let xValueText = 10 + (a * 100) / b / 2;
    returnValue = ` <span class='tooltiptext'><a class="counters-happou">${counter}個</a>

  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <line x1="10" y1="110" x2="${xValue}" y2="110" stroke="crimson" stroke-width="2" stroke-linecap="round"/>
    <line x1="10" y1="110" x2="10" y2="10" stroke="crimson" stroke-width="2" stroke-linecap="round"/>
    <line x1="10" y1="10" x2="${xValue}" y2="10" stroke="crimson" stroke-width="2" stroke-linecap="round"/>
    <line x1="${xValue}" y1="10" x2="${xValue}" y2="110" stroke="crimson" stroke-width="2" stroke-linecap="round"/>
    

    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" transform="translate(10, 60) rotate(90)" stroke="black" font-size="20px" >${b}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" x="${xValueText}" y="10" stroke="black" font-size="20px" >${a}</text>
  </svg>

      </span>`;
  } else {
    let yValue = 100 - b * (200 / a);
    let yValueText = 105 - (b * (200 / a)) / 2;
    returnValue = ` <span class='tooltiptext'><a class="counters-happou">${counter}個</a>

  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <line x1="10" y1="110" x2="210" y2="110" stroke="crimson" stroke-width="2" stroke-linecap="round"/>
    <line x1="10" y1="110" x2="10" y2="${yValue}" stroke="crimson" stroke-width="2" stroke-linecap="round"/>
    <line x1="10" y1="${yValue}" x2="210" y2="${yValue}" stroke="crimson" stroke-width="2" stroke-linecap="round"/>
    <line x1="210" y1="${yValue}" x2="210" y2="110" stroke="crimson" stroke-width="2" stroke-linecap="round"/>
    

    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" transform="translate(10, ${yValueText}) rotate(90)" stroke="black" font-size="20px" >${b}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" x="110" y="${yValue}" stroke="black" font-size="20px" >${a}</text>
  </svg>

      </span>`;
  }

  return returnValue;
}
function svgType61(a, b, counter, colorA, colorB, colorC) {
  var lineAcolor = "crimson", lineBcolor = "crimson", lineCcolor = "crimson";
  if(!colorA) {
    lineAcolor = "black";
  }
  if(!colorB) {
    lineBcolor = "black";
  }
  if(!colorC) {
    lineCcolor = "black";
  }
  var c = Math.hypot(a, b).toFixed(0);
  var beta = Math.acos(a / c) * (180 / Math.PI).toFixed(0);
  var returnValue;
  if ((a * 100) / b < 210) {
    let xValue = 10 + (a * 100) / b;
    let xValueText = 10 + (a * 100) / b / 2;
    returnValue = ` <span class='tooltiptext'><a class="counters-happou">${counter}個</a>

  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <line x1="10" y1="110" x2="${xValue}" y2="110" stroke="${lineAcolor}" stroke-width="2" stroke-linecap="round"/>
    <line x1="10" y1="110" x2="10" y2="10" stroke="${lineBcolor}" stroke-width="2" stroke-linecap="round"/>
    <line x1="10" y1="10" x2="${xValue}" y2="110" stroke="${lineCcolor}" stroke-width="2" stroke-linecap="round"/>
    

    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" transform="translate(10, 60) rotate(90)" stroke="black" font-size="20px" >${b}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" x="${xValueText}" y="110" stroke="black" font-size="20px" >${a}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" transform="translate(${xValueText-5}, 60) rotate(${beta})" stroke="black" font-size="20px" >${c}</text>
  
  </svg>

      </span>`;
  } else {
    let yValue = 100 - b * (200 / a);
    let yValueText = 105 - (b * (200 / a)) / 2;
    returnValue = ` <span class='tooltiptext'><a class="counters-happou">${counter}個</a>

  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <line x1="10" y1="110" x2="210" y2="110" stroke="${lineAcolor}" stroke-width="2" stroke-linecap="round"/>
    <line x1="10" y1="110" x2="10" y2="${yValue}" stroke="${lineBcolor}" stroke-width="2" stroke-linecap="round"/>
    <line x1="10" y1="${yValue}" x2="210" y2="110" stroke="${lineCcolor}" stroke-width="2" stroke-linecap="round"/>
    

    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" transform="translate(10, ${yValueText}) rotate(90)" stroke="black" font-size="20px" >${b}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" x="110" y="110" stroke="black" font-size="20px" >${a}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" transform="translate(105, ${yValueText}) rotate(${beta})" stroke="black" font-size="20px" >${c}</text>
  </svg>

      </span>`;
  }

  return returnValue;
}
function svgType62(a, b, counter, colorA, colorB, colorC) {
  var lineAcolor = "crimson", lineBcolor = "crimson", lineCcolor = "crimson";
  if(!colorA) {
    lineAcolor = "black";
  }
  if(!colorB) {
    lineBcolor = "black";
  }
  if(!colorC) {
    lineCcolor = "black";
  }
  var c = Math.hypot(a, b).toFixed(0);
  var alpha = 360-Math.acos(a / c) * (180 / Math.PI).toFixed(0);
  var returnValue;
  if ((a * 100) / b < 210) {
    let xValue = 10 + (a * 100) / b;
    let xValueText = 10 + (a * 100) / b / 2;
    returnValue = ` <span class='tooltiptext'><a class="counters-happou">${counter}個</a>

  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <line x1="10" y1="110" x2="${xValue}" y2="110" stroke="${lineAcolor}" stroke-width="2" stroke-linecap="round"/>
    <line x1="${xValue}" y1="110" x2="${xValue}" y2="10" stroke="${lineBcolor}" stroke-width="2" stroke-linecap="round"/>
    <line x1="10" y1="110" x2="${xValue}" y2="10" stroke="${lineCcolor}" stroke-width="2" stroke-linecap="round"/>
    

    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" transform="translate(${xValue}, 60) rotate(270)" stroke="black" font-size="20px" >${b}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" x="${xValueText}" y="110" stroke="black" font-size="20px" >${a}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" transform="translate(${xValueText+5}, 60) rotate(${alpha})" stroke="black" font-size="20px" >${c}</text>
  
  </svg>

      </span>`;
  } else {
    let yValue = 100 - b * (200 / a);
    let yValueText = 105 - (b * (200 / a)) / 2;
    returnValue = ` <span class='tooltiptext'><a class="counters-happou">${counter}個</a>

  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <line x1="10" y1="110" x2="210" y2="110" stroke="${lineAcolor}" stroke-width="2" stroke-linecap="round"/>
    <line x1="210" y1="110" x2="210" y2="${yValue}" stroke="${lineBcolor}" stroke-width="2" stroke-linecap="round"/>
    <line x1="210" y1="${yValue}" x2="10" y2="110" stroke="${lineCcolor}" stroke-width="2" stroke-linecap="round"/>
    

    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" transform="translate(210, ${yValueText}) rotate(270)" stroke="black" font-size="20px" >${b}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" x="110" y="110" stroke="black" font-size="20px" >${a}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" transform="translate(115, ${yValueText}) rotate(${alpha})" stroke="black" font-size="20px" >${c}</text>
  </svg>

      </span>`;
  }

  return returnValue;
}

function svgType71(a, b, counter, h, colorA, colorB, colorH, colorC) {
  var lineAcolor = "crimson", lineBcolor = "crimson", lineCcolor = "crimson", lineHcolor = "crimson";
  if(!colorA) {
    lineAcolor = "black";
  }
  if(!colorB) {
    lineBcolor = "black";
  }
  if(!colorC) {
    lineCcolor = "black";
  }
  if(!colorH) {
    lineHcolor = "black";
  }
  var c = Math.hypot((a-b), h).toFixed(0);
  var beta = Math.asin(h / c) * (180 / Math.PI).toFixed(0);
  var returnValue;




  if ((a * 100) / h < 210) {
    let xValueA = 10 + (a * 100) / h;
    let xValueTextA = 10 + (a * 100) / h / 2;
    let xValueB = 10 + (b * 100) / h;
    let xValueTextB = 10 + (b * 100) / h / 2;
    let xValueTextC = (a-(a-b)/2)*100/h+7;
    returnValue = ` <span class='tooltiptext'><a class="counters-happou">${counter}個</a>

  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <line x1="10" y1="110" x2="${xValueA}" y2="110" stroke="${lineAcolor}" stroke-width="2" stroke-linecap="round"/>
    <line x1="10" y1="110" x2="10" y2="10" stroke="${lineHcolor}" stroke-width="2" stroke-linecap="round"/>
    <line x1="10" y1="10" x2="${xValueB}" y2="10" stroke="${lineBcolor}" stroke-width="2" stroke-linecap="round"/>
    <line x1="${xValueB}" y1="10" x2="${xValueA}" y2="110" stroke="${lineCcolor}" stroke-width="2" stroke-linecap="round"/>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" transform="translate(10, 60) rotate(90)" stroke="black" font-size="20px" >${h}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" x="${xValueTextA}" y="110" stroke="black" font-size="20px" >${a}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" x="${xValueTextB}" y="10" stroke="black" font-size="20px" >${b}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" transform="translate(${xValueTextC}, 60) rotate(${beta})" stroke="black" font-size="20px" >${c}</text>
  </svg>
      </span>`;
  } else {
    let yValue = 100 - h * (200 / a);
    let yValueText = 105 - (h * (200 / a)) / 2;
    let xValueB = 10 + b/a*200;
    let xValueTextB = 7 + b * (200 / a)/2;
    let xValueTextC = (a-(a-b)/2)*200/a+7;
    returnValue = ` <span class='tooltiptext'><a class="counters-happou">${counter}個</a>

  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <line x1="10" y1="110" x2="210" y2="110" stroke="${lineAcolor}" stroke-width="2" stroke-linecap="round"/>
    <line x1="10" y1="110" x2="10" y2="${yValue}" stroke="${lineHcolor}" stroke-width="2" stroke-linecap="round"/>
    <line x1="10" y1="${yValue}" x2="${xValueB}" y2="${yValue}" stroke="${lineBcolor}" stroke-width="2" stroke-linecap="round"/>
    <line x1="${xValueB}" y1="${yValue}" x2="210" y2="110" stroke="${lineCcolor}" stroke-width="2" stroke-linecap="round"/>
    

    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" transform="translate(10, ${yValueText}) rotate(90)" stroke="black" font-size="20px" >${h}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" x="113" y="110" stroke="black" font-size="20px" >${a}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" x="${xValueTextB}" y="${yValue}" stroke="black" font-size="20px" >${b}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" transform="translate(${xValueTextC}, ${yValueText}) rotate(${beta})" stroke="black" font-size="20px" >${c}</text>
  </svg>

      </span>`;
  }

  return returnValue;
}


function svgType72(a, b, counter, h, colorA, colorB, colorH, colorC) {
  var lineAcolor = "crimson", lineBcolor = "crimson", lineCcolor = "crimson", lineHcolor = "crimson";
  if(!colorA) {
    lineAcolor = "black";
  }
  if(!colorB) {
    lineBcolor = "black";
  }
  if(!colorC) {
    lineCcolor = "black";
  }
  if(!colorH) {
    lineHcolor = "black";
  }
  var c = Math.hypot((a-b), h).toFixed(0);
  var beta = 360-Math.asin(h / c) * (180 / Math.PI).toFixed(0);
  var returnValue;




  if ((a * 100) / h < 210) {
    let xValueA = 10 + (a * 100) / h;
    let xValueTextA = 10 + (a * 100) / h / 2;
    let xValueB = 10 + (b * 100) / h;
    let xValueTextB = 10 + (b * 100) / h / 2;
    let xValueTextC = xValueA-(a-(a-b)/2)*100/h;
    returnValue = ` <span class='tooltiptext'><a class="counters-happou">${counter}個</a>

  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <line x1="10" y1="110" x2="${xValueA}" y2="110" stroke="${lineAcolor}" stroke-width="2" stroke-linecap="round"/>
    <line x1="${xValueA}" y1="110" x2="${xValueA}" y2="10" stroke="${lineHcolor}" stroke-width="2" stroke-linecap="round"/>
    
    <line x1="${xValueA}" y1="10" x2="${xValueA-xValueB+10}" y2="10" stroke="${lineBcolor}" stroke-width="2" stroke-linecap="round"/>
    <line x1="${xValueA-xValueB+10}" y1="10" x2="10" y2="110" stroke="${lineCcolor}" stroke-width="2" stroke-linecap="round"/>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" transform="translate(${xValueA}, 60) rotate(270)" stroke="black" font-size="20px" >${h}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" x="${xValueTextA}" y="110" stroke="black" font-size="20px" >${a}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" x="${xValueA-xValueTextB+10}" y="10" stroke="black" font-size="20px" >${b}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" transform="translate(${xValueTextC}, 60) rotate(${beta})" stroke="black" font-size="20px" >${c}</text>
  </svg>
      </span>`;
  } else {
    let yValue = 100 - h * (200 / a);
    let yValueText = 105 - (h * (200 / a)) / 2;
    let xValueB = 10 + b/a*200;
    let xValueTextB = 213 - b * (200 / a)/2;
    let xValueTextC = 213 - (a-(a-b)/2)*200/a;
    returnValue = ` <span class='tooltiptext'><a class="counters-happou">${counter}個</a>

  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <line x1="10" y1="110" x2="210" y2="110" stroke="${lineAcolor}" stroke-width="2" stroke-linecap="round"/>
    <line x1="210" y1="110" x2="210" y2="${yValue}" stroke="${lineHcolor}" stroke-width="2" stroke-linecap="round"/>
    <line x1="210" y1="${yValue}" x2="${220-xValueB}" y2="${yValue}" stroke="${lineBcolor}" stroke-width="2" stroke-linecap="round"/>
    <line x1="${220-xValueB}" y1="${yValue}" x2="10" y2="110" stroke="${lineCcolor}" stroke-width="2" stroke-linecap="round"/>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" transform="translate(210, ${yValueText}) rotate(270)" stroke="black" font-size="20px" >${h}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" x="107" y="110" stroke="black" font-size="20px" >${a}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" x="${xValueTextB}" y="${yValue}" stroke="black" font-size="20px" >${b}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#solidTextBackground)" transform="translate(${xValueTextC}, ${yValueText}) rotate(${beta})" stroke="black" font-size="20px" >${c}</text>
  </svg>
      </span>`;
  }

  return returnValue;
}