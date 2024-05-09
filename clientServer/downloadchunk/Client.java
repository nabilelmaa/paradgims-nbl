package clientServer.downloadchunk;

import java.net.*;
import java.util.StringTokenizer;

import java.io.*;

public class Client {
    public static void main(String[] args) throws Exception {
        String command = args[0];
        String fileName = args[1];
        String startOffset = args[2];
        String endOffset = args[3];
        try (Socket connectionToServer = new Socket("localhost", 70)) {

            InputStream in = connectionToServer.getInputStream();
            OutputStream out = connectionToServer.getOutputStream();

            BufferedReader headerReader = new BufferedReader(new InputStreamReader(in));
            BufferedWriter headerWriter = new BufferedWriter(new OutputStreamWriter(out));

            DataInputStream dataIn = new DataInputStream(in);

            if (command.equals("dc")) {
                String header = "download_chunk " + fileName + " " + startOffset + " " + endOffset + "\n";
                headerWriter.write(header, 0, header.length());
                headerWriter.flush();

                header = headerReader.readLine();

                if (header.equals("NOT FOUND!")) {
                    System.out.println("Sorry! The specifed file is not found!");
                } else if (header.equals("INVALID REQUEST!")) {
                    System.out.println("Please, specify the exact offsets of your file that you wish to download!");
                } else {
                    StringTokenizer strk = new StringTokenizer(header, " ");
                    String status = strk.nextToken();
                    if (status.equals("OK")) {
                        String sizeFile = strk.nextToken();
                        int size = Integer.parseInt(sizeFile);
                        byte[] space = new byte[size];

                        dataIn.readFully(space);
                        try (FileOutputStream fileOut = new FileOutputStream("ClientShare/" + fileName)) {
                            fileOut.write(space, 0, size);
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    } else {
                        System.out.println("Opps...Seems you're not connected to the right server.");
                    }
                }
            }
        }
    }
}
