function convertToBinary() {
    const input = document.getElementById("input").value;
    let binary = "";

    for (let i = 0; i < input.length; i++) {
      let charCode = input.charCodeAt(i).toString(2);
      binary += charCode.padStart(8, "0") + " ";
    }

    document.getElementById("result").textContent = binary;
  }

  function clearResults() {
    document.getElementById("input").value = "";
    document.getElementById("result").textContent = "";
  }
