let bodyChildren = document.body.childNodes;
      let bodyContent = "";
      for (let i = 0; i < bodyChildren.length; i++) {
         bodyContent += bodyChildren[i].nodeName + "<br>";
      }
      let div1 = document.getElementById("div1");
      div1.innerHTML = bodyContent+ "<br>";
      
      let allElements = document.getElementsByTagName("*");
      let documentContent = "";
      for (let i = 0; i < allElements.length; i++) {
         documentContent += allElements[i].nodeName + "<br>";
      }
      
      let div2 = document.getElementById("div2");
      div2.innerHTML = documentContent + "<br>";