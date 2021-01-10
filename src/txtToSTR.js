function txtToSTR(file) {
    let fileReader;
    var str;

    const handleFileRead = (e) => {
      const content = fileReader.result;
      console.log(content)
      // … do something with the 'content' …
    };
    
    const handleFileChosen = (file) => {
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    };


}

export default txtToSTR;