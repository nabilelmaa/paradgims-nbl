const OriginURL = "http://localhost:8080";

const browse = async (path) => {
  try {
    const url = new URL("browse", OriginURL);
    if (path) {
      url.searchParams.append("path", path);
    } else {
      url.searchParams.append("path", "Opps...Path NOT found!");
    }
    const response = await fetch(url, { method: "GET" });
    const parsedResponse = await response.json();
    return parsedResponse;
  } catch (err) {
    console.error(err);
    throw err; // throw error to propagate it.
  }
};

function browse(path) {
  const url = new URL("browse", OriginURL);
  if (path) {
    url.searchParams.append("path", path);
  } else {
    url.searchParams.append("path", "");
  }

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error("Error occured while browsing: ", error));
}

const downloadChunkFile = async (url, startOffset, endOffset) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Range: `bytes=${startOffset}-${endOffset}`, // Specify the byte range to download
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const parsedResponse = await response.blob();
    return parsedResponse;
  } catch (err) {
    console.error("Error downloading file chunk:", err);
  }
};
const url = "https://example.com/file.mp4";
const startOffset = 0;
const endOffset = 1024 * 1024;
downloadChunkFile(url, startOffset, endOffset);
