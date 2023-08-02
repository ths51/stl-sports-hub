function write() {
    console.log(document.getElementById("sport").value + "s")
    console.log(document.getElementById("title").value + "t")
    console.log(document.getElementById("previewText").value + "p")
    console.log(document.getElementById("articleText").value + "a")
    // console.log("M")
}

// console.log(document)

let form = document.getElementById('articleForm')

const fileSelector = document.getElementById('file-selector');
  fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList);
    console.log(fileList[0].stream().getReader().read())
  });

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let sport = document.getElementById("sport").value
    let title = document.getElementById("title").value
    let previewText = document.getElementById("previewText").value
    let articleText = document.getElementById("articleText").value

    console.log("X")
})

function readJS() {
    let file = new FileReader()
    let fileData = file.readAsText('empty.txt')
    console.log(fileData)
}

readJS()