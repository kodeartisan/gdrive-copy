/**
 * Parses folder URL string and returns folder ID string
 *
 * @param {string} url the folder URL for the selected folder
 * @return {string} id the folder ID for the selected folder
 */
export function parseURL(url) {
  var id, amp;

  // Get the index of the string at which the folderId starts
  var idStart = url.search('id=');
  var foldersStart = url.search('folders');

  if (idStart > 0) {
    id = url.slice(idStart + 3);
  } else if (foldersStart > 0) {
    id = url.slice(foldersStart + 8);
  } else {
    id = url;
  }

  // Find the ampersand in the remaining string, which is the delimiter between the folderId and the sharing privileges
  amp = id.indexOf('&');

  // Slice the string up to the ampersand
  if (amp > 0) {
    id = id.slice(0, amp);
  }

  return id;
}

export function getDriveFolderURL(id) {
  return `https://drive.google.com/drive/folders/${id}`;
}

export function getDriveSpreadsheetURL(id) {
  return `https://docs.google.com/spreadsheets/d/${id}/edit`;
}
