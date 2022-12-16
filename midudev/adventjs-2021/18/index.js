/**
 * It takes an array of file names, and returns an array of file names with duplicate file names
 * appended with a number in parentheses
 * @param files - an array of strings representing file names
 * @returns [ "file1", "file2" ]
 */
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
