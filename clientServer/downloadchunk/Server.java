package clientServer.downloadchunk;

import java.net.*;
import java.util.StringTokenizer;
import java.io.*;

public class Server {
    public static void main(String[] args) throws Exception {

        try (ServerSocket ss = new ServerSocket(80)) {
            while (true) {
                System.out.println("Server waiting...");
                Socket connectionFromClient = ss.accept();

                System.out.println(
                        "Server got a connection from a client who's port is" + connectionFromClient.getPort());
                try {

                    InputStream in = connectionFromClient.getInputStream();
                    OutputStream out = connectionFromClient.getOutputStream();

                    BufferedReader headerReader = new BufferedReader(new InputStreamReader(in));
                    BufferedWriter headerWriter = new BufferedWriter(new OutputStreamWriter(out));

                    DataInputStream dataIn = new DataInputStream(in);
                    DataOutputStream dataOut = new DataOutputStream(out);

                    String header = headerReader.readLine();

                    StringTokenizer strk = new StringTokenizer(header, " ");

                    String command = strk.nextToken();
                    String fileName = strk.nextToken();
                    String startOffset = strk.nextToken();
                    String endOffset = strk.nextToken();

                    int startByte = Integer.parseInt(startOffset);
                    int endByte = Integer.parseInt(endOffset);

                    String errorMesssage = "NOT FOUND";
                    String invalidMesssage = "INVALID REQUEST";
                    String successMesssage = "OK";

                    if (command.equals("download_chunk")) {
                        try {
                            FileInputStream fileIn = new FileInputStream("ServerShare/" + fileName);

                            int fileSize = fileIn.available();

                            if (startByte >= 0 && endByte < fileSize && startByte <= endByte) {

                                header = successMesssage + " " + fileSize;
                                headerWriter.write(header, 0, header.length());
                                headerWriter.flush();

                                int chunkSize = endByte - startByte + 1;
                                byte[] bytes = new byte[fileSize];

                                fileIn.skip(startByte);
                                fileIn.read(bytes, 0, chunkSize);
                                dataOut.write(bytes, 0, chunkSize);

                            } else {
                                header = invalidMesssage + " " + "\n";
                                headerWriter.write(header, 0, header.length());
                                headerWriter.flush();
                            }
                            fileIn.close();
                        } catch (Exception ex) {
                            headerWriter.write(errorMesssage, 0, errorMesssage.length());
                        }
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                } finally {
                    connectionFromClient.close();
                }
            }
        }
    }
}
