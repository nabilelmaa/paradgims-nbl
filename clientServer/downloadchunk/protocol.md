# - Protocol

    - 1. The client opens a connection with the server and informs the server that it wants to download a chunk file.
    - 2. The client then needs to specify the header format:
        - 2.a download_chunk[one space][file name][one space][start offset][one space][end offset][line feed]
    - 3. The server needs to search for the specified file.
        - 3.a. If the file is found, then the server shall reply with the following:
            OK[one space][file size][one space][line feed]
        - 3.b. After sending the header, the server shall send the actual bytes that make up the requested file chunk, starting from the specified start byte and ending at the specified end byte.
        3.c. If the file is not found, then the server shall reply with the following:
            NOT[one space]FOUND![line feed]
    - 4. If the specified start byte is greater than the end byte, or either of the offsets is negative, or the end byte greater than the file size. Then the server shall reply with the following:
        4.a. INAVLID[one space]REQUEST![line feed]
