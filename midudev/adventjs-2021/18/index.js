export default function fixFiles(files) {
  const fixedFiles = [];
  let filesCount = {};

  files.forEach((file) => {
    const f = !fixedFiles.includes(file) ? file : `${file}(${filesCount[file]})`
    filesCount[file] = (filesCount[file] || 0) + 1;;
    fixedFiles.push(f);
  });
  return fixedFiles;
}

// console.log(fixFiles(["photo", "postcard", "photo", "photo", "video"]));
