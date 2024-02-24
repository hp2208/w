document.getElementById('print-btn').addEventListener("click", () => {
  // Save canvas
  const canvas = document.getElementById('printedCanvas');
  const dataURL = canvas.toDataURL('image/png');

  // Open a new window and set its content to display the canvas image
  var newWindow = window.open('', 'Gary Oldman without an r', 'width=400,height=400');
  newWindow.document.write('<img src="' + dataURL + '" alt="Canvas Image">');
  // Close the document stream
  newWindow.document.close();

  // Download canvas by a tag
  /**const a = document.createElement('a');
  a.crossOrigin='anonymous';
  a.href = dataURL;
  a.download = '発泡.png';
  a.click();**/
});
var svgCache = document.getElementById('svg-canvas-cache');
function fillCanvasWithText(array, dateValue) {

  // Remove all old svgs in svgCache
  svgCache.innerHTML = '';
  //console.log(array);
  if(array.length>1) {

    const canvas = document.getElementById('printedCanvas');
    const context = canvas.getContext('2d');
    // Fill canvas with white background
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
     // Setting canvas col and row values
    let startX = 50, startY = 20,
        rowDistance = 30, colDistance = 270, maxRow = 30;
    let colHeight = maxRow*rowDistance;

    // Add date value
    drawBoxWithText({
        x: canvas.width-95,
        y: canvas.height-30,
        text: dateValue,
        fontSize: 14,
        fontColor: 'white',
        backgroundColor: 'black',
        padding: 5,
        borderRadius: 7
      }, context);
      
    // Populate the table with array data
    context.fillStyle = 'black';
    for (let rowDrawIndex = 0, rowIndex = 0; rowIndex < array.length; rowIndex++) {

      let currentY = startY + rowDrawIndex*rowDistance - Math.floor(rowDrawIndex/maxRow)*colHeight;
      let currentX = startX + Math.floor(rowDrawIndex/maxRow)*colDistance;
      if(array[rowIndex][4]===61) { //61
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-61';
        svgCache.innerHTML += svgType61cache(array[rowIndex][1], array[rowIndex][2], id, 1, 1, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===61000) { //61
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-61000';
        svgCache.innerHTML += svgType61cache(array[rowIndex][1], array[rowIndex][2], id, 0, 0, 0)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===61001) { //61
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-61001';
        svgCache.innerHTML += svgType61cache(array[rowIndex][1], array[rowIndex][2], id, 0, 0, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===61010) { //61
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-61010';
        svgCache.innerHTML += svgType61cache(array[rowIndex][1], array[rowIndex][2], id, 0, 1, 0)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===61011) { //61
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-61011';
        svgCache.innerHTML += svgType61cache(array[rowIndex][1], array[rowIndex][2], id, 0, 1, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===61100) { //61
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-61100';
        svgCache.innerHTML += svgType61cache(array[rowIndex][1], array[rowIndex][2], id, 1, 0, 0)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===61101) { //61
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-61101';
        svgCache.innerHTML += svgType61cache(array[rowIndex][1], array[rowIndex][2], id, 1, 0, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===61110) { //61
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-61110';
        svgCache.innerHTML += svgType61cache(array[rowIndex][1], array[rowIndex][2], id, 1, 1, 0)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===61111) { //61
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-61111';
        svgCache.innerHTML += svgType61cache(array[rowIndex][1], array[rowIndex][2], id, 1, 1, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      }
      
      else if(array[rowIndex][4]===62) { //62
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-62';
        svgCache.innerHTML += svgType62cache(array[rowIndex][1], array[rowIndex][2], id, 1, 1, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===62000) { //62
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-62000';
        svgCache.innerHTML += svgType62cache(array[rowIndex][1], array[rowIndex][2], id, 0, 0, 0)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===62001) { //62
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-62001';
        svgCache.innerHTML += svgType62cache(array[rowIndex][1], array[rowIndex][2], id, 0, 0, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===62010) { //62
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-62010';
        svgCache.innerHTML += svgType62cache(array[rowIndex][1], array[rowIndex][2], id, 0, 1, 0)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===62011) { //62
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-62011';
        svgCache.innerHTML += svgType62cache(array[rowIndex][1], array[rowIndex][2], id, 0, 1, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===62100) { //62
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-62100';
        svgCache.innerHTML += svgType62cache(array[rowIndex][1], array[rowIndex][2], id, 1, 0, 0)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===62101) { //62
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-62101';
        svgCache.innerHTML += svgType62cache(array[rowIndex][1], array[rowIndex][2], id, 1, 0, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===62110) { //62
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-62110';
        svgCache.innerHTML += svgType62cache(array[rowIndex][1], array[rowIndex][2], id, 1, 1, 0)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===62111) { //62
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-62111';
        svgCache.innerHTML += svgType62cache(array[rowIndex][1], array[rowIndex][2], id, 1, 1, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      }
       else if(array[rowIndex][4]===71) { //71
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-71';
        svgCache.innerHTML += svgType71cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 1, 1, 1, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===710000) { //71
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-710000';
        svgCache.innerHTML += svgType71cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 0, 0, 0, 0)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===710001) { //71
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-710001';
        svgCache.innerHTML += svgType71cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 0, 0, 0, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===710010) { //71
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-710010';
        svgCache.innerHTML += svgType71cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 0, 0, 1, 0)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===710011) { //71
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-710011';
        svgCache.innerHTML += svgType71cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 0, 0, 1, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===710100) { //71
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-710100';
        svgCache.innerHTML += svgType71cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 0, 1, 0, 0)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===710101) { //71
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-710101';
        svgCache.innerHTML += svgType71cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id,0, 1, 0, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===710110) { //71
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-710110';
        svgCache.innerHTML += svgType71cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 0, 1, 1, 0)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===710111) { //71
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-710111';
        svgCache.innerHTML += svgType71cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 0, 1, 1, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===711000) { //71
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-711000';
        svgCache.innerHTML += svgType71cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 1, 0, 0, 0)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===711001) { //71
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-711001';
        svgCache.innerHTML += svgType71cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 1, 0, 0, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===711010) { //71
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-711010';
        svgCache.innerHTML += svgType71cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 1, 0, 1, 0)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===711011) { //71
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-711011';
        svgCache.innerHTML += svgType71cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 1, 0, 1, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===711100) { //71
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-711100';
        svgCache.innerHTML += svgType71cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 1, 1, 0, 0)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===711101) { //71
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-711101';
        svgCache.innerHTML += svgType71cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 1, 1, 0, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===711110) { //71
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-711110';
        svgCache.innerHTML += svgType71cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 1, 1, 1, 0)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===711111) { //71
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-711111';
        svgCache.innerHTML += svgType71cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 1, 1, 1, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      }
       else if(array[rowIndex][4]===72) { //72
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-72';
        svgCache.innerHTML += svgType72cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 1, 1, 1, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else if(array[rowIndex][4]===720000) { //72
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-720000';
        svgCache.innerHTML += svgType72cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 0, 0, 0, 0)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      }else if(array[rowIndex][4]===720001) { //72
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-720001';
        svgCache.innerHTML += svgType72cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 0, 0, 0, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      }else if(array[rowIndex][4]===720010) { //72
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-720010';
        svgCache.innerHTML += svgType72cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 0, 0, 1, 0)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      }else if(array[rowIndex][4]===720011) { //72
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-720011';
        svgCache.innerHTML += svgType72cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 0, 0, 1, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      }else if(array[rowIndex][4]===720100) { //72
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-720100';
        svgCache.innerHTML += svgType72cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 0, 1, 0, 0)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      }else if(array[rowIndex][4]===720101) { //72
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-720101';
        svgCache.innerHTML += svgType72cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 0, 1, 0, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      }else if(array[rowIndex][4]===720110) { //72
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-720110';
        svgCache.innerHTML += svgType72cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 0, 1, 1, 0)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      }else if(array[rowIndex][4]===720111) { //72
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-720111';
        svgCache.innerHTML += svgType72cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 0, 1, 1, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      }else if(array[rowIndex][4]===721000) { //72
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-721000';
        svgCache.innerHTML += svgType72cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 1, 0, 0, 0)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      }else if(array[rowIndex][4]===721001) { //72
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-721001';
        svgCache.innerHTML += svgType72cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 1, 0, 0, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      }else if(array[rowIndex][4]===721010) { //72
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-721010';
        svgCache.innerHTML += svgType72cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 1, 0, 1, 0)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      }else if(array[rowIndex][4]===721011) { //72
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-721011';
        svgCache.innerHTML += svgType72cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 1, 0, 1, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      }else if(array[rowIndex][4]===721100) { //72
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-721100';
        svgCache.innerHTML += svgType72cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 1, 1, 0, 0)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      }else if(array[rowIndex][4]===721101) { //72
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-721101';
        svgCache.innerHTML += svgType72cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 1, 1, 0, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      }else if(array[rowIndex][4]===721110) { //72
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-721110';
        svgCache.innerHTML += svgType72cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 1, 1, 1, 0)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      }else if(array[rowIndex][4]===721111) { //72
        // Change row index
        rowDrawIndex = changeRowIndex(rowDrawIndex, maxRow);

        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY+rowDistance);

        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+180, currentY+rowDistance);

        let id = array[rowIndex][1] + '-' + array[rowIndex][2] + '-' + array[rowIndex][5] + '-721111';
        svgCache.innerHTML += svgType72cache(array[rowIndex][1], array[rowIndex][2], array[rowIndex][5], id, 1, 1, 1, 1)
        fillSvgToCanvas(context, document.getElementById(id), 0.75, currentX, currentY)
      } else {
        context.textAlign = 'right';
        context.font = '10px Serif';
        context.letterSpacing = '-1px';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][0].substring(0, 3), currentX-5, currentY);
        
        context.letterSpacing = 'normal';
        context.font = '26px Serif';
        context.fillText(array[rowIndex][1]==null?'':array[rowIndex][1], currentX+45, currentY);
        
        if (array[rowIndex][4]!=0) {
          context.font = '16px Serif';
          context.fillText(array[rowIndex][2]==null?'':'x', currentX+60, currentY);
          
          context.font = '26px Serif';
          context.textAlign = 'left';
          context.fillText(array[rowIndex][2]==null?'':array[rowIndex][2], currentX+68, currentY);
        }
        context.font = '22px Serif';
        context.textAlign = 'center';
        context.fillText(array[rowIndex][3]==null?'':array[rowIndex][3], currentX+125, currentY);
  
        context.textAlign = 'center';
        context.font = '30px Serif';
        switch(array[rowIndex][4]==null?'1':array[rowIndex][4]) {
          case 3:
            fillImgToCanvas(context, genTypeOfHappouDiv_case_31, 0.4, currentX+180, currentY);
            break;
          case 31:
            fillImgToCanvas(context, genTypeOfHappouDiv_case_31, 0.4, currentX+180, currentY);
            break;
          case 32:
            fillImgToCanvas(context, genTypeOfHappouDiv_case_32, 0.4, currentX+180, currentY);
            break;
          case 4:
            fillImgToCanvas(context, genTypeOfHappouDiv_case_4, 0.4, currentX+180, currentY);
            break;
          case 85:
            fillImgToCanvas(context, genTypeOfHappouDiv_case_85, 0.4, currentX+180, currentY);
            break;
        }
      }

      
        rowDrawIndex++;
    }



    //Draw lines
    context.fillStyle = 'grey';
    context.lineWidth = 0.1;
    context.beginPath(); // Start a new path
    context.moveTo(colDistance-10, 0); // Move the pen to (30, 50)
    context.lineTo(colDistance-10, canvas.height); // Draw a line to (150, 100)
    context.stroke(); // Render the path

    context.beginPath(); // Start a new path
    context.moveTo(2*colDistance-10, 0); // Move the pen to (30, 50)
    context.lineTo(2*colDistance-10, canvas.height); // Draw a line to (150, 100)
    context.stroke(); // Render the path

    context.beginPath(); // Start a new path
    context.moveTo(3*colDistance-10, 0); // Move the pen to (30, 50)
    context.lineTo(3*colDistance-10, canvas.height); // Draw a line to (150, 100)
    context.stroke(); // Render the path

    context.beginPath(); // Start a new path
    context.moveTo(4*colDistance-10, 0); // Move the pen to (30, 50)
    context.lineTo(4*colDistance-10, canvas.height); // Draw a line to (150, 100)
    context.stroke(); // Render the path
        
  }
}
function drawBoxWithText(options, ctx) {
  // Save the current canvas state
  ctx.save();

  // Extract options or use defaults
  var x = options.x || 0;
  var y = options.y || 0;
  var text = options.text || '';
  var fontSize = options.fontSize || 18;
  var fontColor = options.fontColor || 'white';
  var backgroundColor = options.backgroundColor || 'black';
  var padding = options.padding || 2;
  var borderRadius = options.borderRadius || 5; // Adjusted borderRadius

  // Set text properties
  ctx.font = fontSize + 'px sans-serif';
  var textMetrics = ctx.measureText(text);

  // Calculate box width and height based on text size and padding
  var boxWidth = textMetrics.width + 2 * padding;
  var boxHeight = fontSize + 2 * padding;

  // Draw the box
  ctx.fillStyle = backgroundColor;
  ctx.beginPath();
  ctx.moveTo(x + borderRadius, y);
  ctx.lineTo(x + boxWidth - borderRadius, y);
  ctx.arcTo(x + boxWidth, y, x + boxWidth, y + borderRadius, borderRadius);
  ctx.lineTo(x + boxWidth, y + boxHeight - borderRadius);
  ctx.arcTo(x + boxWidth, y + boxHeight, x + boxWidth - borderRadius, y + boxHeight, borderRadius);
  ctx.lineTo(x + borderRadius, y + boxHeight);
  ctx.arcTo(x, y + boxHeight, x, y + boxHeight - borderRadius, borderRadius);
  ctx.lineTo(x, y + borderRadius);
  ctx.arcTo(x, y, x + borderRadius, y, borderRadius);
  ctx.closePath();
  ctx.fill();

  // Set text properties
  ctx.fillStyle = fontColor;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';

  // Draw text
  ctx.fillText(text, x + padding, y + padding);
  // Restore the saved canvas state
        ctx.restore();
  // Example usage
      /*drawBoxWithText({
        x: 100,
        y: 50,
        text: 'Hello, World!',
        fontSize: 24,
        fontColor: 'yellow',
        backgroundColor: 'blue',
        padding: 5,
        borderRadius: 10
      });*/
}
function fillImgToCanvas(ctx, imgLink, imgScale, dx, dy) {
  const img = new Image();
  img.src = imgLink;

  img.onload = () => {
    // Set the size of the image
      let dWidth = img.width * imgScale;
      let dHeight = img.height * imgScale;
      // Draw the image at (x, y)
      ctx.drawImage(img, dx-10, dy-15, dWidth, dHeight);
  };
}
function fillSvgToCanvas(ctx, svg, imgScale, dx, dy) {
  // Create a new image element
  var img = new Image();

  // Serialize the SVG to a data URL
  var svgData = new XMLSerializer().serializeToString(svg);
  var svgBlob = new Blob([svgData], {type: "image/svg+xml;charset=utf-8"});
  var svgUrl = URL.createObjectURL(svgBlob);

  // When the image loads, draw it onto the canvas
  img.onload = function() {
    // Set the size of the image
    let dWidth = img.width * imgScale;
    let dHeight = img.height * imgScale;
    // Draw the image at (x, y)
    ctx.drawImage(img, dx+5, dy-20, dWidth, dHeight);
    URL.revokeObjectURL(svgUrl); // Clean up
  };

  // Set the image source to the SVG data URL
  img.src = svgUrl;
}
function changeRowIndex(rowDrawIndex, maxRow) {
  // Change row index
  
  if (rowDrawIndex%maxRow==22) {
    rowDrawIndex +=2;
  } else if (rowDrawIndex%maxRow==26){
    rowDrawIndex +=2;
  } else if (rowDrawIndex%maxRow==29){
    rowDrawIndex +=2;
  } else {
    rowDrawIndex +=2;
  }
  return rowDrawIndex;
}
// Generate svgs
function svgType61cache(a, b, id, colorA, colorB, colorC) {
  var lineAcolor = "crimson", lineBcolor = "crimson", lineCcolor = "crimson";
  var lineAstrokeWidth = 3, lineBstrokeWidth = 3, lineCstrokeWidth = 3;
  if(!colorA) {
    lineAcolor = "black";
    lineAstrokeWidth = 1;
  }
  if(!colorB) {
    lineBcolor = "black";
    lineBstrokeWidth = 1;
  }
  if(!colorC) {
    lineCcolor = "black";
    lineCstrokeWidth = 1;
  }
  var c = Math.hypot(a, b).toFixed(0);
  var beta = Math.acos(a / c) * (180 / Math.PI).toFixed(0);
  var returnValue;
  if ((a * 100) / b < 210) {
    let xValue = 10 + (a * 100) / b;
    let xValueText = 10 + (a * 100) / b / 2;
    returnValue = `
  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1" id="${id}">
    <line x1="10" y1="110" x2="${xValue}" y2="110" stroke="${lineAcolor}" stroke-width="${lineAstrokeWidth}" stroke-linecap="round"/>
    <line x1="10" y1="110" x2="10" y2="10" stroke="${lineBcolor}" stroke-width="${lineBstrokeWidth}" stroke-linecap="round"/>
    <line x1="10" y1="10" x2="${xValue}" y2="110" stroke="${lineCcolor}" stroke-width="${lineCstrokeWidth}" stroke-linecap="round"/>
    <defs>
      <filter x="0" y="0.2" width="1" height="0.6" id="${id+'-filter'}">
        <feFlood flood-color="white" result="bg" />
        <feMerge>
          <feMergeNode in="bg" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" transform="translate(10, 60) rotate(90)" stroke="black" font-size="20px" >${b}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" x="${xValueText}" y="110" stroke="black" font-size="20px" >${a}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" transform="translate(${xValueText-5}, 60) rotate(${beta})" stroke="black" font-size="20px" >${c}</text>
  </svg>`;
  } else {
    let yValue = 100 - b * (200 / a);
    let yValueText = 105 - (b * (200 / a)) / 2;
    returnValue = `
  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1" id="${id}">
    <line x1="10" y1="110" x2="210" y2="110" stroke="${lineAcolor}" stroke-width="${lineAstrokeWidth}" stroke-linecap="round"/>
    <line x1="10" y1="110" x2="10" y2="${yValue}" stroke="${lineBcolor}" stroke-width="${lineBstrokeWidth}" stroke-linecap="round"/>
    <line x1="10" y1="${yValue}" x2="210" y2="110" stroke="${lineCcolor}" stroke-width="${lineCstrokeWidth}" stroke-linecap="round"/>
    <defs>
      <filter x="0" y="0.2" width="1" height="0.6" id="${id+'-filter'}">
        <feFlood flood-color="white" result="bg" />
        <feMerge>
          <feMergeNode in="bg" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" transform="translate(10, ${yValueText}) rotate(90)" stroke="black" font-size="20px" >${b}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" x="110" y="110" stroke="black" font-size="20px" >${a}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" transform="translate(105, ${yValueText}) rotate(${beta})" stroke="black" font-size="20px" >${c}</text>
  </svg>`;
  }
  return returnValue;
}
function svgType62cache(a, b, id, colorA, colorB, colorC) {
  var lineAcolor = "crimson", lineBcolor = "crimson", lineCcolor = "crimson";
  var lineAstrokeWidth = 3, lineBstrokeWidth = 3, lineCstrokeWidth = 3;
  if(!colorA) {
    lineAcolor = "black";
    lineAstrokeWidth = 1;
  }
  if(!colorB) {
    lineBcolor = "black";
    lineBstrokeWidth = 1;
  }
  if(!colorC) {
    lineCcolor = "black";
    lineCstrokeWidth = 1;
  }
  var c = Math.hypot(a, b).toFixed(0);
  var alpha = 360-Math.acos(a / c) * (180 / Math.PI).toFixed(0);
  var returnValue;
  if ((a * 100) / b < 210) {
    let xValue = 10 + (a * 100) / b;
    let xValueText = 10 + (a * 100) / b / 2;
    returnValue = `
  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1" id="${id}">
    <line x1="10" y1="110" x2="${xValue}" y2="110" stroke="${lineAcolor}" stroke-width="${lineAstrokeWidth}" stroke-linecap="round"/>
    <line x1="${xValue}" y1="110" x2="${xValue}" y2="10" stroke="${lineBcolor}" stroke-width="${lineBstrokeWidth}" stroke-linecap="round"/>
    <line x1="10" y1="110" x2="${xValue}" y2="10" stroke="${lineCcolor}" stroke-width="${lineCstrokeWidth}" stroke-linecap="round"/>
    <defs>
      <filter x="0" y="0.2" width="1" height="0.6" id="${id+'-filter'}">
        <feFlood flood-color="white" result="bg" />
        <feMerge>
          <feMergeNode in="bg" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" transform="translate(${xValue}, 60) rotate(270)" stroke="black" font-size="20px" >${b}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" x="${xValueText}" y="110" stroke="black" font-size="20px" >${a}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" transform="translate(${xValueText+5}, 60) rotate(${alpha})" stroke="black" font-size="20px" >${c}</text>
  </svg>`;
  } else {
    let yValue = 100 - b * (200 / a);
    let yValueText = 105 - (b * (200 / a)) / 2;
    returnValue = `
  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1" id="${id}">
    <line x1="10" y1="110" x2="210" y2="110" stroke="${lineAcolor}" stroke-width="${lineAstrokeWidth}" stroke-linecap="round"/>
    <line x1="210" y1="110" x2="210" y2="${yValue}" stroke="${lineBcolor}" stroke-width="${lineBstrokeWidth}" stroke-linecap="round"/>
    <line x1="210" y1="${yValue}" x2="10" y2="110" stroke="${lineCcolor}" stroke-width="${lineCstrokeWidth}" stroke-linecap="round"/>
    <defs>
      <filter x="0" y="0.2" width="1" height="0.6" id="${id+'-filter'}">
        <feFlood flood-color="white" result="bg" />
        <feMerge>
          <feMergeNode in="bg" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" transform="translate(210, ${yValueText}) rotate(270)" stroke="black" font-size="20px" >${b}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" x="110" y="110" stroke="black" font-size="20px" >${a}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" transform="translate(115, ${yValueText}) rotate(${alpha})" stroke="black" font-size="20px" >${c}</text>
  </svg>`;
  }
  return returnValue;
}
function svgType71cache(a, b, h, id, colorA, colorB, colorH, colorC) {
  var lineAcolor = "crimson", lineBcolor = "crimson", lineCcolor = "crimson", lineHcolor = "crimson";
  var lineAstrokeWidth = 3, lineBstrokeWidth = 3, lineCstrokeWidth = 3, lineHstrokeWidth = 3;
  if(!colorA) {
    lineAcolor = "black";
    lineAstrokeWidth = 1;
  }
  if(!colorB) {
    lineBcolor = "black";
    lineBstrokeWidth = 1;
  }
  if(!colorC) {
    lineCcolor = "black";
    lineCstrokeWidth = 1;
  }
  if(!colorH) {
    lineHcolor = "black";
    lineHstrokeWidth = 1;
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
    returnValue = `
  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1" id="${id}">
    <line x1="10" y1="110" x2="${xValueA}" y2="110" stroke="${lineAcolor}" stroke-width="${lineAstrokeWidth}" stroke-linecap="round"/>
    <line x1="10" y1="110" x2="10" y2="10" stroke="${lineHcolor}" stroke-width="${lineHstrokeWidth}" stroke-linecap="round"/>
    <line x1="10" y1="10" x2="${xValueB}" y2="10" stroke="${lineBcolor}" stroke-width="${lineBstrokeWidth}" stroke-linecap="round"/>
    <line x1="${xValueB}" y1="10" x2="${xValueA}" y2="110" stroke="${lineCcolor}" stroke-width="${lineCstrokeWidth}" stroke-linecap="round"/>
    <defs>
      <filter x="0" y="0.2" width="1" height="0.6" id="${id+'-filter'}">
        <feFlood flood-color="white" result="bg" />
        <feMerge>
          <feMergeNode in="bg" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" transform="translate(10, 60) rotate(90)" stroke="black" font-size="20px" >${h}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" x="${xValueTextA}" y="110" stroke="black" font-size="20px" >${a}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" x="${xValueTextB}" y="10" stroke="black" font-size="20px" >${b}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" transform="translate(${xValueTextC}, 60) rotate(${beta})" stroke="black" font-size="20px" >${c}</text>
  </svg>`;
  } else {
    let yValue = 100 - h * (200 / a);
    let yValueText = 105 - (h * (200 / a)) / 2;
    let xValueB = 10 + b/a*200;
    let xValueTextB = 7 + b * (200 / a)/2;
    let xValueTextC = (a-(a-b)/2)*200/a+7;
    returnValue = `
  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1" id="${id}">
    <line x1="10" y1="110" x2="210" y2="110" stroke="${lineAcolor}" stroke-width="${lineAstrokeWidth}" stroke-linecap="round"/>
    <line x1="10" y1="110" x2="10" y2="${yValue}" stroke="${lineHcolor}" stroke-width="${lineHstrokeWidth}" stroke-linecap="round"/>
    <line x1="10" y1="${yValue}" x2="${xValueB}" y2="${yValue}" stroke="${lineBcolor}" stroke-width="${lineBstrokeWidth}" stroke-linecap="round"/>
    <line x1="${xValueB}" y1="${yValue}" x2="210" y2="110" stroke="${lineCcolor}" stroke-width="${lineCstrokeWidth}" stroke-linecap="round"/>
    <defs>
      <filter x="0" y="0.2" width="1" height="0.6" id="${id+'-filter'}">
        <feFlood flood-color="white" result="bg" />
        <feMerge>
          <feMergeNode in="bg" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" transform="translate(10, ${yValueText}) rotate(90)" stroke="black" font-size="20px" >${h}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" x="113" y="110" stroke="black" font-size="20px" >${a}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" x="${xValueTextB}" y="${yValue}" stroke="black" font-size="20px" >${b}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" transform="translate(${xValueTextC}, ${yValueText}) rotate(${beta})" stroke="black" font-size="20px" >${c}</text>
  </svg>`;
  }

  return returnValue;
}
function svgType72cache(a, b, h, id, colorA, colorB, colorH, colorC) {
  var lineAcolor = "crimson", lineBcolor = "crimson", lineCcolor = "crimson", lineHcolor = "crimson";
  var lineAstrokeWidth = 3, lineBstrokeWidth = 3, lineCstrokeWidth = 3, lineHstrokeWidth = 3;
  if(!colorA) {
    lineAcolor = "black";
    lineAstrokeWidth = 1;
  }
  if(!colorB) {
    lineBcolor = "black";
    lineBstrokeWidth = 1;
  }
  if(!colorC) {
    lineCcolor = "black";
    lineCstrokeWidth = 1;
  }
  if(!colorH) {
    lineHcolor = "black";
    lineHstrokeWidth = 1;
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
    returnValue = `
  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1" id="${id}">
    <line x1="10" y1="110" x2="${xValueA}" y2="110" stroke="${lineAcolor}" stroke-width="${lineAstrokeWidth}" stroke-linecap="round"/>
    <line x1="${xValueA}" y1="110" x2="${xValueA}" y2="10" stroke="${lineHcolor}" stroke-width="${lineHstrokeWidth}" stroke-linecap="round"/>
    <line x1="${xValueA}" y1="10" x2="${xValueA-xValueB+10}" y2="10" stroke="${lineBcolor}" stroke-width="${lineBstrokeWidth}" stroke-linecap="round"/>
    <line x1="${xValueA-xValueB+10}" y1="10" x2="10" y2="110" stroke="${lineCcolor}" stroke-width="${lineCstrokeWidth}" stroke-linecap="round"/>
    <defs>
      <filter x="0" y="0.2" width="1" height="0.6" id="${id+'-filter'}">
        <feFlood flood-color="white" result="bg" />
        <feMerge>
          <feMergeNode in="bg" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" transform="translate(${xValueA}, 60) rotate(270)" stroke="black" font-size="20px" >${h}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" x="${xValueTextA}" y="110" stroke="black" font-size="20px" >${a}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" x="${xValueA-xValueTextB+10}" y="10" stroke="black" font-size="20px" >${b}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" transform="translate(${xValueTextC}, 60) rotate(${beta})" stroke="black" font-size="20px" >${c}</text>
  </svg>`;
  } else {
    let yValue = 100 - h * (200 / a);
    let yValueText = 105 - (h * (200 / a)) / 2;
    let xValueB = 10 + b/a*200;
    let xValueTextB = 213 - b * (200 / a)/2;
    let xValueTextC = 213 - (a-(a-b)/2)*200/a;
    returnValue = `
  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1" id="${id}">
    <line x1="10" y1="110" x2="210" y2="110" stroke="${lineAcolor}" stroke-width="${lineAstrokeWidth}" stroke-linecap="round"/>
    <line x1="210" y1="110" x2="210" y2="${yValue}" stroke="${lineHcolor}" stroke-width="${lineHstrokeWidth}" stroke-linecap="round"/>
    <line x1="210" y1="${yValue}" x2="${220-xValueB}" y2="${yValue}" stroke="${lineBcolor}" stroke-width="${lineBstrokeWidth}" stroke-linecap="round"/>
    <line x1="${220-xValueB}" y1="${yValue}" x2="10" y2="110" stroke="${lineCcolor}" stroke-width="${lineCstrokeWidth}" stroke-linecap="round"/>
    <defs>
      <filter x="0" y="0.2" width="1" height="0.6" id="${id+'-filter'}">
        <feFlood flood-color="white" result="bg" />
        <feMerge>
          <feMergeNode in="bg" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" transform="translate(210, ${yValueText}) rotate(270)" stroke="black" font-size="20px" >${h}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" x="107" y="110" stroke="black" font-size="20px" >${a}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" x="${xValueTextB}" y="${yValue}" stroke="black" font-size="20px" >${b}</text>
    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${id+'-filter'})" transform="translate(${xValueTextC}, ${yValueText}) rotate(${beta})" stroke="black" font-size="20px" >${c}</text>
  </svg>`;
  }

  return returnValue;
}
// Function to sort by ABCD and merge by E array
function sortMergeArray(array, a, b, c, d, e) {
  array.sort(function (x, y) {
    // Compare by A first
    if (x[a] < y[a]) {
      return -1;
    } else if (x[a] > y[a]) {
      return 1;
    }
    // Compare by B
    if (x[b] < y[b]) {
      return -1;
    } else if (x[b] > y[b]) {
      return 1;
    }
    // Compare by C
    if (x[c] < y[c]) {
      return -1;
    } else if (x[c] > y[c]) {
      return 1;
    }
    // Compare by D
    if (x[d] < y[d]) {
      return -1;
    } else if (x[d] > y[d]) {
      return 1;
    }
  });

  const mergedArray = [];

  // Create a map to store merged values
  const mergeMap = new Map();

  array.forEach(childArray => {
    const key = [childArray[a], childArray[b], childArray[c], childArray[d]].toString();

    if (mergeMap.has(key)) {
      // Merge if the key already exists
      mergeMap.get(key)[e] += childArray[e];
    } else {
      // Add a new entry to the map
      mergeMap.set(key, [...childArray]);
    }
  });

  // Convert the map values back to an array
  mergeMap.forEach(value => {
    mergedArray.push(value);
  });


  return mergedArray;
}

function bindTextToArray(inputText) {
  var a099 = [], a100599 = [],
      a600899_299 = [], a600899_300 = [],
      a900 = [], a1000 = [],
      rTriangles = [], rTrapezoids = [], circles = [],
      bigOne = [], bigTwo = [];

  // Split the input into rows
  var lines = inputText.value.trim().split('\n');
  let currentHeader = '-';

  for (let line of lines) {
    if(line.trim()==='') {
      //Skip if the line empty
    } else if (/[a-zA-Z\-]/.test(line)) {
      // Single character lines represent headers
      currentHeader = line.split('-')[0].substring(0,3).toUpperCase();
    } else {
      // Split the line into values
      const values = line.trim().split(' ').map(value => parseInt(value, 10));
      // Assign default values if not provided
      switch (values.length) {
        case 1: values.push(values[0], 1, 2); break;
        case 2: values.push(1, 2); break;
        case 3: values.push(2); break;
      }
      // Add the current header as the first element
      // Add the array of values to the result arrays
      if(values[3].toString().substring(0,2)=='61'||values[3].toString().substring(0,2)=='62') {
        rTriangles.push([currentHeader, ...values]);
      } else if(values[3].toString().substring(0,2)=='71'||values[3].toString().substring(0,2)=='72') {
        rTrapezoids.push([currentHeader, ...values]);
      } else if(values[3]==0) {
        circles.push(['ⵁ', ...values]);
      } else if(values[1]<=99) {
        a099.push([currentHeader, ...values]);
      } else if(values[0]>=100&&values[0]<=599) {
        a100599.push([currentHeader, ...values]);
      } else if(values[0]>=600&&values[0]<=899) {
        if(values[1]<=299) {
          a600899_299.push([currentHeader, ...values]);
        } else {
          a600899_300.push([currentHeader, ...values]);
        }
      } else if(values[0]>=900&&values[0]<=999) {
        a900.push([currentHeader, ...values]);
      } else {
        a1000.push([currentHeader, ...values]);
      }
    }
  }




  //bigTwo = a099.concat(a100599, a600899_299, a600899_300, a900, a1000)
  //console.log("B2", bigTwo);

  bigOne = sortMergeArray(a099, 2, 1, 4, 0, 3)
    .concat([["-"]],
            sortMergeArray(a600899_300, 1, 2, 4, 0, 3),
            sortMergeArray(a1000, 1, 2, 4, 0, 3),[["-"]],
            sortMergeArray(a600899_299, 1, 2, 4, 0, 3),
            sortMergeArray(a900, 1, 2, 4, 0, 3),[["-"]],
            sortMergeArray(a100599, 1, 2, 4, 0, 3),[["-"]],
            sortMergeArray(rTriangles, 1, 2, 4, 0, 3),
            sortMergeArray(rTrapezoids, 1, 2, 4, 0, 3),[["-"]],
            sortMergeArray(circles, 1, 2, 4, 0, 3)
            );
  //console.log("B1", bigOne);
  return bigOne;

}
