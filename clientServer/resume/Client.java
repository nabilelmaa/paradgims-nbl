package clientServer.resume;

import java.net.*;
import java.nio.BufferOverflowException;
import java.sql.DataTruncation;
import java.util.StringTokenizer;

import java.io.*;

public class Client {
    public static void main(String[] args) throws Exception {
        String command = args[0];
        String fileName = args[1];

        try (Socket connectionToServer = new Socket("localhost", 80)) {
            InputStream in = connectionToServer.getInputStream();
            OutputStream out = connectionToServer.getOutputStream();

            BufferedReader headerReader = new BufferedReader(new InputStreamReader(in));
            BufferedWriter headerWriter = new BufferedWriter(new OutputStreamWriter(out));

            DataInputStream dataIn = new DataInputStream(in);
            long downloadedBytes = 0;

            if (command.equals("d")) {
                File locaFile = new File("ClientShare/" + fileName);
                if (locaFile.exists()) {
                    downloadedBytes = locaFile.length();
                }
                String header = "download" + " " + fileName + "\n";
                headerWriter.write(header, 0, header.length());
                headerWriter.write("bytes=" + downloadedBytes + "\n");
                headerWriter.flush();

                header = headerReader.readLine();
                StringTokenizer strk = new StringTokenizer(header, " ");
                String status = strk.nextToken();
                if (status.equals("OK")) {
                    String sizeFile = strk.nextToken();
                    int size = Integer.parseInt(sizeFile);
                    byte[] space = new byte[size];
                    dataIn.readFully(space);
                    try (FileOutputStream fileOut = new FileOutputStream("ClientShare/" + fileName)) {
                        fileOut.write(space, 0, size);
                    }
                } else if (status.equals("NOT FOUND")) {
                    System.out.println("The file specified is not found!");
                }
            } else {
                System.out.println("You're not connected to the right server!");
            }
        }
    }
}
